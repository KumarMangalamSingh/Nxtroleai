import React from 'react';
import person from '../assets/person-working-html-computer.jpg';

function About() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 py-10 bg-white ">
      
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src={person}
          alt="Person"
          className="w-full max-w-sm md:max-w-md rounded-xl shadow-md object-cover"
        />
      </div>

     
      <div className="w-full md:w-1/2 text-center md:text-left px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          About  <span className='text-blue-600'> NxtRoleAI</span> 
        </h2>
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          AI-powered website that enables users to find jobs and upskill themselves.
          NxtRoleAI empowers individuals to stand out in a competitive world by providing
          tailored learning opportunities and intelligent career insights — helping them rise above the crowd.
          One of the best upskill website for the learners who truely want to stand out from the crowd and gain real world experiece and guidance.
        </p>
       <a href="https://nxtrole.in/"> <button className=' flex items-center justify-center px-5 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-900 focus:outline-none focus:ring-offset-2 transition-all pt-2'>Learn More</button></a> 
      </div>

    </section>
  );
}

export default About;
