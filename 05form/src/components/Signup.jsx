import React, {useEffect, useState} from 'react'
import { data, Link } from 'react-router-dom';

function Signup() {

  const userdata ={firstname:"",lastname:"",email:"",password:"",confirmpassword:"",gender:""};
  const[inputData,setInputData] =useState(userdata);

  function handleData(e){
      
    setInputData({...inputData,[e.target.name]:e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault();
    if(!inputData.firstname || !inputData.lastname || !inputData.email || !inputData.password || !inputData.confirmpassword || !inputData.gender)
    {
      alert("All fields are Mandatory")
    }
    else{
      console.log("Form Submitted:", inputData); 
    }
   
  }  

  return (
    <>
    {/* <pre>{(flag)?<h2 className='ui-define'>Hello {inputData.name}, You've Registered Successfully </h2>:""}</pre> */}
    <div>
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='w-full max-w-md bg-[#222] rounded-xl shadow-md py-8 px-8'>
                <h2 className='text-[28px] font-bold text-white mb-6 text-center'>Sign up</h2>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <div className='flex space-x-4 mb-4'>
                        <input placeholder='First Name' name="firstname" value={inputData.firstname}  onChange={handleData}
                        className='bg-gray-700 text-white border-0 rounded-md p-2 w-1/2 
                        focus:bg-gray-600 focus:outline-none 
                          transition ease-in-out duration-150
                        placeholder-gray-300'
                         type="text" />

                        <input placeholder='Last Name'name='lastname' value={inputData.lastname}  onChange={handleData}
                        className='bg-gray-700 text-white border-0 rounded-md p-2 w-1/2 
                        focus:bg-gray-600 focus:outline-none 
                          transition ease-in-out duration-150
                        placeholder-gray-300'
                         type="text" />
                    </div>
                    <input placeholder='Email' name='email' value={inputData.email} onChange={handleData}
                        className='bg-gray-700 text-white border-0 rounded-md p-2 mb-4
                        focus:bg-gray-600 focus:outline-none 
                          transition ease-in-out duration-150
                        placeholder-gray-300'
                    type="email" />

                    {/* gender */}

                      <div className='flex items-center mb-4'>
                        <label className='text-white mr-4' name="gender">Gender:</label>
                        <div className='flex space-x-6'>
                          {/* Male Checkbox */}
                          <label className='flex items-center space-x-2'>
                            <input
                              type="radio"
                              name="gender"
                              value="Male"
                              onChange={handleData}
                              checked={inputData.gender === "Male"}
                              className='appearance-none w-5 h-5 rounded-full bg-gray-700 checked:bg-blue-500 
                                        border-2 border-gray-300 focus:ring-2 focus:ring-blue-400'
                            />
                            <span className='text-white'>Male</span>
                          </label>
                          {/* Female Checkbox */}
                          <label className='flex items-center space-x-2'>
                            <input
                              type="radio"
                              name="gender"
                              value="Female"
                              onChange={handleData}
                              checked={inputData.gender === "Female"}
                              className='appearance-none w-5 h-5 rounded-full bg-gray-700 checked:bg-pink-500 
                                        border-2 border-gray-300 focus:ring-2 focus:ring-pink-400'
                            />
                            <span className='text-white'>Female</span>
                          </label>
                        </div>
                      </div>


                     
                    <input placeholder='Password' name='password' value={inputData.password}  onChange={handleData}
                        className='bg-gray-700 text-white border-0 rounded-md p-2 mb-4
                        focus:bg-gray-600 focus:outline-none 
                          transition ease-in-out duration-150
                        placeholder-gray-300'
                    type="password" />
                     <input placeholder='Confirm Password' name='confirmpassword' value={inputData.confirmpassword}  onChange={handleData}
                        className='bg-gray-700 text-white border-0 rounded-md p-2 mb-4
                        focus:bg-gray-600 focus:outline-none 
                          transition ease-in-out duration-150
                        placeholder-gray-300'
                    type="password" />

                    <button className='bg-gradient-to-r from-indigo-500 to-blue-500 text-white 
                                       font-medium py-2 px-4 rounded-md hover:bg-indigo-600 hover:to-blue-600 
                                      transition ease-in duration-200'>Submit</button>
                    <p className='text-white mt-4 text-center'>Already have an account?
                    <Link className="text-white-500 hover:underline mt-4 px-1 text-blue-600" to="/Login">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup