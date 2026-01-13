import React from 'react';

const Footer = () => {
  return (
    // Full width, matching the dark theme, with a subtle top border
    <footer className="w-full bg-[#030412] border-t border-white/10 pt-10 pb-8 z-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright - Tech Mono Style */}
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-xs md:text-sm font-medium tracking-wide">
              © 2026 AMAN AHMAD. ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* Social Icons - Interactive Buttons */}
          <div className="flex gap-4">
            <SocialLink 
                href="https://github.com/wizardamxn" 
                src="assets/logos/icons8-github.svg" 
                alt="GitHub" 
            />
            <SocialLink 
                href="https://linkedin.com/in/wizardamxn" 
                src="assets/socials/linkedIn.svg" 
                alt="LinkedIn" 
            />
            <SocialLink 
                href="https://www.instagram.com/aman_ahmad04" 
                src="assets/socials/instagram.svg" 
                alt="Instagram" 
            />
            <SocialLink 
                href="https://wa.me/916263745609" 
                src="assets/socials/whatsApp.svg" 
                alt="WhatsApp" 
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

// Reusable Social Button Component
const SocialLink = ({ href, src, alt }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={alt}
    className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
  >
    <img
      src={src}
      alt={alt}
      className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
    />
  </a>
);

export default Footer;