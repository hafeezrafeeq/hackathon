
import React from 'react'

function Featured({ image1, image2, whiteDoth1, whiteDoth2, className = "" }) {

    return (
        <section id='services' className='w-full px-6 md:px-12 lg:px-14 font-[r-neue] pt-10 pb-30 text-black bg-[#f1f1f1] ${className}'>
            <h1 className={`text-[4vw] mb-6   py-4 border-b-2  border-[#b2b2b2] ${className}`}>Services</h1>
            <div className='w-full  flex gap-2'>
                <div className='w-[50%] h-[40vw] rounded-2xl'>
                    <div className='flex items-center py-4'>
                        <div className='w-3 h-3 mr-[0.5vw] rounded-full bg-[#212121]'></div>
                        <h1>{whiteDoth1}</h1>
                    </div>
                    <img className={`rounded-2xl transform w-[45vw] h-[38vw]  transition-transform duration-800 ease-in-out hover:scale-95`}
                        src={image1} alt="image" />

                    <div className='flex items-center gap-2'>
                        <button className="relative px-12 py-1 mt-6 border border-zinc-600 text-black rounded-4xl overflow-hidden group">
                            <span className="absolute left-0 bottom-0 w-full h-0 rounded-t-4xl bg-black 
                              transition-all duration-500 ease-in-out group-hover:h-19"></span>
                            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                                MORE DETAILS
                            </span>
                        </button>

                    </div>
                </div>

                <div className='w-[50%] h-[40vw] rounded-2xl'>
                    <div className='flex items-center py-4'>
                        <div className='w-3 h-3 mr-[0.5vw] rounded-full bg-[#212121]'></div>
                        <h1>{whiteDoth2}</h1>
                    </div>
                    <img className={`rounded-2xl w-[45vw] h-[38vw] transform transition-transform duration-800 ease-in-out hover:scale-95`}
                        src={image2} alt="image" />
                    <div className='flex items-center gap-2'>
                        <button className="relative px-12 py-1 mt-6 border border-zinc-600 text-black rounded-4xl overflow-hidden group">
                            <span className="absolute left-0 bottom-0 w-full h-0 rounded-t-4xl bg-black 
                              transition-all duration-500 ease-in-out group-hover:h-19"></span>
                            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                                MORE DETAILS
                            </span>
                        </button>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Featured
