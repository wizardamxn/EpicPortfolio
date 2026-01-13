import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  LinkToWeb,
  closeModal,
}) => {
  const projectLink = LinkToWeb || href;

  // LOCK BODY SCROLL
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // We wrap the entire return in createPortal to inject it at the top level of the DOM
  return createPortal(
    <div
      // FIXED: z-[9999] ensures it is above EVERYTHING (Navbar, Particles, etc.)
      // bg-[#030412]/90 matches your site theme instead of generic black
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-6 bg-[#030412]/90 backdrop-blur-sm"
      onClick={closeModal}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        // MATCHED STYLING:
        // bg-[#0a0a0a] -> Dark matte card background
        // border-white/10 -> Thin, clean border (no glow)
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#2b2b2b] border border-white/10 rounded-2xl flex flex-col scrollbar-hide shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white text-white/70 hover:text-black rounded-full backdrop-blur-md transition-all border border-white/10 group cursor-pointer"
        >
          <img 
            src="assets/close.svg" 
            alt="Close" 
            className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity group-hover:invert" // Inverts to black on hover
          />
        </button>

        {/* Hero Image */}
        <div className="relative w-full h-64 sm:h-80 bg-[#151515] shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Gradient matches the card background #0a0a0a exactly */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-100" />
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8 flex flex-col gap-6 -mt-12 relative z-10">
          
          {/* Header */}
          <div className="space-y-3">
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              {title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
              {description}
            </p>
          </div>

          {/* Sub Description (Bullet points style) */}
          {subDescription && subDescription.length > 0 && (
            <div className="space-y-3">
               {subDescription.map((subDesc, index) => (
                 <div key={index} className="flex gap-3 text-gray-400 font-light text-sm sm:text-base leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0" />
                    <p>{subDesc}</p>
                 </div>
               ))}
            </div>
          )}

          {/* Divider */}
          <div className="h-px w-full bg-white/10" />

          {/* Footer */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2">
            
            {/* Tech Stack */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <div 
                    key={tag.id} 
                    className="px-3 py-2 bg-[#151515] border border-white/5 rounded-lg flex items-center gap-2"
                  >
                    <img
                      src={tag.path}
                      alt={tag.name}
                      className="w-4 h-4 object-contain"
                    />
                    <span className="text-xs text-gray-300 font-medium uppercase">{tag.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button - Matches Contact Form Button Style */}
            <a
              href={projectLink}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition-colors"
            >
              <span>View Live</span>
              <img 
                src="assets/arrow-up.svg" 
                alt="arrow" 
                className="w-4 h-4 invert rotate-45" 
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>,
    document.body // This renders the modal at the very end of the <body> tag
  );
};

export default ProjectDetails;