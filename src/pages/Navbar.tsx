import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from "lucide-react";


const Navlinks=()=> {
  return (
    <>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/blogs">Blogs</NavLink>
    <NavLink to="/projects">Projects</NavLink>
     </>
     );
};
const Navbar=()=>{
    const[isOpen,setIsOpen]=useState(false);
    const toggleNavbar=()=>{
        setIsOpen(!isOpen);
    };
    return(
        <>
        <nav className=' flex w-1/3 justify-end'>
            <div className=' hidden w-full  justify-between md:flex'>
            <Navlinks/>
            </div>
            <div className='md:hidden'>
                <button onClick={toggleNavbar}>
                    {isOpen?<X/>:<Menu/>}
                </button>
            </div>
         </nav>
         {isOpen&&(<div className='flex basis-full flex-col items-center'>
            <Navlinks/>
         </div>)}
        </>
        

       
    );
};
export default Navbar