import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';


const navLinks = [
    {
        name : "Home",
        link: "/",
    },
    {
        name: "About",
        link: "/journey",
    },
    {
        name: "Projects",
        link: "/myexpertise",
    },
    {
        name: "Contact",
        link: "/contact",
    },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Handle Theme Switch
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };


  return (
     <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-500 cursor-pointer">
          Portfolio
        </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center font-medium text-gray-700 dark:text-gray-200">
          {navLinks.map((item) => {

            // Highlight 'Home' button style logic (Optional, kept from previous step)
            const isButton = item.name === 'Home';
            const buttonClasses = isButton
              ? 'bg-orange-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-orange-600'
              : 'hover:text-orange-500';

              // Logic: Use <a> for Hash links (#) and <Link> for Pages (/)
            const LinkComponent = item.link.startsWith('/#') ? 'a' : Link;

            return (
               <LinkComponent
                key={item.name} 
                to={item.link} 
                href={item.link} 
                className={`transition-colors ${buttonClasses}`}
              >
                {item.name}
              </LinkComponent>
            );
          })}
          
           

          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="dark:text-white">
             {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
       
       {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 py-4 px-6 flex flex-col gap-4 text-gray-700 dark:text-gray-200 shadow-lg">
          {navLinks.map((item) => {
            const isButton = item.name === 'Home';
             const buttonClasses = isButton
               ? 'bg-orange-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-orange-600'
               : 'hover:text-orange-500';

                const LinkComponent = item.link.startsWith('/#') ? 'a' : Link;
             
             return (
              <LinkComponent
                key={item.name} 
                to={item.link} 
                href={item.link}
                onClick={() => setIsOpen(false)}
                className={`transition-colors ${buttonClasses}`}
              >
                {item.name}
                </LinkComponent>
             );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar