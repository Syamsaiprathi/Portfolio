import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <section id="contact" className="bg-gray-800 text-white py-16 px-6 w-full mt-auto">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-gray-400 mb-8">Feel free to reach out for collaborations or just a friendly hello!</p>
        
        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          
          {/* GitHub Link */}
          <a 
            href="https://github.com/Syamsaiprathi" /* <-- REPLACE WITH YOUR GITHUB URL */
            target="_blank" 
            rel="noreferrer"
            className="p-3 bg-gray-700 rounded-full hover:bg-orange-500 transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>

          {/* LinkedIn Link */}
          <a 
            href="https://www.linkedin.com/in/syamsai-prathi-b724861b8/" /* <-- REPLACE WITH YOUR LINKEDIN URL */
            target="_blank" 
            rel="noreferrer"
            className="p-3 bg-gray-700 rounded-full hover:bg-orange-500 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>

          {/* Mail Link */}
          <a 
            href="mailto:syamsaiprathi0105@gmail.com" /* <-- Check if this email is correct */
            className="p-3 bg-gray-700 rounded-full hover:bg-orange-500 transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>

        </div>

        {/* Copyright */}
        <p className="mt-8 text-gray-500 text-sm">
          &copy; 2025 Syamsai Prathi. All rights reserved.
        </p>
      </div>
    </section>
  )
}

export default Footer