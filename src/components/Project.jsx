// import React, { useState } from 'react'
// import ProjectDetails from './ProjectDetails'

// const Project = ({title,description,subDescription,href,image,tags ,setPreview, LinkToWeb}) => {
//     const [isShowing ,setisShowing] = useState(false)
//   return (
//     <>
//     <div onMouseEnter={()=>setPreview(image)} onMouseLeave={()=>setPreview(null)} className='flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0'>
//         <div>
//             <p className='text-2xl'>{title}</p>
//         <div className='flex gap-5 mt-2 text-sand'>
//             {tags.map((tag)=>{return(<span key={tag.id}>{tag.name}</span>)})}
//         </div>
//         </div>
//         <button onClick={()=>setisShowing(true)} className='flex items-center gap-1 cursor-pointer hover-animation'>
//             Read More
//             <img src='assets/arrow-right.svg' className='w-5'/>
//         </button>
//     </div>
//     <div className='w-full bg-gradient-to-r from-transparent
//      via-neutral-700 to-transparent h-[1px]'/>
//      {isShowing &&
//      (<ProjectDetails title={title} description={description} subDescription={subDescription} image={image} LinkToWeb={LinkToWeb} tags={tags} href={href} closeModal={()=>setisShowing(false)}/>)}
//     </>
//   )
// }

// export default Project

import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { AnimatePresence } from "motion/react";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
  LinkToWeb,
}) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="w-full border-b border-white/10 group last:border-none">
      <div
        onClick={() => setIsShowing(true)}
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
        className="relative flex items-center justify-between py-12 md:py-16 w-full cursor-pointer transition-colors duration-300"
      >
        {/* Left Side: Title & Tags */}
        <div className="flex flex-col gap-3 transition-transform duration-500 ease-out group-hover:translate-x-2">
          <h3 className="text-3xl md:text-5xl font-semibold text-white group-hover:text-gray-200 transition-colors">
            {title}
          </h3>

          <div className="flex flex-wrap gap-2 mt-1">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="px-3 py-1 text-xs font-medium text-gray-400 border border-white/10 rounded-full bg-white/5 uppercase tracking-wide"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Action Indicator */}
        <div className="relative">
          {/* Desktop: Text reveals on hover */}
          <div className="hidden md:flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              View Case
            </span>
            <div className="bg-white rounded-full p-2">
              <img
                src="assets/arrow-up.svg"
                className="w-4 h-4 invert rotate-45 text-black"
                alt="arrow"
              />
            </div>
          </div>

          {/* Mobile: Simple Arrow always visible */}
          <div className="md:hidden">
            <img
              src="assets/arrow-right.svg"
              className="w-6 h-6 opacity-50 -rotate-45 invert"
              alt="arrow"
            />
          </div>
        </div>
      </div>
      <div
        className="w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px]"
      />
      {/* Modal Logic */}
      <AnimatePresence>
        {isShowing && (
          <ProjectDetails
            title={title}
            description={description}
            subDescription={subDescription}
            image={image}
            LinkToWeb={LinkToWeb}
            tags={tags}
            href={href}
            closeModal={() => setIsShowing(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;
