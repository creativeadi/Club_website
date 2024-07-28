import React from 'react'
import { useState ,useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Feedbacks = () => {
  const fromRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_vitronixvitb",
        "template_pz6hr8r",
        {
          from_name: form.name,
          to_name: "VITronix Club",
          from_email: form.email,
          to_email: "vitronixvitb@gmail.com",
          message: form.message,
        },
        "xh6J3HnAu2fQgWh6r"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. We will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return(
    <div className='xl:mt-12 xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-transparent p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Write to Us</p>
        <h3 className={styles.sectionHeadText}>Feedback.</h3>

        <form ref={fromRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-mono mb-4'> Your Name </span>
            <input 
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-transparent py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-[1px] font-mono'
            ></input>
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-mono mb-4'> Email id </span>
            <input 
              type='text'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Your Email id."
              className='bg-transparent py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-[1px] font-mono s'
            ></input>
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-mono mb-4'> Your Suggestions </span>
            <textarea 
              rows="8"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="Type us your insights."
              className='bg-transparent py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-[1px] font-mono s'
            ></textarea>
          </label>

        <div className='button-container'>
          <button 
            type='submit' 
            className='bg-tertiary send-link py-4 px-8 outline-none w-fit text-white border-[2px] font-bold shadow-md
             shadow-primary rounded-xl'>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
        </form>
      </motion.div>
    </div>
  )
}
export default SectionWrapper(Feedbacks, "feedback");