import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
const HeroText = () => {
    const words = ['Secure', 'Modern', 'Innovative', 'Cool']
    const variants = {
        hidden:{opacity:0, x:-50},
        visible:{opacity:100, x:0}
    }
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text ">
      <div className="flex-col hidden md:flex c-space">
        <motion.h1 className="text-4xl font-medium" variants={variants} initial='hidden' animate="visible" transition={{delay:1}}>Hello there, I'm Aman!</motion.h1>
        <div className="flex flex-col items-start">
            <motion.p className="text-5xl font-medium text-neutral-300" variants={variants} initial='hidden' animate="visible" transition={{delay:1.3}} >
                A Developer <br/> Dedicated to Crafting
                {/* Aceternity UI comp */}
               
            </motion.p>
            <motion.div variants={variants} initial='hidden' animate="visible" transition={{delay:1.6}}>
                <FlipWords duration={1000} words={words} className='font-black text-white text-8xl'/>
            </motion.div>
             <motion.p className="text-4xl font-medium text-neutral-300" variants={variants} initial='hidden' animate="visible" transition={{delay:1.9}}>Web Solutions</motion.p>
        </div>
      </div>
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p className="text-4xl font-medium" variants={variants} initial='hidden' animate="visible" transition={{delay:1.3}}>Hello There, I'm Aman</motion.p>
        <div>
            <motion.p className="text-5xl font-black text-neutral-300" variants={variants} initial='hidden' animate="visible" transition={{delay:1.6}}>Building</motion.p>
            <motion.div variants={variants} initial='hidden' animate="visible" transition={{delay:1.9}}> 
                <FlipWords duration={1000} words={words} className='font-black text-white text-6xl'/>
            </motion.div>
            
            <motion.p className="text-4xl font-black text-neutral-300" variants={variants} initial='hidden' animate="visible" transition={{delay:2.2}}>Web Applications</motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
