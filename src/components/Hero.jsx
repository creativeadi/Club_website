import React from 'react'
import {motion, transform} from 'framer-motion';
import {styles} from '../styles';
import {ComputersCanvas} from './canvas';
import { useEffect } from 'react';
import { useState } from 'react';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const Hero = () => {
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
    <section className={`relative w-full mx-auto h-screen`}>
      <div className={`absolute inset-0 top-[40px] max-w-7xl mx-auto flex flex-row items-start`}>
        <div className='flex flex-col space-y-4 w-auto'>
          <div className='relative h-screen xs:top-[100px] md:top-[180px]'><motion.h1 variants={fadeIn("right","",0.1,0.5)} className={`${styles.heroHeadText} text-yellow`}>VIT<span className='text-white'>ronix</span>
              </motion.h1>
              <br className='sm:block hidden'/> 
              <motion.p variants={fadeIn("left","",0.1,0.5)} className={`${styles.heroSubText} text-white-100`}>
                VIT BHOPAL
              </motion.p>
              <br className='sm:block hidden'/> 
              <br className='sm:block hidden'/> 
              <motion.h2 variants={fadeIn("right","",0.1,0.5)} className={`${styles.heroHeading} text-pink font-rollbox text-shadow`} >JOIN THE ROBOLUTION!</motion.h2>
            </div>
          </div>
          <div className={`absolute items-center h-full bg-transparent bg-fixed object-contain w-[600px] inset-y-0 xl:right-0 lg:right-[-60px] md:right-[-90px] xs:right-[-40px] sm:top-[180px] xs:top-[180px] md:inset-y-0 `}>
            <ComputersCanvas/>
          </div>
      </div>
      
      
    </section>
  )
}

export default SectionWrapper(Hero,"home")