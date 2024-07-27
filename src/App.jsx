import {BrowserRouter} from 'react-router-dom';
import {About, Feedbacks,Works,Hero,Navbar, Events} from './components';
import { useState,useEffect } from 'react';


const App=() => {
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
    <BrowserRouter>
    <div className='relative z-0 bg-tertiary'>
      <div className= {`bg-cover bg-center ${isMobile ? ' bg-hero-mobile bg-fixed' : 'bg-hero-pattern bg-fixed'}`}>
        <Navbar/>
        <Hero/> 
        <About />
        <Events />
      </div>
      
      <Works/>
      <Feedbacks/>
    </div>
    </BrowserRouter>
  )
}

export default App
