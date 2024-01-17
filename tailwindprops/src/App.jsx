import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card/>
      <h1 className=' text-3xl bg-green-300'>Vite With Tailwind</h1>
    </>
  )
}

export default App
