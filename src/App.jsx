import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav/Nav'
import { useState } from 'react'

function App() {
  const [cartItems , setCartItems] = useState([]);
  const [isAdded , setIsAdded] = useState(false);

  // const carts = document.getElementsByTagName('svg');
  function handleClick(element)
  {
    setCartItems([...cartItems , element]);
    setIsAdded(true);

  }

 


  return (
    <div className="wrapper">
      <Nav/>
      <div className="details">
        <Outlet context={{cartItems , setCartItems, handleClick , isAdded}}/>
      </div>
    </div>
  )
}

export default App
