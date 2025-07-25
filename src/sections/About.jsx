import React, { useRef } from "react";
import { useState } from "react";
import Card from "../components/Card";
import { Frameworks } from "../components/Frameworks";
import CopyEmailButton from "../components/CopyEmailButton";
import { motion } from "motion/react";

const About = () => {
  const [up, setUp] = useState(true);
  const [isRevealed, setIsRevealed] = useState(false);
  const grid2Container = useRef();

  const handleClick = () => {
    setIsRevealed(!isRevealed);
    setUp(!up);
  };

const logoArray = [
  { img: "assets/logos/react.svg", style: { rotate: "15deg", top: "10%", left: "20%" } },
  { img: "assets/logos/threejs.svg", style: { rotate: "-10deg", top: "20%", left: "60%" } },
  { img: "assets/firebasebig.png", style: { rotate: "25deg", top: "35%", left: "40%" } },
  { img: "assets/logos/html5.svg", style: { rotate: "-20deg", top: "50%", left: "30%" } },
  { img: "assets/logos/git.svg", style: { rotate: "30deg", top: "50%", left: "70%" } },
  { img: "assets/logos/framer-motion.svg", style: { rotate: "-30deg", top: "65%", left: "50%" } },
  { img: "assets/logos/css3.svg", style: { rotate: "-10deg", top: "75%", left: "20%" } },
  { img: "assets/logos/github.svg", style: { rotate: "10deg", top: "80%", left: "40%" } },
  { img: "assets/logos/vitejs.svg", style: { rotate: "20deg", top: "85%", left: "60%" } },
  { img: "assets/logos/cplusplus.svg", style: { rotate: "25deg", top: "15%", left: "75%" } },
  { img: "assets/logos/javascript.svg", style: { rotate: "-25deg", top: "25%", left: "10%" } },
  { img: "assets/nodejs.svg", style: { rotate: "-5deg", top: "45%", left: "15%" } },
  { img: "assets/Mongoose.js.svg", style: { rotate: "35deg", top: "55%", left: "85%" } },
  { img: "assets/MongoDB.svg", style: { rotate: "-35deg", top: "65%", left: "10%" } },
  { img: "assets/expressjs.svg", style: { rotate: "0deg", top: "75%", left: "85%" } },
];



  const TappingHand = () => (
    <motion.span
      role="img"
      aria-label="tapping hand"
      className="inline-block ml-2"
      animate={{ y: [0, 5, 0] }}
      transition={{
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {up ? "👇" : "👆"}
    </motion.span>
  );

  return (
    <section id="about" className="c-space section-spacing mb-40 sm:mb-0">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:auto-rows-[18rem] mt-12">
        <div className="grid-default-color grid-1 flex flex-col ">
          <div className="z-10 w-[50%] ">
            <p className="headText">Contact Me</p>
            <p className="subtext ">
              I specialize in a variety of languages, frameworks, and tools taht
              allow me to build robust and scalable applications.
              <span className="text-gray-300">
                {" "}
                Let's start a project together.
              </span>
            </p>
            <div className="absolute bottom-8">
              <CopyEmailButton />
            </div>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>

        <div className="grid-default-color grid-2">
          <div  ref={grid2Container}  className="flex items-center justify-center w-full h-full">
            <p
              style={{ userSelect: "none" }}
              className="flex items-end text-5xl text-gray-500"
            >
              MY SKILLS
            </p>
           {logoArray.map((image)=>(<Card img={image.img} containerRef={grid2Container} style={image.style} />))}
          </div>
        </div>

        <div className="grid-special-color grid-3 relative p-2">
          <div
            onClick={handleClick}
            className={`bg-black/80 flex justify-center items-center absolute transition-all duration-700 bottom-0 left-0 w-full ${
              isRevealed ? "h-1/4" : "h-full"
            } rounded-lg z-20 cursor-pointer p-2`}
          >
            <motion.p className="text-white px-4 text-center font-extralight">
              <TappingHand />
            </motion.p>{" "}
          </div>
          <img
            src="/assets/povImg.jpg"
            alt="Profile"
            className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-10 h-full w-full object-cover rounded-3xl"
          />
        </div>

        <div className="grid-black-color  grid-4 relative flex items-center sm:justify-center flex-col">
          <p className="text-center px-4 text-gray-300 font-extralight">
            Hi, I'm Aman Ahmad! I'm a passionate developer with a love for
            turning ideas into digital experiences. With a focus on clean code
            and creative solutions, I enjoy building projects that solve
            real-world problems. When I'm not coding, I'm exploring new
            technologies, learning, and playing games. Join me as I explore the
            intersection of tech and creativity!
          </p>

          <div className="absolute bottom-0 inset-x-0 w-full h-[3rem] bg-black/40 flex flex-row p-2  gap-x-16 items-center justify-center">
            <a
              href="https://www.instagram.com/aman_ahmad04"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                className="w-6 h-6 sm:w-8 sm:h-8"
                src="assets/socials/instagram.svg"
                alt="Instagram"
              />
            </a>
            <a
              href="https://linkedin.com/in/wizardamxn"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                className="w-6 h-6 sm:w-8 sm:h-8"
                src="assets/socials/linkedIn.svg"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://wa.me/916263745609"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                className="w-6 h-6 sm:w-8 sm:h-8"
                src="assets/socials/whatsApp.svg"
                alt="WhatsApp"
              />
            </a>
            <a
              href="https://github.com/wizardamxn"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                className="w-6 h-6 sm:w-8 sm:h-8"
                src="assets/logos/icons8-github.svg"
                alt="GitHub"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
