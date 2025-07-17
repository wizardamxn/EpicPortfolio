import { useState } from 'react'
import Project from '../components/Project'
import {myProjects} from '../constants/index'
import { motion, useMotionValue, useSpring } from 'motion/react'


const Projects = () => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x,{damping:10, stiffness:50})
  const springY = useSpring(y,{damping:10, stiffness:50})

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20)
    y.set(e.clientY + 20)
  }

  const [preview, setPreview] = useState(null)

  return (
    <section id='projects' className='relative c-space mb-[500px] sm:mb-96' onMouseMove={handleMouseMove} >
      <h2 className='text-heading'>
        My Selected Projects
      </h2>
      <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full'>
        {myProjects.map((project)=><Project setPreview={setPreview} key={project.id} {...project}/ >)}

      </div>
      { preview && (<motion.img style={{x:springX , y:springY}} className='fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80' src={preview}></motion.img>)}
    </section>
  )
}

export default Projects