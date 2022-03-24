import axios from 'axios'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

const Login = ({setLoginUser}) => {
  const [user, setuser] = useState({
    name: '',
    password: ''
  })

  const navigate = useNavigate()

  const handlechange = (e) => {
    const { name, value } = e.target
    setuser({
      ...user,
      [name]: value
    })
  }

  const login = () =>{
    axios.post('http://localhost:9002/login',user)
    .then(res =>{
      alert(res.data.message)
      setLoginUser(res.data.user)
      navigate('/')
    } )
  }

  return (
    <div className='container mx-2'>
      <h1>Login Now</h1>
  <div className="mb-3">
    <label htmlFor="username" className="form-label">Username</label>
    <input name='name' value={user.name} onChange={handlechange} type="text" className="form-control" id="username"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input name='password' type="password" value={user.password} onChange={handlechange} className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" onClick={login} className="btn btn-primary">Submit</button><br /><br />
  <NavLink to={'/register'}>Not yet registered?</NavLink>
</div>
  )
}

export default Login