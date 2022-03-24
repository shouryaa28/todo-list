import React, { useState } from 'react'
import Navigation from './Components/Navigation'
import Login from './Components/Login'
import Display from './Components/Display'
import Register from './Components/Register'
import Profile from './Components/Profile'
import { Route, Routes } from "react-router-dom";

const App = () => {

  const [user,setLoginUser] = useState({})
  console.log(user)
  return (
    <>
    <Navigation/>
    <Routes> 
      <Route path='/' element={ user && user._id ? <Display /> : <Login setLoginUser={setLoginUser}/>}/>
      <Route path='/login' element={<Login setLoginUser={setLoginUser}/>}/>
      <Route path='/register'element={<Register/>}/>
      <Route path='/profile' element={user && user._id ? <Profile setLoginUser={setLoginUser} />: <Login setLoginUser={setLoginUser}/>}/>
    </Routes>
    </>
  )
}

export default App