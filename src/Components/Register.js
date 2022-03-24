import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate ,NavLink} from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [user, setuser] = useState({
    name: '',
    email: '',
    password: '',
    reEnterPassword: ''
  })

  const handlechange = (e) => {
    const { name, value } = e.target
    setuser({
      ...user,
      [name]: value
    })
  }

  const register = () => {
    const { name, email, password, reEnterPassword } = user
    if( name && email && password && (password === reEnterPassword)){
      axios.post('http://localhost:9002/register',user)
      .then( res=> {
        alert(res.data.message)
        navigate('/')
      })
    }
    else{
      alert("Invalid input")
    }
  }

  return (
    <div className='container mx-2'>
      <h1>Register Now</h1>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Full name</label>
    <input name='name' value={user.name} type="text" onChange={handlechange} className="form-control" id="name"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input name='email' type="text" value={user.email} onChange={handlechange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input name='password' value={user.password} onChange={handlechange} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="reenter" className="form-label">Re-enter Password</label>
    <input name='reEnterPassword' value={user.reEnterPassword} onChange={handlechange} type="password" className="form-control" id="reenter"/>
  </div>
  <button type="submit" onClick={register} className="btn btn-primary">Register</button><br /><br />
  <NavLink to={'/'}>Already a user?</NavLink>
</div>
  )
}

export default Register