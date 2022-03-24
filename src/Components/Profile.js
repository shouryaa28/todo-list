import React from 'react'
import './Display.css'

const Profile = ({setLoginUser}) => {
  return (
    <div className='homepage'>
        <h1>Hi welcome again !</h1>
        <button className='btn btn-outline-warning'>Change username</button><br />
        <button className='btn btn-outline-danger'>Change password</button><br />
        <button className='btn btn-primary' onClick={()=>setLoginUser({})}>Logout</button>
    </div>
  )
}

export default Profile