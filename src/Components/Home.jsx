import React from 'react'
import aiinedu from '../assets/ai-in-education-2-1-removebg-preview.png'
import explore from '../assets/Exploring-the-Future-of-Artificial-Intelligence-in-Education-removebg-preview.png'
 import call from '../assets/call-center-isometric-concept.png'
import Header from './Header'
import About from './About'
function Home() {
  return (
    <div className='bg-blue-300 pt-5 w-full overflow-x-hidden'>
      <div className='flex flex-wrap items-center justify-center gap-4 mt-6    px-4 pt-14 '>
         <h1 className='text-4xl font-bold text-white'>NxtRole.AI : Career Guidance & Roadmap Generator</h1> 
      </div>  
     <p className='flex items-center justify-center px-4 pt-3 text-black text-center'>AI-powered platform that helps students and professionals find the right career path,discover job roles, and learn skills to grow.
    </p>
 
 <div className='flex flex-wrap items-center justify-between overflow-hidden px-4 '>
  <img src={aiinedu} alt=" img"  className='m-1 w-[33%] cursor-pointer'/>
  <img src={explore} alt=" img" className='w-[33%]'  />
  <img src={call} alt="img" className='w-[33%]' />

 </div>
 <div className='flex items-center justify-center   px-4 pb-5'>
 <button className=' flex items-center justify-center px-5 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-900 focus:outline-none focus:ring-offset-2 transition-all"'>Explore Now</button>
 </div>


    </div>
  
  )
 
}

export default Home;

