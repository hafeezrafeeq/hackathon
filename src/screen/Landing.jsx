import React from 'react';
import { Link } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import Navbar from '../components/Navbar';
import GreenArea from '../components/GreenArea';
import About from '../components/About';
import Eyes from '../components/Eyes';
import Featured from '../components/Featured';
import Gemini from "../components/Gemini"

function Landing() {
  return (
    <div className='w-full bg-zinc-900 text-white'>
      <Navbar />
      <LandingPage />
      <GreenArea />
      <About />
      <Eyes />

      <Featured
        image1={"https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"}
        image2={"https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png"}
        whiteDoth1="AI-Powered Pitch Generation"
        whiteDoth2="Business Strategy Support"
      />

      <Featured
        image1={"https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"}
        image2={"https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-663x551.png"}
        whiteDoth1="Cloud & Data Integration"
        whiteDoth2="Branding & Content Design"
        className='hidden mt-[20]'
      />

      <Gemini/>

     
    </div>
  );
}

export default Landing;