const skillsData = [
  {
    category: "Languages",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript"]
  },
  {
    category: "Frontend Frameworks",
    skills: ["React", "Next.js"]
  },
  {
    category: "React Ecosystem",
    skills: [
      "React Router",
      "Framer Motion",
      "Motion",
      "React Hook Form",
      "Zustand",
      "Redux",
      "Zod",
      "Axios",
      "TanStack Query",
      "Jest",
      "React Testing Library"
    ]
  },
  {
    category: "Component Libraries",
    skills: [
      "Shadcn UI",
      "Material UI",
      "Chakra UI",
      "Mantine UI",
      "Headless UI"
    ]
  },
  {
    category: "Styling",
    skills: ["Tailwind CSS", "CSS Modules", "SASS", "Bootstrap", "Emotion", "Styled Components"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js"]
  },
  {
    category: "Database / CMS / BAAS",
    skills: ["MongoDB", "Firebase", "Supabase"]
  },
  {
    category: "Other Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma", "ESLint", "Vercel"]
  }
]

import React from 'react';
import { motion } from 'framer-motion';

const SkillsComponent = () => {
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    // Ensuring the section matches your specific background preference
    <section id="skills" className="c-space py-20 relative overflow-hidden bg-[#030412]">
      
      {/* Background Ambient Glow (Optional) - Adds depth to the flat color */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
      { /* Section Header - CENTERED */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          // CHANGED: Removed 'md:text-left', forced 'text-center'
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Technical <span className="text-indigo-400">Stack</span>
          </h2>
          
          {/* Added mx-auto to center the paragraph block */}
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            I specialize in building robust, scalable applications. 
            Here is the tech stack I use to bring ideas to life.
          </p>
        </motion.div>
        {/* Skills Grid */}
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((section, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              // THE LOOK: Glassmorphism that uses the #030412 bg to create a deep navy card
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all duration-300 backdrop-blur-sm"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 relative z-10">
                {/* Decorative Dot - Cyan/Blue to pop against the navy */}
                <div className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.5)]" />
                <h3 className="text-xl font-semibold text-slate-100 tracking-wide">
                  {section.category}
                </h3>
              </div>

              {/* Skills Container */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {section.skills.map((skill, skillIndex) => (
                  <SkillPill key={skillIndex} skill={skill} index={skillIndex} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Skill Pill - Optimized for Dark Navy Backgrounds
const SkillPill = ({ skill, index }) => {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            whileHover={{ 
                scale: 1.05, 
                // Highlighting with a cool blue tint
                backgroundColor: "rgba(99, 102, 241, 0.15)", // Indigo tint
                borderColor: "rgba(99, 102, 241, 0.4)", // Indigo border
                color: "#e0e7ff" // Light Indigo Text
            }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-1.5 text-sm font-medium text-slate-300 bg-black/20 border border-white/5 rounded-lg cursor-default transition-all duration-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.15)]"
        >
            {skill}
        </motion.span>
    )
}

export default SkillsComponent;