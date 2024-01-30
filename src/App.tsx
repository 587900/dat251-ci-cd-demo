import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import clownImage from './assets/clown.webp'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [clownMode, setClownMode] = useState(false);

  let w : any = window;

  useEffect(() => {
    let newClownMode = w.clownMode[0];
    if (newClownMode != clownMode) setClownMode(newClownMode);
  }, w.clownMode);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        { clownMode ? (
          <a href="https://react.dev" target="_blank">
            <img src={clownImage} className="logo react" alt="Clown image" />
          </a>
        ) : (
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        )}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
