import React from 'react'

 const News = () => {
  return (
    <div className="bg-[#2699fb] p-4 ">
        <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
            <div className='m-2'>
                <h1 className='text-[30px] md:text-[40px] font-bold text-white'>Learn Lattest I.T Skills</h1>
                <p className='text-white'>Sign Up to Our News and Stay up to date</p>
            </div>
            <div className='m-2'>
                <input type='text' className='sm:w-full rounded mb-2 p-2 mr-2 text-slate-6000' placeholder='Email'/>
                <button className='bg-black text-white p-2 rounded'>Get Start</button>
                <br/>
                <p className='text-white'>
                    We care bout the protection of your data. Read our <br/><a className='text-black font-bold' href=''>Privacy Policy.</a></p>
            </div>
         </div>
    </div>
  )
}
export default News
