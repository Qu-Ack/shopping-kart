import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Shop from './components/Shop/Shop.jsx'
import Errorpage from './components/Error/Errorpage.jsx'
import Home from './components/Home/Home.jsx'
import './index.css'
import About from './components/About/About.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<Errorpage />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path:"/shop",
        element: <Shop />
      } , 
      {
        path:"/about",
        element: <About />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
