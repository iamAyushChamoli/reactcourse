import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    city:"ABC",
    state:"XYZ",
    country:"PQR",
  }

  return (
    <>
      <Card username="ayush" objectSample={myObj}/>
      <h1 className=' text-3xl bg-green-300'>Vite With Tailwind</h1>
    </>
  )
}

export default App
