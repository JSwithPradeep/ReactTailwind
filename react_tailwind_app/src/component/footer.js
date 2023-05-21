import React from 'react'
import {AiFillFacebook,AiOutlineTwitter,AiFillInstagram, AiFillYoutube, AiOutlineWhatsApp} from 'react-icons/ai';

const Footer = () => {
  
    return (
    <footer>
        <div className='bg-gray-200'>
            <div className='max-w-7xl mx auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                    <div className='mb-5'>
                        <h4 className='text-2xl pb-4'>Company</h4>
                        <p className='text-gray-500'>
                        A123 Lost street<br/>
                        New Delhi 110065<br/>
                        India<br/><br/>
                        <strong>Mobile:</strong> +91 8700250093 <br/>  
                        <strong>Email:</strong> pr464643@gmail.com <br/>                   
                        </p>
                         </div>
                         <div className='mb-5'>
                            <h4 className=''>Usefull Links</h4>
                            <ul className='text-gray-500'>
                                <li className='pb-4'><i className='f fa-chevron-right'></i><a href="#" className='hover:text-yellow-500'></a>Home</li>
                                <li className='pb-4'><i className='f fa-chevron-right'></i><a href="#" className='hover:text-yellow-500'></a>About</li>
                                <li className='pb-4'><i className='f fa-chevron-right'></i><a href="#" className='hover:text-yellow-500'></a>Resource</li>
                                <li className='pb-4'><i className='f fa-chevron-right'></i><a href="#" className='hover:text-yellow-500'></a>Contact</li>
                                
                            </ul>
                        </div>
                        <div className='mb-5'>
                            <h4 className='pb-4'>Our Service</h4>
                        <ul className='text-gray-500'>
                                <li className='pb-4'><i className='f fa-chevron-right'></i><a href="#" className='hover:text-yellow-500'></a>WebSite Devlopment</li>
                                <li className='pb-4'><i className='f fa-chevron-right'></i><a href="#" className='hover:text-yellow-500'></a>App Devlopment</li>
                                <li className='pb-4'><i className='f fa-chevron-right'></i><a href="#" className='hover:text-yellow-500'></a>Digital Marketing</li>
                                <li className='pb-4'><i className='f fa-chevron-right'></i><a href="#" className='hover:text-yellow-500'></a>Ai-Solution</li>
                            </ul>
  
                        </div>
                        <div className='mb-5'>
                            <h4 className='pb-4'>Join Our Newsletter</h4>
                            <p className='text-gray-500 pb-2'>Join 25,000+ other and never miss out on new tips, tutorial, and more</p>
                        </div>
                    </div>
               </div>
           </div>
           
           <div className='w-full  bg-gray-900 text-gray-500 px-10'>
            <div className='max-w-7xl flex flex-col sm:flex-row py-4 mx:auto justify-between items-center'>
                <div className='text-center '>
                    <div className=''>
                        Copyright <strong><span>Company</span></strong>. All Right Reserved
                    </div>
                   
                   <div className='bg-slate-300 justify-center flex flex-row items-center'>
                    <div className='flex flex-row space-x-16 text-4xl'>
                    <AiFillFacebook className='bg-slate-300 h-screenjustify-center flex flex -row items-center rounded-lg shadow-lg shadow black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue-600'/>
                    <AiFillInstagram className='bg-slate-300 h-screenjustify-center flex flex -row items-center rounded-lg shadow-lg shadow black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-red-600'/>
                    <AiOutlineWhatsApp className='bg-slate-300 h-screenjustify-center flex flex -row items-center rounded-lg shadow-lg shadow black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-green-600'/>
                    <AiOutlineTwitter className='bg-slate-300 h-screenjustify-center flex flex -row items-center rounded-lg shadow-lg shadow black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue-600'/>
                    </div>
                   </div>
                </div>
            </div>
           </div>
        
    </footer>
  )
}

export default Footer