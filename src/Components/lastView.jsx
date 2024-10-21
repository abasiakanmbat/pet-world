import React from 'react'
import logo from "/PetLogo.svg"
import Buttons from '../Components/shared/buttons' 
import facebook from '/facebook.png'
import inner from '/inner.png'
import ig from '/ig.png'
import twit from '/twit.png'

export default function LastView() {
  return (
    <div className='p-7'>
      <div className='md:flex justify-between'>
        <div className=''>
          <div to="/" className=''> <img src={logo} alt="" />  </div>
          <p className='mt-14'>Update right to your inbox</p>
          <div className='md:flex items-center mt-4 '>
            <label htmlFor="email"></label>
            <input placeholder='Email Address' type="email" name="" id="" className='border p-2 md:w-96 w-full  mr-10' /> 
            <div className='hidden md:block'>

            <Buttons text={"Send"} bg={"#0068fe"} width={"100px"}  />         
            </div>
            <button className='border w-full p-3 bg-[#0068fe] rounded-lg lg:hidden mt-7 text-white'> Send</button>
          </div>
        </div>
        <div className=' md:flex gap-14 flex-row'>
        <div className=' '>
          <p className='font-semibold text-xl mt-5 md:mt-0 pl-4 md:pl-0'>Our story</p>
          <div className='hidden md:block'>
          <p>FAQ</p>
          <p>Contract</p>
          </div>
        </div>
        <div className=''>
           <p className='font-semibold text-xl mt-3 md:mt-0 pl-4 md:pl-0'>Pet care</p>
           <div className='hidden md:block'>
           <p>Treatment</p>
           <p>Health</p>
           <p>Hygine</p>
           </div>
        </div>
        <div className=' '>
           <p className='font-semibold text-xl mt-3 md:mt-0 pl-4 md:pl-0'>Shop</p>
           <div className='hidden md:block'>
           <p>Pet Food</p>
           <p>Toys</p>
           <p>Accessories</p>
           </div>
        </div>
      </div>
        </div>
      <div className='   md:flex font-semibold text-xl gap-10 justify-between mt-4'>
        <div className='md:flex space-x-5'>
          <p className=' mt-3 md:mt-0 pl-4 md:pl-0'>© PETWORLD 2022</p>
          <p className=' mt-3 md:mt-0'>Privacy policy</p> 
          <p className=' mt-3 md:mt-0'>Terms of use</p>
        </div>
        <div className='md:flex-col pl-4 md:pl-0 mt-3 md:mt-0'>
          <img className='inline mr-5' src={facebook} alt="" />
          <img className='inline mr-5' src={inner} alt="" />
          <img className='inline mr-5' src={ig} alt="" />
          <img className='inline mr-5' src={twit} alt="" />
        </div>
      </div>
    </div>
  )
}
