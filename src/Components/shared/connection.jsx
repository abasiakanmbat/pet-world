import React from 'react'
import adogpic from "/adogpic.png"
import Buttons from './buttons'
import { Link } from "react-router-dom";

export default function Connection() {
  return (
    <div>
        <div className='md:flex   place-content-between bg-[#F7F5FD] py-11' >
                <div className=' mx-auto py-10 px-5 md:py-0'>
                    <p className='w-fit mx-auto text-center md:text-left text-6xl md:text-[80px] font-semibold  md:ml-[40px]' >Let's Talk, <br/> Woof!</p>
                    <p style={{ paddingTop: 50, fontSize: 17, textShadow: '2px 2px 4px #000000' }} className='md:ml-[40px] text-[#424242] text-center md:text-left'>
                        You can ask us questions about your pet,<br/>
                        and we will be happy to answer you!
                    </p>
                    <div className='text-center md:text-left mt-12 md:ml-10 '>
                    <Link to="signUp"> <Buttons text={"contact Us"} bg={"#fde68a"} width={"150px"} /></Link>

                    </div>
                </div>
                <div className='mx-auto ml-11 pr-11 mt-10 md:mt-0 flex justify-center  px-5'>
                    <div className='w-fit '>
                        <img src={adogpic} alt="" />
                    </div>
                </div>

        </div>
    </div>
  )
}

