import React from 'react'
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div >
       <div className='border text-center w-fit mx-auto p-10'>
        <p className='text-5xl font-bold'>
          PET WORLD
        </p>
        <p className='pt-5 text-[#737373] '>
          Sign up to see photos and videos 
          <br />from your favourite pet
        </p>
        <div className='flex justify-center mb-5  '>
          <div className='border-b w-44'>   
        </div>
        <div  className='text-[#737373] px-4 translate-y-3'>
          OR
        </div>
        <div  className='border-b w-44'>
        </div>
        </div>
        <div>
           <label htmlFor="MN OR EM"></label>
           <input placeholder='Mobile Number or Email' type="" className='border p-2 w-96 ' /> <br />
           <label htmlFor="password"></label>
           <input placeholder='Password' type="password" name="" id="" className='border p-2 w-96 mt-5' /> <br />
           <label htmlFor="Full name"></label>
           <input placeholder='Full Name' type="text" className='border p-2 w-96 mt-5' /> <br />
           <label htmlFor="u name"></label>
           <input placeholder='User Name' type="text" className='border p-2 w-96 mt-5' />
        </div>
        <p className='w-96 mt-5  text-[#737373]' >By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
        <Link to="/pet-world/">
        <button className='border w-full p-3 bg-[#0068fe] rounded-lg  mt-7 text-white'> Sign Up</button>   
        </Link>
       </div>
       <div className='border text-center w-4/12 m-4 mx-auto p-4'>
        <p>Have an account?</p> 
        <Link to="/login"><button className='text-[#0068fe]'>Login</button></Link>
       </div>

      </div>
)
}
