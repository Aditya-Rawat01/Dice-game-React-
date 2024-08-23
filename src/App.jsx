import { useEffect, useState } from 'react'
import React from 'react'
import './App.css'
import { Playnow } from './components/Playnow/Playnow.jsx'
import { Gamestart } from './components/Gamestart/Gamestart.jsx';


function App() {
  const [StartGame,isStartGame]=useState(false);
  function toggle() {
    isStartGame((prev)=>!prev)
  }
  return (
    <>
    
   {StartGame?<Gamestart/>:<Playnow toggle={toggle}/>}*/
    </>
  )
}


export default App
