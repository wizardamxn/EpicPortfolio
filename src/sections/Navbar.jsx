import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navigation() {
  const navItems = [
    { label: "Home", href: "#home", padding: "px-5" },
    { label: "About", href: "#about", padding: "px-5" },
    { label: "Projects", href: "#projects", padding: "px-6" },
    { label: "Skills", href: "#skills", padding: "px-4" },
    { label: "Contact", href: "#contact", padding: "px-3" },
  ];

  return (
    <ul className="nav-ul flex flex-col sm:flex-row gap-4 items-center">
      {navItems.map(({ label, href, padding }) => (
        <li key={label} className="nav-li">
          <a
            href={href}
            className={`nav-link sm:border-0 border-2 rounded-xl p-1 ${padding} block`}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="#home"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Aman Ahmad
          </a>
          <button
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="w-6 h-6"
              alt="Menu Icon"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="block border-gray-200 overflow-hidden text-center sm:hidden"
          >
            <nav className="pb-5 h-screen">
              <Navigation />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
