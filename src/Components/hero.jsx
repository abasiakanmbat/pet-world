import React from 'react'
import dogpic from "/DogPic.png"
import Buttons from '../Components/shared/buttons' 
import { Link } from "react-router-dom";
export default function Hero() {
    return (
        <div>
            <div className='md:flex   place-content-between bg-[#F7F5FD]
    py-11' >
                <div className=' mx-auto py-10 px-5 md:py-0'>
                    <h1 className='w-fit mx-auto text-center md:text-left text-6xl md:text-[80px] font-semibold  md:ml-[40px]' >Pet Store <br className='hidden md:block' /> & <br className='md:hidden' /> Beyond</h1>
                    <p style={{ paddingTop: 50, fontSize: 17, textShadow: '2px 2px 4px #000000' }} className='md:ml-[40px] text-[#424242] text-center md:text-left'>This is a sample landing page,<br className='md:hidden' />
                        created with Figma <br className='hidden md:block' /> and Anima.<br className='md:hidden' /> No coding involved.
                    </p>
                    <div className='text-center md:text-left mt-12 md:ml-10 '>
                        
                        <Link to="/signUp"><Buttons text={"Get started"} bg={"#fde68a"} width={"150px"} /></Link>
                    </div>
                </div>
                <div className=' mx-auto ml-11 pr-11 mt-10 md:mt-0 flex justify-center  px-5'>
                    <div className='w-fit '>
                    <img src={dogpic} alt="" />

                    </div>
                </div>

            </div>
        </div>
    )
}
