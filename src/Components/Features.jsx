import React from 'react'
import { motion } from 'framer-motion';
import carrer from '../assets/8502305.jpg'
import course from '../assets/8576577.jpg'
import { useRef } from 'react';
const recommendations = [
  {
    title: "Full Stack Developer",
    description:
      "Combine your creativity and logic by building end-to-end web applications using the latest frameworks and technologies.",
  },
  {
    title: "AI Engineer",
    description:
      "Dive into machine learning and artificial intelligence to build intelligent solutions that shape the future.",
  },
  {
    title: "UI/UX Designer",
    description:
      "Design intuitive and engaging interfaces that bring exceptional digital experiences to life.",
  },
];

const courses=[
  {
    title: "Engineering",
    description:
      "Combine your creativity and logic by enabling your inner creativity into creating new things.",
  },
  {
    title: "Medical",
    description:
      "Dive into the world of medicos where you deals with curing the real people.",
  },
  {
    title: "Commerce",
    description:
      "Make the finance specialist and dive into the world of taxes and accountancy.",
  },
];
const steps = [
  {
  id: 1,
  title: 'Goal & Focus',
  desc: 'Decide one clear goal (job, project, product). Break it into monthly milestones.'
  },
  {
  id: 2,
  title: 'Core Skills',
  desc: 'Master fundamentals: HTML, CSS, JS, React. Build 3 small projects.'
  },
  {
  id: 3,
  title: 'Build & Ship',
  desc: 'Create a polished project, add tests, CI, and deploy (Vercel/Netlify).'
  },
  {
  id: 4,
  title: 'Learn AI & Backend',
  desc: 'Add backend/API knowledge and basic AI/ML integration (optional).'
  },
  {
  id: 5,
  title: 'Portfolio & Networking',
  desc: 'Polish your portfolio, write case studies, connect with peers and mentors.'
  }
  ]

  const containerVariants = {
    hidden: {},
    show: {
    transition: {
    staggerChildren: 0.12
    }
    }
    }
    
    
    const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } }
    }

function Features() {
  const slider=useRef();
let tx=0;
const SlideForward=()=>{
if(tx>-50){
tx-=25;
}
slider.current.style.transform=`translate(${tx}%)`;
}
const SlideBackward=()=>{
if(tx<0){
tx+=25;
}
slider.current.style.transform=`translate(${tx}%)`;
}
   
  
    return (
      <div>
<section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 bg-linear-to-br from-gray-50 to-blue-100">
       
       <motion.div
         initial={{ opacity: 0, x: -100 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 1 }}
         viewport={{ once: false, amount: 0.3}}
         className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
       >
         <div className="relative w-full max-w-md">
           <img
             src={carrer}
             alt="Career Path Illustration"
             className="rounded-2xl shadow-xl w-full object-cover"
           />
           
           <motion.div
             className="absolute -top-6 -left-6 w-20 h-20 blur-xl opacity-70"
             animate={{
               scale: [1, 1.2, 1],
               opacity: [0.7, 1, 0.7],
             }}
             transition={{ duration: 3, repeat: Infinity }}
           />
         </div>
       </motion.div>
 
       
       <motion.div
         initial={{ opacity: 0, x: 100 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.8 }}
         viewport={{ once: false, amount: 0.3 }}
         className="w-full md:w-1/2 text-center md:text-left"
       >
         <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
           Discover Your Career Recomendation 
         </h1>
         <p className="text-gray-600 text-base md:text-lg mb-8">
           Based on your skills, goals, and interests, here are a few AI-powered recommendations
           to help you build a thriving career in the digital era.
         </p>
 
         <div className="grid gap-6">
           {recommendations.map((item, index) => (
             <motion.div
               key={index}
               className="p-5 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
               whileHover={{ scale: 1.03 }}
             >
               <h3 className="text-xl font-semibold text-blue-600 mb-2">
                 {item.title}
               </h3>
               <p className="text-gray-600">{item.description}</p>
             </motion.div>
           ))}
         </div>
       </motion.div> 
     </section>

                                       {/* Course recomendation */}
     <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 bg-linear-to-br from-gray-50 to-blue-100">
       
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3}}
          className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
        >
          <div className="relative w-full max-w-md">
            <img
              src={course }
              alt="Career Path Illustration"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
            
            <motion.div
              className="absolute -top-6 -left-6 w-20 h-20 blur-xl opacity-70"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </motion.div>
  
        
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
           Course Recomendations 
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            Based on your skills, goals, and interests, here are a few AI-powered recommendations
            to help you build a thriving career in the digital era.
          </p>
  
          <div className="grid gap-6">
            {courses.map((item, index) => (
              <motion.div
                key={index}
                className="p-5 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>    
     </section>

 {/* Personalised Roadmap */}
 
 <div className="min-h-screen bg-linear-to-b from-white to-gray-50 p-6 lg:p-12">
<div className='flex items-center justify-center'>
<h1 className='text-black text-3xl font-bold '>Personalised <span className='text-blue-600'> Roadmap</span> </h1>
</div>

<div className="space-y-6 pt-1">
{steps.map((s, i) => (
<motion.article key={s.id} variants={cardVariants} className="relative lg:pl-16 pl-4">



<div className="absolute lg:left-4 left-0 top-2 lg:top-4">
<motion.span
initial={{ scale: 0.9, opacity: 0.7 }}
animate={{ scale: [1, 1.15, 1], rotate: [0, 6, -6, 0] }}
transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.15 }}
className={`inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border shadow-sm`}
>
<span className="text-sm font-semibold text-indigo-600">{s.id}</span>
</motion.span>
</div>


<div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-200">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold text-gray-800">{s.title}</h3>
<p className="text-sm text-gray-500 mt-1">{s.desc}</p>
</div>


<div className="text-right">
<div className="text-xs text-gray-400">Est. time</div>
<div className="text-sm font-medium text-gray-700">{i === 0 ? '1 week' : i <= 2 ? '2-4 weeks' : '1+ month'}</div>
</div>
</div>


<div className="mt-4 flex items-center gap-3">
<button className="text-xs px-3 py-1 rounded-full border border-indigo-100 text-indigo-600">Mark done</button>
<button className="text-xs px-3 py-1 rounded-full border border-gray-100 text-gray-600">Notes</button>
<div className="ml-auto text-xs text-gray-400">Priority: <span className="font-medium text-gray-700">{5 - i}</span></div>
</div>
</div>
</motion.article>
))}
</div>



<motion.div
initial={{ opacity: 0, y: 12 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="mt-8 p-4 rounded-xl bg-linear-to-r from-indigo-50 to-pink-50 border border-indigo-100"
>
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-sm text-gray-600">Next suggested action</div>
<div className="text-sm font-semibold text-gray-800">Start the first mini-project and write a short plan (3-5 tasks)</div>
</div>
<div>
<button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow">Start now</button>
</div>
</div>
</motion.div>

</div>
<motion.button
whileHover={{ scale: 1.03 }}
className="fixed right-4 bottom-6 lg:hidden bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg"
>
Quick add
</motion.button>


</div>
    
      

      
  )
}

export default Features
