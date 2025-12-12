import { useState } from "react";
import { useEffect } from "react"; 
import "./index.css"
const TOTAL_TIME = 30;
const techniques = {
  stressed: {
    name: "Box breathing",
    description: "Steady 4-count inhale, hold, and exhale to calm your system.",
    inhale: 4,
    exhale: 4,
  },
  tired: {
    name: "Energising breath",
    description: "Shorter, even breaths to gently wake up your body.",
    inhale: 3,
    exhale: 3,
  },
  unmotivated: {
    name: "Reset breath",
    description: "Longer exhale to clear mental fog and reset focus.",
    inhale: 4,
    exhale: 6,
  },
};


function App(){
  const [step, setStep] = useState("start");
  const [mood,setMood] = useState("")
  const[TimeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [phase, setPhase] = useState("inhale");
  const [phaseLeft, setPhaseLeft] = useState(0);  
{/*TIMER*/}
  
  useEffect (()=>{
    // count when on breathing screen// 
    if(step === "breathing" && TimeLeft > 0)
      {
      const timerId = setTimeout(() => {
        setTimeLeft(TimeLeft-1)
      }, 1000);  //timerId decrease by 1 every second

    //back up (if something changes, cancel old timer)
    return () => clearTimeout(timerId);
    }

    //when time hits 0 in "breathing", move to "done" 
    if(step == "breathing"&& TimeLeft === 0)
      {
      setStep("done");
    }
  },[step,TimeLeft]); // the effect re-runs WHENEVER step or timeleft change

{/*INHALE EXHALE CHECKING*/}

  const technique = techniques[mood];
  let isInhale = true;
  let cueText = "";

  if (step === "breathing" && technique) {
    const cycleLength = technique.inhale + technique.exhale;
    const elapsed = TOTAL_TIME - TimeLeft;
    const positionInCycle = elapsed % cycleLength;

    isInhale = positionInCycle < technique.inhale;
    cueText = isInhale ? "Breathe in… 🫁" : "Breathe out… 🌬️";
  }


  return(
  <div className="page">
    <h1 className="logo">Welcome To BreatheEasy! </h1>
    <div className="card">
    
    {/*START SCREEN*/} 
    {step === "start" && (
      <>
      
      <h1>Press Enter to Begin</h1>
      {/*ENTER BUTTON*/}
      <button
        onClick={() => setStep("mood")}
        className = "btn">

        Enter
      </button>
      
    
      
      </>
    )}
    
    {/*MOOD SELECTION SCREEN*/} 
    {step === "mood" &&(
      <>
      <h1>How are you feeling?</h1>

      {/*STRESSED BUTTON*/}
      <button onClick={() => {
        setMood("stressed");
        setTimeLeft(TOTAL_TIME);
        setStep("breathing");
  }}
        
        className="btn">
          stressed 

      </button>

      {/*TIRED BUTTON*/}
      <button onClick={() => {
        setMood("tired");
        setTimeLeft(TOTAL_TIME);
        setStep("breathing");
  }}
        
          className="btn">
        
          tired 

      </button>

      {/*UNMOTIVATED BUTTON*/}
      <button onClick={() => {
        setMood("unmotivated");
        setTimeLeft(TOTAL_TIME);
        setStep("breathing");
  }}
        className="btn">

          unmotivated 

      </button>
      </>


    )}

  
  
    
  {/*BREATHING SCREEN*/}
  {step === "breathing"&&(
  <div>
    <h2>Feeling {mood} ? </h2>
    <h2>Breathe with me!</h2>
    {technique && (
      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
        <p ><strong>Technique: {technique.name}</strong></p>
        <p className="technique_desc">{technique.description}</p>
        <p className="technique_desc">
          Pattern: inhale {technique.inhale}s, exhale {technique.exhale}s
        </p>
      </div>
    )}
    {/*SCALE CIRCLE ACCORDING TO INHALE/EXHALE*/} 
  
  <div className="breathing-circle"
          style={{transform: isInhale ? "scale(1.15)" : "scale(1)",
          backgroundColor: isInhale ? "#7dd3fc" : "#a7f3d0",
    }}>
      
    </div>
    <p style={{ fontSize: "20px", marginTop: "10px" }}>{cueText}</p>

    <h2 className="timer">Time Left: {TimeLeft}s</h2>

  </div>
  
  )}
  {/* DONE SCREEN */}
      {step === "done" && (
        <div>
          <h2 >You’re all done! 🎉</h2>
          <p>Hope you are feeling better ~</p>

          <button
            onClick={() => {
              setStep("start");
              setMood("");
              setTimeLeft(TOTAL_TIME);
            }}
            className="btn"
          >
            Restart
          </button>
        </div>
      )}
  
  
  
    </div> 
  </div>




  );
}
export default App;