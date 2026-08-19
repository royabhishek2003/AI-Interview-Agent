import React from "react"
import {Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Auth from"./pages/Auth";

export const ServerUrl= "http://localhost:8000"
function App() {
  return(
     <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/auth' element ={<Auth/>}></Route>
     </Routes>
  )
}

export default App