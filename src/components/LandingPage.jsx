import { motion } from "framer-motion";
import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";
import { Link } from 'react-router-dom'; // Added Link import


  function LandingPage() {
    return (
        <section id="home" className='LandingPage relative  h-screen bg-zinc-900'>
            <div className='px-6 md:px-12 lg:px-14 pt-40'>
                {["Your startup", "Powered-by", "Strategy and AI."].map((item, index) => (

                    <div className='heading flex items-center' key={index}>

                        {index === 1 && (
                            <motion.div   
                            initial={{width:0}}
                            animate={{width:"8.5vw"}}
                            transition={{ease:[0.76, 0, 0.24, 1], duration:2}}                            
                            className="w-[8.5vw]  bg-[#004d43] h-[5.4vw] mr-[0.5vw] object-cover overflow-hidden relative top-[0.4vw] rounded-md">                                
                             <h1 className="text-[120px] rotate-45 font-[r-neue] flex items-center justify-center">You</h1>
                             </motion.div>
                        )}

                        <h1 className="font-[founders] text-[8.5vw] leading-[6vw] uppercase">
                            {item}
                        </h1>

                        {/* Agar second item hai to green box render karo */}
                    </div>
                ))}
            </div>






            {/* heading */}
            <div className='px-6 md:px-12 lg:px-14 border-t-2 border-zinc-700 lg:flex md:flex-none md:items-center justify-between  items-center mt-[7vw]'>
                {["Presentation and storytelling agency", "For innovation teams and global brands"].map((item, index) => (
                    <div className='heading-items' key={index}>
                        <p className="mt-3 font-thin text-md">{item}</p>
                    </div>
                ))}

                 <div className='flex btn-hover items-center mt-4'>
                    <Link
                        to="/signup" 
                        className=' flex items-center gap-4 px-4 py-2 border-2 font-[neue] rounded-4xl border-zinc-400 hover:bg-zinc-800 transition-colors duration-200'
                    >
                       Create a Account
                        <div className=' circle w-2 h-2 flex items-center rounded-full bg-white rotate-45 ml-[2vw]'>
                            <IoIosArrowRoundUp className='erow text-lg rounded-full text-white' />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default LandingPage