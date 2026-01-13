import React, { useRef, useState } from "react";
import Card from "../components/Card";
import { Frameworks } from "../components/Frameworks";
import CopyEmailButton from "../components/CopyEmailButton";
import { motion } from "motion/react";

const About = () => {
  const [up, setUp] = useState(true);
  const [isRevealed, setIsRevealed] = useState(false);
  const grid2Container = useRef(null);

  const handleClick = () => {
    setIsRevealed(!isRevealed);
    setUp(!up);
  };

  // COMPACTED COORDINATES:
  // I brought the 'top' and 'left' values closer to the center.
  // No icon is closer than 15% to the edge now, making them look like a tight cloud.
  const logoArray = [
    { img: "assets/logos/react.svg", style: { top: "20%", left: "20%" } },
    { img: "assets/logos/threejs.svg", style: { top: "20%", left: "60%" } },
    { img: "assets/firebasebig.png", style: { top: "35%", left: "45%" } },
    { img: "assets/logos/html5.svg", style: { top: "50%", left: "15%" } },
    {
      img: "assets/logos/git.svg",
      style: { top: "50%", left: "70%", color: "white" },
    },
    {
      img: "assets/logos/framer-motion.svg",
      style: { top: "62%", left: "50%" },
    },
   
    
    
    
    
    {
      img: "assets/logos/css3.svg",
      style: { rotate: "-10deg", top: "75%", left: "20%" },
    },
    {
      img: "assets/logos/github.svg",
      style: { rotate: "10deg", top: "80%", left: "40%" },
    },
    {
      img: "assets/logos/vitejs.svg",
      style: { rotate: "20deg", top: "85%", left: "60%" },
    },
    {
      img: "assets/logos/cplusplus.svg",
      style: { rotate: "25deg", top: "15%", left: "75%" },
    },
    {
      img: "assets/logos/javascript.svg",
      style: { rotate: "-25deg", top: "25%", left: "10%" },
    },
    {
      img: "assets/nodejs.svg",
      style: { rotate: "-5deg", top: "45%", left: "15%" },
    },
    {
      img: "assets/Mongoose.js.svg",
      style: { rotate: "35deg", top: "55%", left: "85%" },
    },
    {
      img: "assets/MongoDB.svg",
      style: { rotate: "-35deg", top: "65%", left: "10%" },
    },
    {
      img: "assets/expressjs.svg",
      style: { rotate: "0deg", top: "75%", left: "85%" },
    },
    { img: "assets/logos/typescript.svg", style: { top: "15%", left: "40%" } },
    { img: "assets/logos/tailwindcss.svg", style: { top: "25%", left: "80%" } },
    { img: "assets/logos/Nextjs.svg", style: { top: "40%", left: "80%" } },
    { img: "assets/logos/docker.svg", style: { top: "60%", left: "80%" } },
    { img: "assets/logos/figma.svg", style: { top: "82%", left: "85%" } },
  ];

  const TappingHand = () => (
    <motion.span
      role="img"
      aria-label="tapping hand"
      className="inline-block ml-2 text-xl md:text-2xl"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
    >
      {up ? "👇" : "👆"}
    </motion.span>
  );

  return (
    <section
      id="about"
      className="c-space py-12 md:py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-5xl md:text-6xl font-bold mb-8 md:mb-12 text-center text-white/90">
          About Me
        </h2>

        {/* GRID HEIGHT ADJUSTMENT: 
           Reduced Desktop Height from 800px -> 700px to tighten the layout.
        */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 h-auto md:h-[700px]">
          {/* --- LEFT COLUMN (Span 7) --- */}
          <div className="col-span-1 md:col-span-7 flex flex-col gap-4 md:gap-6 h-auto md:h-full order-1">
            {/* 1. CONTACT ME */}
            <div className="relative flex-none md:flex-1 w-full rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 p-6 md:p-8 flex flex-col justify-center overflow-hidden shadow-lg group">
              <div className="z-20 w-full md:w-2/3 relative">
                <p className="text-2xl md:text-3xl font-semibold text-white mb-3 md:mb-4">
                  Contact Me
                </p>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-6">
                  I specialize in a variety of languages, frameworks, and tools.
                  <span className="text-white font-medium block mt-2">
                    Let's start a project together.
                  </span>
                </p>
                <div className="w-full sm:w-auto">
                  <CopyEmailButton />
                </div>
              </div>

              {/* SPINNER: Right aligned */}
              <div className="absolute -bottom-10 -right-10 w-[200px] h-[200px] md:top-1/2 md:-right-24 md:w-[400px] md:h-[400px] md:-translate-y-1/2 opacity-30 md:opacity-60 mix-blend-screen pointer-events-none transition-opacity duration-500">
                <Frameworks />
              </div>
            </div>

            {/* 2. BIO & SOCIALS */}
            <div className="relative flex-none h-auto md:h-[40%] rounded-2xl md:rounded-3xl bg-[#0a0a0a] border border-white/5 p-6 md:p-8 flex flex-col justify-center order-4 md:order-2">
              <p className="text-gray-400 font-light text-sm md:text-lg leading-relaxed">
                Hi, I'm{" "}
                <span className="text-white font-semibold">Aman Ahmad</span>! I
                focus on clean code and creative solutions. When I'm not coding,
                I'm exploring new technologies.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 md:gap-4 items-center">
                <SocialIcon
                  href="https://github.com/wizardamxn"
                  src="assets/logos/icons8-github.svg"
                  alt="Github"
                />
                <SocialIcon
                  href="https://linkedin.com/in/wizardamxn"
                  src="assets/socials/linkedIn.svg"
                  alt="LinkedIn"
                />
                <SocialIcon
                  href="https://www.instagram.com/aman_ahmad04"
                  src="assets/socials/instagram.svg"
                  alt="Instagram"
                />
                <SocialIcon
                  href="https://wa.me/916263745609"
                  src="assets/socials/whatsApp.svg"
                  alt="WhatsApp"
                />
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN (Span 5) --- */}
          <div className="col-span-1 md:col-span-5 flex flex-col gap-4 md:gap-6 h-auto md:h-full order-2 md:order-2">
            {/* 3. MY SKILLS */}
            {/* HEIGHT ADJUSTMENT: 
               Changed min-h-[400px] -> min-h-[280px] on Mobile.
               This removes the massive empty space on phone screens.
            */}
            <div className="relative flex-1 min-h-[280px] md:min-h-0 rounded-2xl md:rounded-3xl bg-[#a65151] border border-white/5 overflow-hidden order-2 md:order-1">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(#ffffff 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              ></div>

              <div ref={grid2Container} className="relative w-full h-full p-4">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                  <p className="text-[50px] md:text-[80px] font-bold text-white/5 uppercase tracking-widest rotate-90 md:rotate-0">
                    Stack
                  </p>
                </div>

                {logoArray.map((image, i) => (
                  <Card
                    key={i}
                    img={image.img}
                    containerRef={grid2Container}
                    style={{
                      ...image.style,
                      position: "absolute",
                      // Adjusted size slightly for better fit
                    }}
                    // On desktop, they scale up nicely
                    className="w-11 h-11 md:w-14 md:h-14 hover:scale-110 transition-transform duration-200 z-10"
                  />
                ))}
              </div>
            </div>

            {/* 4. PROFILE REVEAL */}
            <div
              className="relative h-[250px] md:h-[40%] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group order-3 md:order-2"
              onClick={handleClick}
            >
              <motion.div
                initial={false}
                animate={{
                  y: isRevealed ? "100%" : "0%",
                  opacity: isRevealed ? 0 : 1,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 z-20 bg-[#121212] flex flex-col items-center justify-center border border-white/5"
              >
                <p className="text-gray-500 text-xs md:text-sm tracking-widest uppercase mb-2">
                  Tap Me
                </p>
                
              </motion.div>

              <img
                src="/assets/headshot.png"
                alt="Profile"
                className="absolute inset-0 w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, src, alt }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 md:p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
  >
    <img
      className="w-5 h-5 md:w-6 md:h-6 opacity-70 hover:opacity-100 transition-opacity"
      src={src}
      alt={alt}
    />
  </a>
);

export default About;
