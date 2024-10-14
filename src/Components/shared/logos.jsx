import React from 'react'
import nestle from "/Nestle.svg"
import apple from "/Apple.svg"
import beco from "/Beco.svg"
import amazon from "/Amazon.svg"
import google from "/Google.svg"
import walmart from "/Walmart.svg"






export default function Logos() {
  function handleNestle(){
    location.href = "https://www.nestle.com/"
  }
  function handleApple(){
    location.href = "https://www.apple.com/"
  }
  function handleBeco(){
    location.href = "https://www.becopets.com/"
  }
  function handleAmazon(){
    location.href = "https://www.amazon.com/"
  }
  function handleGoogle(){
      location.href = "https://www.google.com/"
  }
  function handleWalmart(){
    location.href = "https://www.walmart.com/"
  }

  function handleClick() {
  const nestle = document.getElementById('nestle');
  const apple = document.getElementById('apple');
  const beco = document.id('beco');
  const amazon = document.getElementById('amazon');
  const google = document.getElementById('google');
  const walmart = document.getElementById('walmart');

  const sponsors = [nestle, apple, beco, amazon, google, walmart]
    
  for (let sponsor of sponsors) {
   
    if(sponsor === 'nestle'){

      location.href = "https://www.nestle.com/"
    }
    else{
      location.href = "https://www.google.com/"

    }
  }
  
  
  }
  return (
    <div  className='flex  gap-y-10  gap-x-2 md: justify-evenly pt-12 flex-wrap px-3 md:mb-28 md:mt-7'>
      <div onClick={handleNestle} id='nestle' className='cursor-pointer  ' >
        <img src={nestle} alt="" className='h-8' />
      </div>

      <div onClick={handleApple} id='apple' className='cursor-pointer  ' >
        <img src={apple} alt="" className='h-8' />
      </div>

      <div onClick={handleBeco} id='beco' className='cursor-pointer  '>
        <img src={beco} alt="" className='h-8' />

      </div>

      <div onClick={handleAmazon} id='amazon' className='cursor-pointer  '>
        <img src={amazon} alt="" className='h-8' />

      </div>

      {/* <div className='sm: flex sm: flex-row sm: mt-9 border sm: mr-48'><br /> */}
      <div onClick={handleGoogle} id='google' className='cursor-pointer  '>
        <img src={google} alt="" className='h-8' />

      </div>

      <div onClick={handleWalmart} id='walmart' className='cursor-pointer  '>
        <img src={walmart} alt="" className='h-8' />

      </div>

      {/* </div> */}



    </div>
  )
}
