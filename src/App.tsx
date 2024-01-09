import { useState } from 'react'

import './App.css'
import { MainScene } from './R3F/MainScene'
import { MainNavBar } from './Components/Navigation/MainNavbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{width: '100%'}}>
      <MainNavBar/>

    </div>
    <div style={{ width: "100%", height: "100vh" }}>
    <MainScene/>

    </div>
     
    </>
  )
}

export default App
