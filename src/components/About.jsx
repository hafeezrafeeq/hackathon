import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";

function About() {
    return (
        <div data-scroll data-scroll-speed="-.05"
            className='bg-[#cdea68] text-zinc-900 font-[r-neue]'>
            <h1 className='p-[4vw] pt-[6vw] text-[2.5vw] border-b-1 leading-12'>
                Our mission is simple — make startup building easy,<br />
                accessible, and creative for everyone. <br />
                Whether you’re a <span className='underline decoration-2 underline-offset-8  pr-2'>student, </span>
                <span className='underline decoration-2 underline-offset-8 pr-2'>founder, </span>
                <span className='underline decoration-2 underline-offset-8 pr-2'>or dreamer, </span> <br />
                PitchCraft gives you the AI tools to build <br /> your next big idea confidently.
            </h1>

            <div className='flex justify-center pt-[2vw] px-6 md:px-12 lg:px-14'>
                <h1 className=' text-lg w-[50%]'>What you can expect:</h1>

                <div className='w-[25%]'>
                    <p className='w-[70%]'>
                        PitchCraft is your personal AI startup partner — helping you turn raw ideas into
                        investor-ready pitches. Whether you need a name, tagline, or full pitch deck,
                        we make your startup story shine.
                    </p>

                    <p className='pt-[2vw] w-[70%]'>
                        Using Gemini AI and modern design tools, PitchCraft creates startup names,
                        taglines, value propositions, and landing page content — all in minutes,
                        tailored to your unique idea.
                    </p>

                    <p className='pt-[2vw] w-[70%]'>
                        Our mission is simple: empower students and founders to express their ideas
                        confidently and creatively. With PitchCraft, every idea gets the voice it deserves.
                    </p>
                </div>

                <div className={`w-[25%] flex flex-col`}>
                    {["Social Link", "Linkedin", "Facebook", "Behance", "Linkedin"].map(
                        (item, index) => (
                            <a
                                key={index}
                                href="#"
                                className={`hover:text-gray-300 transition  underline ${index == 0 && "mb-[2vw] none-underline"}`}
                            >
                                {item}
                            </a>
                        )
                    )}
                </div>
            </div>

            <div className='flex justify-between px-6 md:px-12 lg:px-14 mt-10 p-10 border-t-1 border-black'>

                <div>
                    <h1 className='text-[3vw] '>How we can help:</h1>
                    <button className='btn-hover bg-zinc-900 text-white flex items-center rounded-4xl py-4 px-6 '>
                        <h1>READ MORE </h1>
                        <spen className=' circle w-2 h-2 flex items-center rounded-full bg-white rotate-45 ml-[2vw]'>
                            <IoIosArrowRoundUp className='erow text-lg rounded-full text-white' />
                        </spen>
                    </button>
                </div>

                <img className='w-[50%]' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="image" />

            </div>



        </div>
    )
}

export default About
