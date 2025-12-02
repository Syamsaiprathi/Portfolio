import React from 'react';
/* I have switched to 'lucide-react' for the preview to work. 
   If you prefer 'react-icons', you can switch these imports back to:
   import { AiFillLayout } from 'react-icons/ai'; 
   etc.
*/
import { Radio, Bot, Music, Wallet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const servicesList = [
  {
    id: 1, 
    name: "Expense Tracker App",
    description: "A smart and intuitive full-stack solution designed to help users effortlessly manage their daily spending, categorize expenses, and gain real-time insights into their financial habits.",
    // Image related to finance/money/charts
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    // Icon representing wallet/finance
    icon: <Wallet className='text-4xl' />,
    bgColor: "bg-teal-500/70",
  },
  {
    id: 2,
    name: "ML Model Training Pipeline",
    description: "Automated pipeline that schedules, trains, and updates a machine learning model using Apache Airflow.",
    // Image related to AI/Data/Pipeline
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    // Icon representing automation/AI
    icon: <Bot className='text-4xl' />,
    bgColor: "bg-purple-500/70",
  },
  {
    id: 3,
    name: "AeroLink Simulator",
    description: "Simulating Communication between Launch Computer and OBC in Airborne vehicles using QT Software.",
    // Changed image to something tech/aerospace related
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800", 
    icon: <Radio className='text-4xl' />,
    bgColor: "bg-blue-500/70",
  },
  {
    id: 4,
    name: "Audio Glide",
    description: "Developed a versatile music player application capable of seamlessly playing songs in various extensions directly from the device's internal storage.",
    // Changed image to represent music/coding
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
    icon: <Music className='text-4xl' />,
    bgColor: "bg-lime-500/70",
  },
];

const Services = () => {
  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate('/myexpertise', { state: { targetId: id } });
  };


  return (
     // Added a wrapper section to hold both the Title and the Grid vertically
    <section className="w-full py-12 transition-colors duration-300">
              {/* 1. Header / Title Section */}
        <div className='mb-12 relative flex flex-col items-center justify-center'>
          {/* Background Text Effect */}
          <div className='absolute text-6xl md:text-8xl font-bold text-black/5 dark:text-white/5 uppercase select-none pointer-events-none'>
            PROJECTS
          </div>
          {/* Foreground Title */}
          <h1 className='text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white relative z-10'>
            My Projects
          </h1>
        </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
      {servicesList.map(({ id, name, description, image, icon, bgColor }) => (
        <div 
          key={name} 
          onClick={() => handleCardClick(id)} // 4. Attach click handler
          style={{ backgroundImage: `url(${image})` }}
          className={`
            ${bgColor} 
             rounded-xl text-white bg-cover bg-no-repeat bg-center bg-blend-overlay 
            shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer
          `}
        >
          <div className='p-6 md:p-8 backdrop-blur-sm space-y-4 rounded-xl h-full flex flex-col justify-center'>
            <div className="bg-white/20 w-fit p-3 rounded-full backdrop-blur-md">
              {icon}
            </div>
            <h1 className='text-2xl font-bold'>{name}</h1>
            <p className='text-sm md:text-base leading-relaxed opacity-90'>{description}</p>
          </div>
        </div>
      ))}
    </div>
    
    </section>
  );
};
  

export default Services;