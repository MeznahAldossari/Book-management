import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Router from './Router/Router'
import Home from './components/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Router/>
    </>
  )
}

export default App
