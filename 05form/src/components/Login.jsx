import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {


  const logindata ={email:"",password:""}
const[inputLogin,setInputLogin]= useState(logindata)

function handleLogin(e)
{
  setInputLogin({...inputLogin,[e.target.name]:e.target.value})
}

function handleLoginSubmit(e)
{
  e.preventDefault()
  if(!inputLogin.email || !inputLogin.password)
  {
    alert("All fields are Mandatory")
  }else
  {
    console.log("Logined:",inputLogin)
  }
}
  return (
    <>
    <div>
         <div className='flex flex-col items-center justify-center h-screen'>
            <div className='w-full max-w-md bg-[#222] rounded-xl shadow-md py-8 px-8'>
                <h2 className='text-[28px] font-bold text-white mb-6 text-center'>Login </h2>
                <form className='flex flex-col' onSubmit={handleLoginSubmit}>
                   
                    <input placeholder='Email' name='email' value={inputLogin.email} onChange={handleLogin}
                        className='bg-gray-700 text-white border-0 rounded-md p-2 mb-4
                        focus:bg-gray-600 focus:outline-none 
                          transition ease-in-out duration-150
                        placeholder-gray-300'
                    type="email" />
                    <input placeholder='Password' name='password' value={inputLogin.password} onChange={handleLogin}
                        className='bg-gray-700 text-white border-0 rounded-md p-2 mb-4
                        focus:bg-gray-600 focus:outline-none 
                          transition ease-in-out duration-150
                        placeholder-gray-300'
                    type="password" />
                     
                    <button className='bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-600 hover:to-blue-600 transition ease-in duration-200'>Submit</button>
                    <p className='text-white mt-4 text-center'>Create A new Account!!
                    <Link className="text-white-500 hover:underline mt-4 px-1 text-blue-600" to="/Signup">Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login