import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ConvertirTiempoSeg from './punto1.jsx'
import CalcularPago from './punto2.jsx'
import Saludo from './punto3.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ConvertirTiempoSeg/>
      <CalcularPago/>
      <Saludo/>
    </> 
  )
}

export default App
