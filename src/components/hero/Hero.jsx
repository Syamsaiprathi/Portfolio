import React from 'react'
import profilePic from '../../assets/child.jpg';

const Hero = () => {
  return (
<section className="w-full py-10 sm:py-16 dark:bg-gray-900 transition-colors duration-300">
  {/* INNER DIV: Handles the Content Layout (Centered & Limited Width) */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 max-w-6xl mx-auto gap-12">
              
      {/* LEFT SIDE: Text Content */}
      <div className="flex-1 text-center md:text-left">
        <span className="text-gray-500 dark:text-gray-400 uppercase tracking-widest text-sm mb-2 font-medium block">
          Hello
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-2">
          I'm Syamsai Prathi
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-4 font-semibold">
          Software Engineer
        </h2>
        
        <p className="text-gray-500 dark:text-gray-400 max-w-lg mb-8 leading-relaxed mx-auto md:mx-0">
          I operate at the core of web technology, using Java and Spring Boot to create high-performance backend ecosystems. 
          I focus on writing efficient, optimized code that maximizes server speed while minimizing resource consumption. 
          For me, software engineering is about finding the perfect balance between robust functionality and elegant simplicity.

        </p>

        <p className="text-gray-500 dark:text-gray-400 max-w-lg mb-8 leading-relaxed mx-auto md:mx-0">
          My expertise centers on designing intuitive REST APIs that serve as the heartbeat of dynamic applications, ensuring instant communication between systems. 
          I treat data flow as a critical art form, removing friction to guarantee fast and reliable delivery to the client. 
          I am committed to building software that not only functions perfectly but drives real business value.

        </p>

        {/* <div>
          <button className="bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 transition-colors font-bold shadow-lg">
            Hire me
          </button>
        </div> */}
      </div>

      {/* RIGHT SIDE: Profile Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <img 
            src={profilePic} 
            alt="Syamsai Prathi" 
            // ADDED: dark:border-gray-900 (so the white border doesn't look weird in dark mode)
            className="rounded-full object-cover shadow-2xl w-full h-full border-4 border-white dark:border-gray-900"
          />
          {/* ADDED: dark:bg-orange-900/20 (Darker decorative circle) */}
          <div className="absolute -z-10 top-4 -right-4 w-full h-full rounded-full bg-orange-100/50 dark:bg-orange-900/20"></div>
        </div>
      </div>
    </div>
      </section>
  );
};

export default Hero;