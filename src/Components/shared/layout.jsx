import React from 'react'
import { Outlet, Link } from "react-router-dom";
import logo from "/PetLogo.svg"
import Buttons from './buttons';

export default function Layout() {
    return (
        <div>

            <nav className='flex justify-between p-10 items-center'>



                <Link className='' to="/"> <img src={logo} alt="" />  </Link>

                <div className='hidden md:flex gap-5 '>
                    <Link to="signUp"><Buttons text={"Sign Up "} bg={"#fff"} color={'black'} width={'150px'} /></Link>
                    <Link to="login"><Buttons text={"Log in"} bg={"#3366FF"} color={'white'} width={'150px'} /></Link>
                    
                </div>
            </nav>

            <Outlet />
        </div>
    )
}
