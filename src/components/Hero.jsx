import React from 'react'
import {motion, transform} from 'framer-motion';
import {styles} from '../styles';
import {ComputersCanvas} from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[220px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div><h1 className={`${styles.heroHeadText} text-yellow`}>VIT<span className='text-white'>ronix</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              VIT BHOPAL
              <br className='sm:block hidden'/> 
            </p>
          </div>
      </div>
      <div className="w-[700px] absolute inset-y-0 right-0 items-center h-screen bg-transparent">
        <ComputersCanvas/>
      </div>
      
    </section>
  )
}

export default Hero