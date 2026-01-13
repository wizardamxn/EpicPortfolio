import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navigation({ showNavMob, isMobile = false }) {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Stack", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  // Custom Smooth Scroll Function
  const handleScroll = (e, href) => {
    e.preventDefault(); // Stop the "jump" and URL change
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      // Get the position relative to the viewport + current scroll
      const yOffset = -80; // Offset for the fixed navbar height
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });

      // Close mobile menu if it's open
      if (showNavMob) showNavMob();
    }
  };

  return (
    <ul className={`flex ${isMobile ? "flex-col gap-8 py-10" : "flex-row gap-8"} items-center`}>
      {navItems.map(({ label, href }) => (
        <li key={label} className="relative group">
          <a
            href={href}
            onClick={(e) => handleScroll(e, href)}
            className={`
                relative font-medium transition-colors duration-300 cursor-pointer
                ${isMobile ? "text-2xl text-white font-light" : "text-sm text-neutral-200 hover:text-white"}
            `}
          >
            {label}
            {/* Minimal Hover Line (Desktop) */}
            {!isMobile && (
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* DESIGN FIX: 
         - bg-black/30 instead of deep dark color to make it lighter/glassy
         - backdrop-blur-md creates the frosted look
      */}
      <div className={`transition-all duration-300 ${isOpen ? "bg-black" : "bg-black/30 backdrop-blur-md"} border-b border-white/10`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* LOGO - Clean, No Blue Dot */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-2xl font-bold tracking-tight text-white hover:text-gray-200 transition-colors"
            >
              Aman Ahmad
            </a>

            {/* DESKTOP NAV */}
            <nav className="hidden sm:block">
              <Navigation />
            </nav>

            {/* MOBILE TOGGLE */}
            <button
              aria-label="Toggle navigation"
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden p-2 text-white hover:text-gray-300 transition-colors focus:outline-none"
            >
              <img
                src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
                className="w-7 h-7" // Removed invert, assuming icons are white/light appropriate
                alt="Menu"
              />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sm:hidden overflow-hidden bg-black/90 backdrop-blur-xl border-b border-white/10 fixed inset-0 top-16 z-40"
          >
            <nav className="flex flex-col items-center justify-center h-full pb-20">
              <Navigation isMobile={true} showNavMob={() => setIsOpen(false)} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;