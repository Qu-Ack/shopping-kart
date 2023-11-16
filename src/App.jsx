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

  // function deleteItem(id)
  // {
  //   setCartItems(cartItems.filter(item => item.id !== id));
  // }

  function addItemsUsingInput(val , id)
  {
    setCartItems(cartItems.map(item => {
      if (item.id == id)
      {
        return {...item, quantity: val}
      } else {
        return item
      }
    }))
  }

  function addItems(val, id)
  {
    setCartItems(cartItems.map((item) => {
      if (item.id == id)
      {
        // if (val ==-1 && item.quantity == 1)
        // {
        //   return deleteItem(item.id);
        // }
        return {...item, quantity: item.quantity + val}
      } else {
        return item
      }
    }))

  }

 


  return (
    <div className="wrapper">
      <Nav/>
      <div className="details">
        <Outlet context={{cartItems , setCartItems, handleClick, addItems, addItemsUsingInput }}/>
      </div>
    </div>
  )
}

export default App
