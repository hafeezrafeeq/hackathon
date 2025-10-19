import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundUp } from "react-icons/io";


const Gemini = () => {
    return (
        <div className="py-20  bg-zinc-900 text-white">
            <div className="container px-20 ">
                <h2 className="text-8xl font-bold mb-6 font-[founders]"> PitchCraft AI</h2>
                <p className="text-xl font-[r-neue] text-zinc-300 mb-8 max-w-2xl ">
                    Turn your startup ideas into professional pitches with AI power.
                </p>

                <div className='flex btn-hover items-center mt-4'>
                    <Link
                        to="/create-pitch"
                        className=' flex items-center gap-4 px-4 py-2 border-2 font-[neue] rounded-4xl border-zinc-400 hover:bg-zinc-800 transition-colors duration-200'
                    >
                        Generate Your Pitch
                        <div className=' circle w-2 h-2 flex items-center rounded-full bg-white rotate-45 ml-[2vw]'>
                            <IoIosArrowRoundUp className='erow text-lg rounded-full text-white' />
                        </div>
                    </Link>
                </div>
            </div>

            <div className='border-t-1 mt-16 border-zinc-600'>

                {/* Instructions */}
                <div className="mt-8 bg-[#cdea68] border mx-20 text-black rounded-2xl p-6">
                    <h3 className="text-2xl font-[r-neue] mb-4">How it works:</h3>
                    <div className="space-y-3 font-[r-neue]">
                        <div className="flex items-center gap-3">
                            <span className="bg-[#004d43]  rounded-full w-6 h-6 flex items-center justify-center text-sm  text-white">1</span>
                            <span>Describe your startup idea</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="bg-[#004d43] rounded-full w-6 h-6 flex items-center justify-center text-sm text-white">2</span>
                            <span>Select your industry</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="bg-[#004d43] rounded-full w-6 h-6 flex items-center justify-center text-sm text-white">3</span>
                            <span>Choose the tone</span>
                        </div>
                        <div className="flex item[#004d43] gap-3">
                            <span className="bg-[#004d43]  rounded-full w-6 h-6 flex items-center justify-center text-sm text-white">4</span>
                            <span>AI generates professional pitch</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Gemini;