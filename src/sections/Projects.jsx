import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants/index";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { useMediaQuery } from "react-responsive";

const Projects = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const [hoveredId, setHoveredId] = useState(null);

  // Mouse Follow Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smoother spring configuration for a "magnetic" feel
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    // Only update coordinates if not mobile to save performance
    if (!isMobile) {
      x.set(e.clientX);
      y.set(e.clientY);
    }
  };

  const [preview, setPreview] = useState(null);

  return (
    <section
      id="projects"
      className="c-space py-20 relative z-0"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Selected Works
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-sm text-left md:text-right">
              A collection of projects exploring the boundaries of code, design, and user experience.
            </p>
        </div>

        {/* Project List Container */}
        <div 
            className="flex flex-col group/list w-full"
            onMouseLeave={() => {
                setPreview(null);
                setHoveredId(null);
            }}
        >
          {/* Top Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />

          {myProjects.map((project) => (
            <div 
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                className={`transition-opacity duration-300 ${hoveredId && hoveredId !== project.id ? 'opacity-40 blur-[1px]' : 'opacity-100'}`}
            >
                <Project 
                    setPreview={setPreview} 
                    {...project} 
                />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Preview Image (Desktop Only) */}
      <AnimatePresence>
        {!isMobile && preview && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2, ease: "circOut" }}
            style={{ 
                x: springX, 
                y: springY,
                translateX: "-50%", // Centers the cursor on the image
                translateY: "-50%" 
            }}
            className="fixed top-0 left-0 z-50 pointer-events-none"
          >
            <div className="relative p-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                <img
                    src={preview}
                    alt="Project Preview"
                    className="w-[350px] h-[220px] object-cover rounded-xl"
                />
                {/* Optional: Add a subtle overlay or text on the floating image */}
                <div className="absolute bottom-4 left-4 bg-white text-black text-xs font-bold px-2 py-1 rounded-full uppercase tracking-widest">
                    View Case
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;