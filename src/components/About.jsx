import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { useState } from 'react'
import { useEffect } from 'react'
import { SectionWrapper } from '../hoc';
import { styles } from '../styles'

const About = () => {
    const [isMobile,setIsMobile]=useState(false);
    useEffect(()=>{
      const mediaQuery=window.matchMedia('(max-width:768px)');
      setIsMobile(mediaQuery.matches);
      const handleMediaQueryChange=(event) =>{setIsMobile(event.matches);
      }
      mediaQuery.addEventListener('change',handleMediaQueryChange)
  
      return ()=>{
        mediaQuery.removeEventListener('change',handleMediaQueryChange)
      }
    },[])

  return (
    <div className={`relative h-auto py-[50px] px-3 items-center flex-1 ${isMobile ? 'bg-tertiary':'bg-transparent'}`}>
      <div className={` h-auto  ${isMobile ? 'w-full':'w-[600px]'}`} >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          what we do?
        </p>
        <p className={ `${styles.sectionHeadText} bg-gradient-to-r bg-clip-text text-transparent font-medium`} > About Our Club</p>
      </motion.div>
      <div className="mt-4 text-white text-[17px] max-w-3xl leading-[30px] text-justify justify-center items-center">
      Welcome to the VITronix Club, "Where Ideas Spark, Connections Thrive".
       We are a vibrant community of enthusiasts dedicated to exploring the exciting world of electronics and technology. 
       Our club fosters creativity and innovation through hands-on projects, workshops, and collaborative learning. 
       Whether you're a beginner or an expert, you’ll find a supportive environment to enhance your skills, share ideas, 
       and work on fascinating projects. 

      </div>
      <br/>
      <motion.div variants ={textVariant()}>
        <p className="text-gradient font-medium lg:text-[30px] sm:text-[20px] xs:text-[10px] text-[16px] lg:leading-[40px] items-center"></p>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-white text-[17px] 
      max-w-3xl leading-[30px] justify-center text-right items-center">
        “Electronics is the brain of modern technology.” <br/>– Jack Kilby
      </motion.p>
      </div> 
    </div>
  )
}

export default SectionWrapper(About,"about")