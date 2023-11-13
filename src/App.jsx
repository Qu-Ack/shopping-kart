import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav/Nav'
import { useState } from 'react'

function App() {
  const [cartItems , setCartItems] = useState([]);
  function handleClick(element)
  {
    setCartItems([...cartItems , element]);
  }

 


  return (
    <div className="wrapper">
      <Nav/>
      <div className="details">
        <Outlet context={{cartItems , setCartItems, handleClick}}/>
      </div>
    </div>
  )
}

export default App
