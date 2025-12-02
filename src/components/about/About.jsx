import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id='about' className='w-full bg-white dark:bg-slate-800 dark:text-white flex justify-center'>
      {/* Container with consistent width/padding to match Skills section */}
      <div className='container md:w-[70%] px-6 py-10 sm:py-16'>
        <div className='grid items-center gap-8 grid-cols-1 sm:grid-cols-2'>
          
          {/* Column 1: Title (Background Text Effect) */}
          <div className='relative font-bold mb-6 sm:mb-0'>
            {/* Background "ABOUT" text */}
            <div className='text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700/10 uppercase select-none'>
              ABOUT
            </div>
            {/* Foreground "About Me" heading */}
            <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl text-gray-800 dark:text-white whitespace-nowrap'>
              About Me
            </h1>
          </div>

          {/* Column 2: Text Content & Buttons */}
          <div className='text-slate-500 dark:text-slate-300 flex flex-col gap-4 text-center sm:text-left'>
            <p className='leading-relaxed'>
              I’ve always been fascinated by how things work under the hood. While the frontend captures the attention, 
              I fell in love with the logic and structure of the backend—the invisible engine that keeps the digital world running. 
              My journey into software engineering wasn't just about learning syntax; it was about learning to solve problems efficiently and permanently.
            </p>
            <p className='leading-relaxed'>
              My development philosophy is simple: complex problems require clear solutions.
               When I build with Java and Spring Boot, I prioritize readability and scalability. 
               I believe that a well-architected API isn't just about data transfer;
               it's about creating a reliable foundation that allows the rest of the application to thrive.
            </p>
            
            {/* Buttons Area */}
            <div className='flex gap-4 justify-center sm:justify-start mt-4'>
            {/* UPDATED: Changed to link to the new /journey page */}              
            <Link 
                to="/journey" 
                className='px-6 py-2 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-colors shadow-lg'
              >
                Explore My Journey
              </Link>
              
              {/* Contact Button */}
              {/* CORRECT LINK: Use the URL path "/contact", NOT the file path */}
              <Link 
                to="/contact" 
                className='px-6 py-2 border-2 border-orange-500 text-orange-500 font-bold rounded-full hover:bg-orange-500/10 transition-colors'
              >
                Say Hello
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;