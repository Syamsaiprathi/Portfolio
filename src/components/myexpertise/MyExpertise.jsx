import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// 1. Expense Tracker Visual: Floating Wallet & Coins
const ExpenseIcon = () => (
  <motion.svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
    <motion.rect 
      x="5" y="15" width="40" height="30" rx="4" fill="#2DD4BF" 
      animate={{ scale: [1, 1.05, 1] }} 
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    <rect x="5" y="15" width="40" height="10" rx="4" fill="#14B8A6"/>
    <motion.circle 
      cx="25" cy="30" r="6" fill="white" opacity="0.5"
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    {/* Floating Coin */}
    <motion.circle 
      cx="38" cy="12" r="5" fill="#FCD34D" stroke="#F59E0B" strokeWidth="2"
      animate={{ y: [0, -5, 0], rotateY: [0, 180, 360] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    />
    <motion.text x="38" y="14" fontSize="6" textAnchor="middle" fill="#F59E0B" fontWeight="bold">$</motion.text>
  </motion.svg>
);


// 2. ML Pipeline Visual: Connected Nodes & Data Flow
const MLIcon = () => (
  <motion.svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
    {/* Connecting Lines */}
    <motion.path d="M10 40 L25 15 L40 40" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
    <motion.path d="M10 40 L40 40" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    
  {/* Nodes */}
    <motion.circle cx="10" cy="40" r="4" fill="#C084FC" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
    <motion.circle cx="40" cy="40" r="4" fill="#C084FC" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
    <motion.circle cx="25" cy="15" r="5" fill="#9333EA" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
    
    {/* Data Particle */}
    <motion.circle cx="10" cy="40" r="2" fill="white">
      <animateMotion dur="3s" repeatCount="indefinite" path="M0 0 L15 -25 L30 0 Z" />
    </motion.circle>
  </motion.svg>
);

// 3. AeroLink Visual: Radar/Signal Waves
const AeroIcon = () => (
  <motion.svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
    {/* Tower */}
    <path d="M25 45 L25 20" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="25" cy="20" r="4" fill="#2563EB"/>
    
  {/* Expanding Waves */}
    <motion.circle 
      cx="25" cy="20" r="8" stroke="#60A5FA" strokeWidth="2" fill="none"
      animate={{ scale: [1, 1.5], opacity: [1, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
    />

    <motion.circle 
      cx="25" cy="20" r="14" stroke="#93C5FD" strokeWidth="2" fill="none"
      animate={{ scale: [1, 1.5], opacity: [1, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
    />
    {/* Floating Satellite */}
    <motion.rect 
      x="35" y="5" width="8" height="8" rx="1" fill="#1D4ED8"
      animate={{ rotate: 360, x: [0, 2, 0], y: [0, -2, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    />
  </motion.svg>
);

// 4. Audio Glide Visual: Equalizer Bars
const AudioIcon = () => (
  <motion.svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
    <motion.rect 
      x="10" y="20" width="6" height="20" rx="3" fill="#84CC16"
      animate={{ height: [20, 35, 15, 30] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.rect 
      x="22" y="10" width="6" height="30" rx="3" fill="#65A30D"
      animate={{ height: [30, 15, 35, 20] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.rect 
      x="34" y="25" width="6" height="15" rx="3" fill="#4D7C0F"
      animate={{ height: [15, 30, 20, 35] }}
      transition={{ duration: 1.0, repeat: Infinity, ease: "easeInOut" }}
    />
    
    {/* Floating Note */}
    <motion.path 
      d="M35 5 L35 15 L45 15" stroke="#A3E635" strokeWidth="2" strokeLinecap="round"
      animate={{ y: [0, -5, 0], rotate: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  </motion.svg>
);

/* --- DATA: Service List --- */
const servicesList = [
  {
    id: 1,
    name: "Expense Tracker App",
    description: "A smart full-stack solution for managing daily spending and financial habits.",
    details: (
      <>
        <p className="mb-4">
          The <strong>Expense Tracker App</strong> is a full-stack 
          web application designed to help users record, manage, 
          and analyze their personal expenses in a smart and organized 
          way. Users can securely register and log in, add daily expenses with category-wise classification,
           view monthly and yearly spending summaries, and visualize financial patterns through interactive charts. 
           The system provides CRUD operations for expenses, category management, filtering, sorting, and downloads of expense
            reports, giving users full control over their financial journey.
        </p>
        <p>
          This project is built using <strong>Spring Boot</strong> 
          for the backend, exposing a set of RESTful APIs secured with 
          <strong>JWT-based authentication</strong>. <strong>Spring Data JPA</strong> and <strong>Hibernate</strong> 
          are used for interaction with the <strong>PostgreSQL</strong> (or MySQL) database. The frontend is developed using 
          <strong>React.js</strong> with <strong>Bootstrap/Tailwind CSS</strong> for a modern UI, and charts are implemented using
           <strong>Chart.js / Recharts</strong> for visual analytics. The application is fully documented with <strong>Swagger UI</strong>,
            tested with <strong>JUnit</strong>, and containerized using <strong>Docker</strong> for deployment readiness—making it a practical,
             real-world full-stack project. 🚀
        </p>
      </>
    ),
    icon: <ExpenseIcon />,
    color: "text-teal-500",
    bgColor: "bg-teal-50 dark:bg-teal-900/10",
    borderColor: "border-teal-100 dark:border-teal-800",
    hoverColor: "hover:border-teal-300 dark:hover:border-teal-500"
  },
  {
    id: 2,
    name: "ML Model Training Pipeline",
    description: "Automated pipeline for scheduling and training ML models using Apache Airflow.",
     details: (
      <>
        <p className="mb-4">
          The Machine Learning Model Training Pipeline is an automated data workflow designed to continuously 
          collect, process, and analyze real-world datasets to train and optimize a predictive machine learning model.
           In this project, we build a fully orchestrated end-to-end pipeline that begins with extracting raw data
            from API or database sources, performs data cleaning and feature engineering, and then trains and evaluates
             ML models to select the best-performing one based on accuracy metrics. The pipeline automatically retriggers 
             training at scheduled intervals or when new data arrives, ensuring that the model always remains up-to-date and production-ready.
        </p>
        <p>
          To achieve this, we use Apache Airflow to orchestrate and schedule all pipeline tasks and manage dependencies between 
          stages like data ingestion, preprocessing, model training, validation, and deployment. Python and Scikit-learn handle the machine
           learning component, while Pandas and NumPy manage data transformation. Data is stored in PostgreSQL / MySQL, and the trained model 
           artifacts are versioned and stored using MLflow / local storage / S3. We also integrate Docker for environment consistency,
            Git for version control, and Streamlit / Flask to build a simple UI to trigger runs or visualize results.
           Through this pipeline, we create a modern, automated ML lifecycle system demonstrating real-world MLOps practices and scalable production workflows.
        </p>
      </>
    ),
    icon: <MLIcon />,
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/10",
    borderColor: "border-purple-100 dark:border-purple-800",
    hoverColor: "hover:border-purple-300 dark:hover:border-purple-500"
  },
  {
    id: 3,
    name: "AeroLink Simulator",
    description: "SSimulating Communication between Launch Computer and OBC in Airborne vehicles using QT Software.",
    details: (
      <p>
        Developed a critical simulation tool during my internship at DRDO. The application mimics high-speed data transmission protocols between onboard computers (OBC) and launch control systems. Built with <strong>C++</strong> and the <strong>Qt framework</strong>, it ensures rigorous testing of communication integrity under simulated flight conditions.
      </p>
    ),
    // REPLACED: Static Icon -> Animated Component
    icon: <AeroIcon />,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/10",
    borderColor: "border-blue-100 dark:border-blue-800",
    hoverColor: "hover:border-blue-300 dark:hover:border-blue-500"
  },
  {
    id: 4,
    name: "Audio Glide",
    description: "Developed a versatile music player application capable of seamlessly playing songs in various extensions directly from the device's internal storage.",
    details: (
      <p>
        Created a lightweight, <strong>Python-based</strong> audio player capable of scanning internal storage for music files. The application supports multiple audio formats and features a clean, user-friendly interface for playlist management and playback controls, demonstrating efficiency in file handling and GUI development.
      </p>
    ),
    // REPLACED: Static Icon
    icon: <AudioIcon />,
    color: "text-lime-500",
    bgColor: "bg-lime-50 dark:bg-lime-900/10",
    borderColor: "border-lime-100 dark:border-lime-800",
    hoverColor: "hover:border-lime-300 dark:hover:border-lime-500"
  }
];


const MyExpertise = () => {
  const [expandedId, setExpandedId] = useState(null);
  const location = useLocation();
  // Using a Ref to ensure we don't scroll multiple times for the same navigation event
  // This persists across re-renders but resets on unmount or when needed.
  const hasScrolledRef = React.useRef(false); 

  // 3. EFFECT: Check if we arrived here with a targetId in state
  useEffect(() => {
    // Always scroll to top first when the component mounts to reset position
    if (!location.state?.targetId) {
        window.scrollTo(0, 0);
    }

    if (location.state?.targetId) {
      setExpandedId(location.state.targetId);

       // Optional: Scroll to the item smoothly after a short delay
      // Scroll logic with a small delay to ensure rendering is complete
      // Only scroll if we haven't already scrolled for this mount/update cycle
      if (!hasScrolledRef.current) {
        const timer = setTimeout(() => {
          const element = document.getElementById(`service-${location.state.targetId}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            hasScrolledRef.current = true;
          }
        }, 500); // 500ms delay to allow animation to start
        // Cleanup function to avoid memory leaks
        return () => clearTimeout(timer);
      }
    } else {
      // If NO target ID (e.g. clicked from Navbar), scroll to top
      window.scrollTo(0, 0);
    }

    // Reset scroll ref when location key changes (meaning new navigation)
    return () => {
        hasScrolledRef.current = false;
    }
  }, [location.key ,location.state]);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className='bg-gray-50 dark:bg-gray-900 dark:text-white py-20 transition-colors duration-300 min-h-screen'>
      <div className='container mx-auto px-6 max-w-6xl'>
        
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h1 className='inline-block text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-6 pb-2'>
            My Expertise
          </h1>
          <p className='text-slate-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg'>
            Click on a segment below to reveal detailed insights about my projects and technical skills.
          </p>
        </div>

        {/* List Container */}
        <motion.div 
          className='flex flex-col gap-4'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesList.map((service) => (
            <motion.div
              id={`service-${service.id}`} // Important for scrolling!
              key={service.id}
              variants={itemVariants}
              layout // Magic prop for smooth layout shifts
              className={`
                group rounded-2xl border overflow-hidden transition-colors duration-300
                ${service.bgColor} ${service.borderColor} ${service.hoverColor}
                ${expandedId === service.id ? 'shadow-lg border-opacity-100 ring-1 ring-offset-1 ring-offset-transparent ' + service.color.replace('text-', 'ring-') : 'hover:shadow-md'}
              `}
            >
              {/* Clickable Header Segment */}
              <div 
              onClick={() => toggleExpand(service.id)}
                className="p-5 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative"
              >
                {/* Left Side: Icon & Name */}
                <div className="flex items-center gap-4 sm:w-2/5">
                  <div className={`p-2 rounded-xl bg-white dark:bg-gray-800 shadow-sm transition-transform group-hover:scale-110 ${service.color}`}>
                    {service.icon}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                    {service.name}
                  </h2>
                </div>

                {/* Right Side: Intro & Chevron */}
                <div className="flex-1 flex items-center justify-between sm:justify-end gap-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium hidden sm:block text-right">
                    {service.description}
                  </p>
                  <div className={`
                    p-2 rounded-full bg-white/50 dark:bg-black/20 text-gray-400 
                    transition-transform duration-300 
                    ${expandedId === service.id ? 'rotate-180 bg-orange-100 text-orange-500 dark:bg-orange-900/30' : ''}
                  `}>
                    <ChevronDown size={20} />
                  </div>
                  </div>
              </div>

              {/* Expandable Detailed Content */}
              <AnimatePresence>
                {expandedId === service.id && (
                  <motion.div
                  initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                         <div className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed bg-white/60 dark:bg-gray-800/60 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                          Project Details
                        </h3>
                        <p>{service.details}</p>
                        
                        <div className="mt-6 flex justify-end">
                           <button className="px-5 py-2 bg-orange-500 text-white text-sm font-bold rounded-lg hover:bg-orange-600 transition-all hover:shadow-lg transform hover:-translate-y-0.5">
                             View Case Study
                           </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  )}
              </AnimatePresence>

            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default MyExpertise;