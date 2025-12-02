import React from 'react';

const skillsData = [
  { name: "Core Java", percentage: "80%" },
  { name: "SpringBoot REST", percentage: "70%" },
  { name: "SQL", percentage: "80%" },
  { name: "Python", percentage: "85%" },
  { name: "AI/ML", percentage: "70%" },
  { name: "HTML", percentage: "95%" },
  { name: "CSS", percentage: "90%" },
  { name: "React.js", percentage: "80%" },
  { name: "Git & GitHub", percentage: "80%" },
  { name: "Apache Airflow", percentage: "70%" },
];

const SkillsLevel = ({ skillName, percentage }) => {
  return (
    <div className='mt-4 space-y-2 w-full'>
      <div className='flex justify-between items-end'>
        <p className='font-bold text-xl dark:text-white'>{skillName}</p>
        <p className='text-sm font-medium dark:text-gray-300'>{percentage}</p>
      </div>
      {/* Shadow effect on the background bar */}
      <div className='w-full bg-slate-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden shadow-md'>
        <div 
          style={{ width: percentage }} 
          className='h-2 bg-orange-500 rounded-full transition-all duration-1000 ease-out shadow-sm'
        ></div>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT: Skills Section ---
const Skills = () => {
  return (
    <section id='skills' className='w-full bg-white dark:bg-gray-900 dark:text-white py-20 transition-colors duration-300'>
      <div className='container mx-auto px-6 max-w-6xl'>
        
        {/* 1. Header / Title Section */}
        <div className='mb-12 relative flex flex-col items-center justify-center'>
          {/* Background Text Effect */}
          <div className='absolute text-6xl md:text-8xl font-bold text-black/5 dark:text-white/5 uppercase select-none pointer-events-none'>
            SKILLS
          </div>
          {/* Foreground Title */}
          <h1 className='text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white relative z-10'>
            Skills
          </h1>
        </div>

        {/* 2. Skills Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6'>
          {skillsData.map((skill, index) => (
            <SkillsLevel 
              key={index} 
              skillName={skill.name} 
              percentage={skill.percentage} 
            />
          ))}
        </div>

        </div>
    </section>
  );
};

export default Skills;