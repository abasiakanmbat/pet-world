import React from 'react'
import ImageMan from "/ImageMan.png"
import ManSm from "/man-sm.png"
import quotes from "/quotes.svg"



export default function ManSection() {
  return (

    <div className=' border-black py-10 bg-[#ECE7FB] mt-20 flex flex-col md:flex-row justify-center md:space-x-10 lg:space-x-16 items-center  '>

      <div className='lg:w-80 sm:w-19 hidden md:block'>
        <img src={ImageMan} alt="" className='' />
      </div>
      <div className='lg:w-80 sm:w-19 md:hidden'>
        <img src={ManSm} alt="" className='' />
      </div>


      <div className=''>
        <div className='pt-10 pb-5'>

          <img src={quotes} alt="Quote.png" />
        </div>
        <p className='font-semibold'>

          We love using 'PETWORLD' <br className='md:hidden' /> products. <br className='hidden md:block' />  Environmentally <br className='md:hidden' /> friendly and sustainable.<br className='' />
          We have the sustainable <br className='md:hidden' /> dog bowls and <br className='hidden md:block' />   regularly use <br className='md:hidden' /> the mint scented poo bags <br className='' /> which were all such great <br className='md:hidden' /> value for money.
        </p>
        
        <div className=' text-[#737373] mt-10'>Dylan Shaw</div>
       
      </div>



    </div>
  )
}
