import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code } from 'lucide-react';

// 1. Education Visual: Floating Hat & Scroll
const EducationVisual = () => (
  <motion.svg 
    width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="overflow-visible"
  >
    {/* Background Glow */}
    <motion.rect 
      animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.1, 0.9] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      x="15" y="25" width="50" height="40" rx="8" fill="#FDBA74" opacity="0.4"
    />

    {/* Floating Cap */}
    <motion.g
      animate={{ y: [0, -8, 0], rotate: [0, 2, 0, -2, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M10 25L40 5L70 25L40 45L10 25Z" fill="#F97316"/>
      <path d="M40 5L40 75" stroke="#FDBA74" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="40" cy="62.5" r="4" fill="#F97316"/>
    </motion.g>

    {/* Floating Scroll/Diploma */}
    <motion.rect 
      animate={{ y: [0, -4, 0], x: [0, 2, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      x="25" y="55" width="30" height="15" rx="4" fill="#FEF3C7"
    />

    {/* Icon */}
    <motion.text 
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      x="40" y="35" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold"
    >
      🎓
    </motion.text>
  </motion.svg>
);


// 2. Work Visual: Floating Briefcase & Papers
const WorkVisual = () => (
  <motion.svg 
    width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="overflow-visible"
  >

    {/* Floating Background */}
    <motion.rect 
      animate={{ rotate: [0, 5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      x="20" y="30" width="40" height="35" rx="6" fill="#3B82F6" opacity="0.8"
    />

    {/* Main Briefcase Body */}
    <motion.g
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <rect x="10" y="15" width="60" height="20" rx="4" fill="#1D4ED8"/>
      <path d="M15 35L15 60C15 63.3137 17.6863 66 21 66H59C62.3137 66 65 63.3137 65 60V35" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="25" y="20" width="30" height="5" rx="2" fill="#E0F2FE"/>
    </motion.g>

    {/* Swinging Tag */}
    <motion.g
      animate={{ rotate: [0, 10, 0, -5, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", transformOrigin: "top" }}
      style={{ originX: "40px", originY: "66px" }}
    >
      <line x1="40" y1="66" x2="40" y2="75" stroke="#1D4ED8" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="40" cy="75" r="3" fill="#1D4ED8"/>
    </motion.g>

    <motion.text 
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      x="40" y="55" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold"
    >
      💼
    </motion.text>
  </motion.svg>
);

// 3. Current Work Visual (NEW): Server & Gears for Backend Dev
const CurrentWorkVisual = () => (
  <motion.svg 
    width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="overflow-visible"
  >
    {/* Server Block 1 */}
    <motion.rect 
      x="15" y="45" width="50" height="15" rx="2" fill="#10B981"
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    {/* Server Block 2 */}
    <motion.rect 
      x="15" y="25" width="50" height="15" rx="2" fill="#34D399"
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
    />

    {/* Rotating Gear (API Logic) */}
    <motion.g
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      style={{ originX: "60px", originY: "20px" }}
    >
      <circle cx="60" cy="20" r="12" fill="#065F46" opacity="0.8" />
      <path d="M60 8V12 M60 28V32 M48 20H52 M68 20H72" stroke="#A7F3D0" strokeWidth="3" strokeLinecap="round"/>
    </motion.g>

     {/* Floating Java/Code Tag */}
    <motion.rect 
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      x="25" y="10" width="20" height="25" rx="2" fill="#ECFDF5" stroke="#059669" strokeWidth="2"
    />
    <motion.text 
      x="35" y="28" textAnchor="middle" fill="#059669" fontSize="12" fontWeight="bold"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      API
    </motion.text>
  </motion.svg>
);

// 4. Project Visual: Floating Screen & Code Elements
const ProjectVisual = () => (
  <motion.svg 
    width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="overflow-visible"
  >
    {/* Background Glow */}
    <motion.rect 
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      x="10" y="20" width="60" height="40" rx="8" fill="#FCA5A5" opacity="0.8"
    />

    {/* Main Screen */}
    <motion.g
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <rect x="15" y="25" width="50" height="30" rx="6" fill="#EF4444"/>
      <rect x="18" y="28" width="44" height="24" rx="4" fill="#FEE2E2"/>
    </motion.g>

    {/* Floating Code Symbols */}
    <motion.path 
      animate={{ y: [0, -8, 0], x: [0, -2, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      d="M40 25L55 40L40 55L25 40L40 25Z" fill="white"
    />

    {/* Orbiting Element */}
    <motion.circle 
      animate={{ 
        x: [0, 10, 0, -10, 0],
        y: [0, -5, 0, 5, 0],
        opacity: [0.3, 1, 0.3]
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      cx="40" cy="40" r="15" fill="#EF4444" opacity="0.5"
    />

    <motion.text 
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 1, repeat: Infinity }}
      x="40" y="45" textAnchor="middle" fill="#EF4444" fontSize="16" fontWeight="bold"
    >
      💻
    </motion.text>
  </motion.svg>
);

const cardVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.95 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 }
  }
};

const contentVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};




// --- Animated Section Component ---
const AnimatedSection = ({ children, direction, title, subtitle, visual, colorClass }) => {
  const isLeft = direction === 'left';

  return (
    <motion.div
    variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -10, boxShadow: "0px 20px 40px -10px rgba(0,0,0,0.15)" }}
      className={`
       max-w-5xl mx-auto w-full p-8 md:p-12 my-12 
        bg-white dark:bg-gray-800 
        rounded-[2rem] border border-gray-100 dark:border-gray-700
        shadow-xl transition-colors duration-300 relative overflow-hidden group
      `}
    >

      {/* Decorative Background Blob (Subtle Glow) */}
      <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${colorClass} opacity-5 rounded-bl-full -z-0 transition-opacity group-hover:opacity-10`} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center relative z-10">
        {/* Visual Column */}
        <div className={`col-span-1 flex flex-col items-center justify-center ${isLeft ? 'md:order-1' : 'md:order-3'}`}>
          {/* Visual Container */}
          <div className="drop-shadow-2xl">
            {visual}
          </div>

          <motion.div variants={contentVariants} className="mt-4 text-center">
            <h2 className="text-2xl font-bold dark:text-white">{title}</h2>
            <div className="h-1 w-12 bg-gray-200 dark:bg-gray-600 mx-auto my-2 rounded-full"></div>
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide">{subtitle}</p>
          </motion.div>
        </div>

        {/* Content Column */}
        <motion.div 
          variants={contentVariants}
          className={`col-span-2 space-y-4 ${isLeft ? 'md:order-3 text-left' : 'md:order-1 text-right'}`}
        >
          {children}
          </motion.div>

      </div>
    </motion.div>
  );
};

const Journey = () => {
  return (
    <div className="py-20 dark:bg-gray-900 min-h-screen overflow-hidden">
      
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 px-6"
        >
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-4">
          My Journey
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Every milestone is a stepping stone. Here is the timeline of my growth, learning, and professional evolution.
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative px-6">
        
        {/* 1. Education */}
        <AnimatedSection 
          direction="left" 
          title="Academic Base" 
          subtitle="2021 - 2024"
          // Replaced variable with Component instantiation
          visual={<EducationVisual />}
          colorClass="from-orange-400 to-yellow-300"
        >
          <div className="space-y-3">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
              Bachelor of Technology
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">
              Computer Science & Engineering
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">
              R.V.R & J.C College of Engineering
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Built a robust foundation in <span className="text-orange-500 font-bold">Data Structures</span>, <span className="text-orange-500 font-bold">Algorithms</span>, and System Design. Graduated with 8.09 CGPA and a passion for problem-solving.
            </p>
          </div>
        </AnimatedSection>

        {/* 2. Work Experience */}
        <AnimatedSection 
          direction="right" 
          title="Previous Experience" 
          subtitle="Oct 2024 - Jan 2025"
          visual={<WorkVisual />}
          colorClass="from-blue-400 to-cyan-300"
        >
          <div className="space-y-3">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
              Software Engineer
            </h3>
            <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">
              Accenture
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              Developed customized CRM solutions using Salesforce tools and Apex.
            </p>
            <ul className="text-gray-600 dark:text-gray-400 space-y-2 mt-2 inline-block text-left">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                CRM applications using Apex, Lightning Web Components (LWC), Visualforce, and Salesforce configuration tools.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Integrates Salesforce with external systems, automates workflows, and ensures scalable, efficient solutions aligned with organizational needs.
              </li>
            </ul>
          </div>
        </AnimatedSection>

        {/* 3. Current Work: TCS (Left) - NEW ADDITION */}
        <AnimatedSection 
          direction="left" 
          title="Current Experience" 
          subtitle="June 2025 - Present"
          visual={<CurrentWorkVisual />}
          colorClass="from-green-400 to-emerald-300"
        >
          <div className="space-y-3">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
              Full Stack Java Developer
            </h3>
            <p className="text-xl text-green-600 dark:text-green-400 font-medium">
              Tata Consultancy Services (TCS)
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              Designing and deploying scalable RESTful APIs and backend microservices.
            </p>
            <ul className="text-gray-600 dark:text-gray-400 space-y-2 mt-2 inline-block text-left">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Building robust backend systems using Java Spring Boot.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Optimizing API performance and ensuring secure data transactions.
              </li>
            </ul>
          </div>
        </AnimatedSection>


        {/* 4. Key Projects */}
        <AnimatedSection 
          direction="right" 
          title="Independent Projects" 
          subtitle="2024 - Present"
          visual={<ProjectVisual />}
          colorClass="from-red-400 to-pink-300"
        >
          <div className="space-y-3">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
              Full Stack Development
            </h3>
            <p className="text-xl text-red-500 dark:text-red-400 font-medium">
              E-commerce UI/UX Platform
            </p>
             <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              Designed a comprehensive shopping experience focusing on micro-interactions.
            </p>
            <div className="flex flex-wrap gap-2 mt-4 justify-end md:justify-start">
              {['React', 'Redux', 'Tailwind', 'Framer Motion'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-300 text-sm font-bold rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        </div>
    </div>
  );
};

export default Journey;