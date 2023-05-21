import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
const Header = () => {
    const [toggle,setToogle] = useState(false);
  return (
    <div className="bg-[#2699fb] p-4">
        <div className='max-w-[1100px] py-[15px] items-center flex justify-between border-black mx-auto'>
            <div className='text-3xl font-bold'>
                OpenCode
            </div >
            {
                toggle ?
                <AiOutlineClose onClick={()=> setToogle(!toggle)} className='text-white text-2xl md:hidden block'/>
                :
                <AiOutlineMenu onClick={()=> setToogle(!toggle)} className='text-white text-2xl md:hidden block'/>
 
            }
             <ul className='hidden md:flex text-white gap-5'>
                <li>Home</li>
                <li>About</li>
                <li>Resources</li>
                <li>Contact</li>
            </ul>

            {/* responsive menu*/}
            <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black  top-[90px] 
            ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                <li className='p-3'>Home</li>
                <li className='p-3'>About</li>
                <li className='p-3'>Resources</li>
                <li className='p-3'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Header;