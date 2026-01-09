import React, { useState } from 'react'
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        console.log(email,password);
        axios.post("api",{email,password})
             .then((res)=>{
                console.log(res)
             })
        setEmail("");
        setPassword("");
    }
  return (
    <div>
      <h2>Login</h2>
        <form onSubmit={handleSubmit} className='form-container'>
            <div className='form-field'>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} /></div><br />
            <div className='form-field'>
                <label htmlFor="">password</label>
                <input type="password" placeholder='EnterPassword' value={password} onChange={(e)=>setPassword(e.target.value)} /></div><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
