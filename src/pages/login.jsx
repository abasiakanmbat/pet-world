import React from 'react'

export default function Login() {
  return (
    <div className='border text-center w-fit mx-auto p-16'>
      <p className='text-5xl font-bold'>
          PET WORLD
      </p>
      <div>
         <label htmlFor="MN OR EM"></label>
           <input placeholder='Mobile Number or Email' type="" className='border p-2 w-96 mt-16' /> <br />
           <label htmlFor="password"></label>
           <input placeholder='Password' type="password" name="" id="" className='border p-2 w-96 mt-5' />
      </div>
      
      <div className='flex justify-center mb-5 pt-6 '>
          <div className='border-b w-44'>   
        </div>
        <div  className='text-[#737373] px-4 translate-y-3'>
          OR
        </div>
        <div  className='border-b w-44'>
        </div>
        </div>
        <p className='text-sm text-[#737373]'>Log in with Facebook</p>
        <p className='text-xs pt-3 text-[#737373]'>Forgot Password?</p>




      </div>
  )
}
