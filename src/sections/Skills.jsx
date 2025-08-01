import React from 'react';
import { motion } from 'framer-motion';

const SkillsComponent = () => {
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
];


  const skillVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const skillsContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  return (
    <section id='skills' className="c-space text-white mb-[150px]">
      <div className="max-w-6xl mx-auto px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="text-3xl font-bold mb-5 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills
          </h1>
          
          <p className="text-slate-300 text-base leading-relaxed max-w-4xl">
            I specialize in building seamless, user-friendly applications using modern web technologies. My toolkit includes:
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {skillsData.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
            >
              <h2 className="text-lg font-semibold mb-3 text-slate-200 flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                {section.category}
              </h2>
              
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={skillsContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {section.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgb(59 130 246 / 0.2)",
                      borderColor: "rgb(59 130 246 / 0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-slate-700/70 text-slate-200 px-3 py-1.5 rounded-full text-xs border border-slate-600/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer select-none"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;