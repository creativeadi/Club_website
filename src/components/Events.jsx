import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import {styles} from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import {textVariant} from '../utils/motion';
import { Tilt } from 'react-tilt'
import { fadeIn } from '../utils/motion'


const EventCard= ({key,experience})=> (
  <VerticalTimelineElement contentStyle={{background:"#1d1836",color:'#fff'}} contentArrowStyle={{borderRight:'7px solid #232631'}} 
  date={experience.date} iconStyle={{background:experience.iconBg}} 
  icon={<div className='flex justify-center items-center w-full h-full'>
    <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain'/> 
  </div>}
  >
    <div>
      <Tilt className="xs:w-[250px] w-full">
        <motion.div variants={fadeIn("right","spring",0.5*key,0.75)} className="w-full green-pink-gradient p-1 rounded-[20px] shadow-card">
        <div options={{ max:45, scale:1, speed:450}} className="bg-tertiary rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={experience.photo} alt={key} className="w-full h-full rounded-[20px]" />
        </div>
        </motion.div>
      </Tilt>
      <br/>
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point,index)=>(
        <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
          {point}
        </li>
      ))}
    </ul>

  </VerticalTimelineElement>
)

const Events = () => {
  return (
    <div className='z-2000'>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText}`}>
        our journey
      </p>
      <h2 className={`${styles.sectionHeadText} bg-gradient-to-r bg-clip-text text-transparent`}>
        Events
      </h2>
    </motion.div>
    <div className='mt-5 flex flex-col'>
      <VerticalTimeline>
        {experiences.map((experience,index)=>(
          <EventCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
    </div>
  )
}

export default SectionWrapper(Events,"events")