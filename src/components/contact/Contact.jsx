import React from 'react';
/* NOTE: These imports work locally on your laptop because you have 
  the Navbar and Footer files. The preview here might show an error 
  because it can't access your file system. 
*/
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex-grow flex items-center justify-center py-20 px-6 relative overflow-hidden">
      
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2 animate-blob animation-delay-2000"></div>

      {/* Main Card Container */}
      <div className="max-w-4xl w-full bg-white/80 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20">
        <div className="grid md:grid-cols-2">
          
          {/* Left Side: Creative Header */}
          <div className="p-10 bg-gradient-to-br from-orange-500 to-pink-600 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] bg-[length:20px_20px]"></div>
            <div className="relative z-10">
              <h1 className="text-5xl font-extrabold mb-4 leading-tight">
                Let's <br/> Connect!
              </h1>
              <p className="text-orange-100 text-lg mb-8">
                I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            {/* Social Links with creative hover */}
            <div className="relative z-10 flex gap-4">
              <a 
                href="https://www.linkedin.com/in/syamsai-prathi-b724861b8/" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 bg-white/20 rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/Syamsaiprathi" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 bg-white/20 rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Github className="w-6 h-6" />
              </a>
              </div>
            
            {/* Decorative Circle */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
          </div>

          {/* Right Side: Contact Options */}
          <div className="p-10 flex flex-col justify-center gap-8">
            <div className="space-y-6">
              {/* Email Option */}
              <a 
                href="mailto:syamsaiprathi0105@gamil.com" 
                className="group flex items-center gap-5 p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/50 hover:bg-orange-50 dark:hover:bg-gray-700 transition-all duration-300 border border-transparent hover:border-orange-200 shadow-sm hover:shadow-md"
              >
                <div className="p-4 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-gray-800 dark:text-gray-200 font-semibold break-all">syamsaiprathi0105@gmail.com</p>
                </div>
              </a>

              {/* Phone Option */}
              <a 
                href="tel:+919876543210" 
                className="group flex items-center gap-5 p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/50 hover:bg-green-50 dark:hover:bg-gray-700 transition-all duration-300 border border-transparent hover:border-green-200 shadow-sm hover:shadow-md"
              >
                <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-green-500 uppercase tracking-wider mb-1">Contact Number</p>
                  <p className="text-gray-800 dark:text-gray-200 font-semibold">+91 9392809915</p>
                </div>
              </a>
              {/* Location Option */}
              <div className="group flex items-center gap-5 p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 border border-transparent hover:border-blue-200 shadow-sm hover:shadow-md">
                <div className="p-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-gray-800 dark:text-gray-200 font-semibold">Hyderabad, India</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-400 italic">
                "Looking forward to creating something amazing together!"
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>


  );
};

export default Contact;
