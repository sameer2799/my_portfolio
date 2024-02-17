import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`
      ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
      >
      <div className="w-full flex items-center justify-between max-w-7xL mx-auto">
        
        <Link to="/" 
          className="flex items-center gap-2"
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0);
            }}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />

          <p className="text-white text-[18px] font-bold cursor-pointer hover:text-lime-400">
            Sameer <span className='sm:block hidden'> Singh</span>
          </p>
          
        </Link>
        
        <ul className="list-none hidden flex-row sm:flex gap-10">
          {navLinks.map((link) => (
            <li key={link.id} 
              className={`
              ${ active === link.title ? "text-lime-400" : "text-secondary"} hover:text-lime-400 text-[18px] font-medium cursor-pointer
              `}
              onClick={() => {
                setActive(link.title);
                window.scrollTo(0, 0);
              }}
              >
              <a href={`#${link.id}`} >{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
            src={toggle ? close : menu }
            alt="menu"
            className="w-[18px] h-[18px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`
            ${!toggle ? "hidden" : "flex"} 
            flex-col black-gradient gap-5 absolute top-20 right-0 mx-4 my-4 min-w-[140px] z-10 p-6 rounded-xl
            `}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id} 
                  className={`
                  ${ active === link.title ? "text-lime-400" : "text-secondary"} font-poppins text-[16px] font-medium cursor-pointer
                  `}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                    window.scrollTo(0, 0);
                  }}
                  >
                  <a href={`#${link.id}`} >{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar;
