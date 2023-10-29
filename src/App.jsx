import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav/Nav'

function App() {

  return (
    <div className="wrapper">
      <Nav/>
      <div className="details">
        <Outlet/>
      </div>
    </div>
  )
}

export default App
