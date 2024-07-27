import React,{ useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo,menu,close } from '../assets';

const Navbar = () => {
  const [active,setActive]=useState('')
  const [toggle,setToggle]=useState(false)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`
      px-2 w-full flex items-center py-2 fixed top-0 z-20 ${scrolled ? 'bg-tertiary' : 'bg-transparent'}`}>
      <div className="w-full flex flex-row justify-between items-center max-w-8xl mx-2">
        <Link to="/" 
        className="flex justify-self-end items-center gap-2"
        onClick={()=>{
          setActive("");
          window.scrollTo(0,0);
        }}
        >
          <img src={logo} alt="logo" className="w-auto h-auto object-contain" />
        </Link>
        <ul className='list-none hidden sm:flex px-8 flex-row gap-10'>
          {navLinks.map((link)=>(
            <li
            key={link.id}
            className={`${
              active===link.title ? "text-yellow":"text-secondary"
            } hover:text-yellow text-[18px] font-medium cursor-pointer hover:underline-yellow`}
            onClick={()=> setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle? close:menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={()=> setToggle(!toggle)}/>
          <div className={`${!toggle ? 'hidden':'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
            {navLinks.map((link)=>(
              <li
              key={link.id}
              className={`${
                active===link.title ? "text-white":"text-secondary"
              } font-poppins font-medium cursor-pointer text-[16px]`}

              onClick={()=> {
                setToggle(!toggle);
                setActive(link.title);
              }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}

          </ul>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar