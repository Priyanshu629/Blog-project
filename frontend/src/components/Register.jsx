import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Register = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
 
 function handleForm(){
  
  if(!name || !email || !password){
    alert('all the fileds required')
  }

   axios.post('http://localhost:5000/register',{name,email,password})
   .then((response)=>{
    window.location.href='/'
    console.log(response.status)})
   .catch((err)=>console.log(err))

}
  
  return (
    <div className='d-flex bg-secondary w-100 vh-100 align-items-center justify-content-center'>
       
    <div className='w-45 bg-white p-3 rounded-3'>
      <h1 className='text-center text-primary'>Register Yourself</h1>

     <div>
      <label htmlFor="">User Name <sup className='text-danger'>*</sup></label>
      <input onChange={(e)=>setName(e.target.value)}type="text" className='form-control' placeholder='Enter  username  '  value={name}/>
     </div>
     
     <div>
      <label htmlFor="">Email<sup className='text-danger'>*</sup></label>
      <input onChange={(e)=>setEmail(e.target.value)} type="email" className='form-control  mb-3' placeholder='Enter Your Email ' value={email}/>
     </div>

     <div>
      <label htmlFor="">Password<sup className='text-danger'>*</sup></label>
      <input onChange={(e)=>setPassword(e.target.value)} type="password" className='form-control' placeholder='Enter Your Password ' value={password}/>
     </div>

    <button type='submit' className='btn btn-success mt-2 w-100' onClick={handleForm}>Register</button>

    <p className='mt-2'>Already have an account?</p>

    <Link to={'/'} className='btn btn-success mt-2 w-100'>Login</Link>

    </div>
  </div>
  )
}

export default Register
