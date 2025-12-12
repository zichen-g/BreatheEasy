# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Mood Breathing App

A simple React web application that guides users through a short breathing exercise based on their current mood.

## Features
- Mood selection (stressed, tired, unmotivated)
- Automatically assigned breathing techniques
- Animated breathing circle synced with inhale/exhale cues
- Countdown timer and completion screen
- A clean and calming UI designed for minimal cognitive load

## Tech Stack
- React
- Vite
- JavaScript
- CSS

## Setup Instructions

1. Clone the repository
   ```bash
   git clone <repo-url>
   cd mood-breathing-app
   
2. Install dependencies 
    npm install 

3. Run the development server 
    npm run dev 

4. Open the browser at: 
    http://localhost:5173


