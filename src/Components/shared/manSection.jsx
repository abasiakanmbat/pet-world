import React from 'react'
import ImageMan from "/ImageMan.png"


export default function ManSection() {
  return (

<div className='py-10 bg-[#ECE7FB] my-10 flex flex-col md:flex-row justify-between items-center px-80 md:flex-wrap '>

    <div className='lg:w-80 sm:w-19'>
      <img src= {ImageMan} alt="" className=''/>
    </div>


<div className=''>
We love using 'PETWORLD' products. <br />  Environmentally friendly and sustainable. <br />
We have the sustainable dog bowls and <br /> regularly use the mint scented poo bags <br /> which were all such great value for money.

{/* <span className='pt-1'>Dylan Shaw</span> */}
</div>



    </div>
  )
}
