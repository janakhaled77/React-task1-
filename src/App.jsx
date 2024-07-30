import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout';
import NavBar from './NavBar'
import Footer from './Footer'
import About from './About'
import Portofolio from './Portofolio'
import Contact from './Contact'
import NotFound from './NotFound'


 const routing = createBrowserRouter([
  {element:<Layout/>,
    Path:"",
    children: [
    {path:"About",element:<About/>},
    {path:"Portofolio",element:<Portofolio/>},
    {path:"Contact",element:<Contact/>},
    {path:"",element:<NotFound/>}
   ],
  },
])


function App() {
  return (
    <>
     <RouterProvider router={routing}></RouterProvider>
     
    </>
  )
}

export default App
