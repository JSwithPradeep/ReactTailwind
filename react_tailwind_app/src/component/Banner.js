import React from 'react'
import Typed from 'react-typed';

const Banner = () => {
  return (
    <div className='bg-[#2699fb] w-full py-[50px]'>
        <div className='max-w-[1240px] py-[100px] mx-auto text-center font-bold'>
            <div className=' text-xl md:text-3xl md:p[24px] '>
                Learn With Us
            </div>
            <h3 className='text-white text-5xl md:text-[50px] p-[24px]'>Grow with Us</h3>
            <div className='text-[20px] md:text[50px] md:p[24px] text-white'>
              Learn                
               <Typed className='pl-3'
                    strings={['JavaScript Basic To Advance','React Js with Project']}
                    typeSpeed={40}
                    loop={true}
                />
 
            </div>
            <button className='bg-black text-white  p-3 rounded'>Get Start</button>
        </div>
    </div>
  )
}

export default Banner;