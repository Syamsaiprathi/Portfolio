import React from 'react';
import { Routes, Route } from 'react-router-dom'; // 1. Import Routing tools

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Journey from "./components/journey/Journey"; 
import MyExpertise from "./components/myexpertise/MyExpertise";

// 2. We group the main sections into a "Home" component
//    so they all show up together on the main page.
const Home = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Services />
  </>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white font-sans text-gray-900 flex flex-col transition-colors duration-300">
      
      <Navbar />
      
      <main className="flex-grow flex flex-col w-full">

        {/* 3. THIS IS THE CHANGE:
            Instead of listing <Hero/>, <About/>, etc. directly here,
            we use <Routes> to tell the app which page to show. 
        */}
        <Routes>
          {/* If the path is "/", show the Home component (Hero + About + Skills + Services) */}
          <Route path="/" element={<Home />} />

          {/* If the path is "/contact", show ONLY the Contact component */}
          <Route path="/contact" element={<Contact />} />

          <Route path="/journey" element={<Journey />} />
          <Route path="/myexpertise" element={<MyExpertise />} />
        </Routes>

      </main>

      <Footer />
      
    </div>
  );
}

export default App