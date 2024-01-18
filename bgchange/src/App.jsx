import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color , setColor] = useState('olive')

  

  return (
    <div
      className="w-full h-screen duration-200  "
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed flex flex-wrap justify-center bottom-12 
      inset-x-0  "
      >
        <div
          className="flex flex-wrap justify-center gap-3 shadow-lg
          bg-white px-3 py-2 rounded-3xl"
        >
          <button
            className="outline-none px-4 py-1 rounded-full *
         shadow-lg text-black"
            onClick={() => setColor("RED")}
          >
            RED
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full *
           shadow-lg text-black"
            onClick={() => setColor("GREEN")}
          >
            GREEN
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full *
           shadow-lg text-black"
            onClick={() => setColor("BLUE")}
          >
            BLUE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
