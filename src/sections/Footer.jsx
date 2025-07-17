import React from 'react'

const Footer = () => {
  return (
    <footer id="footer" className="c-space text-neutral-400 text-sm pb-5">
      {/* Top gradient line */}
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full mb-4" />

      {/* Footer content */}
      <div className="flex flex-wrap items-center justify-between gap-5">
        {/* Copyright */}
        <p className="text-xs sm:text-sm">
          © 2025 Aman Ahmad. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-8">
          <a
            href="https://www.instagram.com/aman_ahmad04"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
            className="cursor-pointer"
          >
            <img
              className="w-6 h-6 sm:w-7 sm:h-7"
              src="assets/socials/instagram.svg"
              alt="Instagram"
            />
          </a>
          <a
            href="https://linkedin.com/in/wizardamxn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="cursor-pointer"
          >
            <img
              className="w-6 h-6 sm:w-7 sm:h-7"
              src="assets/socials/linkedIn.svg"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://wa.me/916263745609"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
            className="cursor-pointer"
          >
            <img
              className="w-6 h-6 sm:w-7 sm:h-7"
              src="assets/socials/whatsApp.svg"
              alt="WhatsApp"
            />
          </a>
          <a
            href="https://github.com/wizardamxn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="cursor-pointer"
          >
            <img
              className="w-6 h-6 sm:w-7 sm:h-7"
              src="assets/logos/icons8-github.svg"
              alt="GitHub"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
