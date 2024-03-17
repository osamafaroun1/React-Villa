import { FaEnvelope } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { FaCalendar } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import { BsXLg } from "react-icons/bs";
import './Navbar.css'

const Navbar = () => {

  const [collapse, setCollapse] = useState(false);
  const [muneCollapse, setMuneCollapse] = useState(false);
  const [scroll, setScroll] = useState();
  function stickNavbar() {
    let windowHeight = window.scrollY;
    if (windowHeight > 174) {
      setScroll('OF-fixed');
      setMuneCollapse('OF-fixed-mob')
    } else {
      setScroll('');
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
  }, []);

  return (
    <div>
      <div className={`hidden md:flex md:px-20 px-5 sm:py-5 py-1`}>
        {/* right */}
        <div className='md:w-1/2 flex flex-wrap sm:gap-10 gap-1'>
          <div className='flex justify-center items-center sm:gap-3 gap-2'>
            <FaEnvelope className="text-my-orange sm:text-sm  text-xs sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]" />
            <p className="text-sm text-my-secoundry">info@company.com</p>
          </div>
          <div className='flex OF-befor  justify-center items-center sm:gap-3  gap-2'>
            <FaMap className="text-my-orange sm:text-sm  text-xs sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]" />
            <p className="text-sm text-my-secoundry icon">Sunny Isles Beach, FL 33160</p>
          </div>
        </div>
        {/* left */}
        <div className='md:w-1/2 flex gap-5 md:justify-end justify-center sm:pt-0 pt-3 items-center'>
          <FaFacebook className='text-my-secoundry hover:text-my-orange sm:text-sm  text-xs sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]' />
          <FaXTwitter className='text-my-secoundry hover:text-my-orange sm:text-sm  text-xs sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]' />
          <FaLinkedinIn className='text-my-secoundry  hover:text-my-orange sm:text-sm  text-xs sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]' />
          <IoLogoInstagram className='text-my-secoundry hover:text-my-orange sm:text-sm  text-xs sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]' />
        </div>
      </div>
      <hr />
      {/* Navbar */}
      <nav className={`${scroll}  flex justify-between items-center md:px-20 px-5`}>
        <h1 className='uppercase sm:leading-[100px] leading-[60px] text-[18px] sm:text-[28px] font-bold tracking-[2px]'>Villa</h1>
        <div className='OF-link-active hidden md:flex lg:gap-8 md:gap-4 justify-center items-center'>
          <NavLink to="/"
            className={({ isActive }) =>
              isActive ? "active" : "hover:text-my-orange"
            }>Home</NavLink>
          <NavLink to="/Properties"
            className={({ isActive }) =>
              isActive ? "active" : "hover:text-my-orange"
            }>Properties</NavLink>
          <NavLink to="/propertyDetails"
            className={({ isActive }) =>
              isActive ? "active" : "hover:text-my-orange"
            }>Property Details</NavLink>
          <NavLink to="/contactUs"
            className={({ isActive }) =>
              isActive ? "active" : "hover:text-my-orange"
            }>Contact Us</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'bg-black text-white flex justify-center items-center gap-3 pr-5 rounded-[20px]' : 'bg-black text-white flex justify-center items-center gap-3 pr-5 rounded-[20px]'}>
            <div className='bg-my-orange p-3 rounded-[50%]'>
              <FaCalendar className='text-white' />
            </div>
            Schedule a visit
          </NavLink>
        </div>
        <div className='md:hidden'>
          {collapse ? <BsXLg onClick={() => { setCollapse(!collapse) }} /> :
            <FaBarsStaggered onClick={() => { setCollapse(!collapse) }} />
          }
        </div>
      </nav>
      {
        collapse &&
        <div className={`${scroll} top-10  flex flex-col items-center py-5 gap-10`}>
          <NavLink to="/"
            className={({ isActive }) =>
              isActive ? "active" : "hover:text-my-orange"
            }>Home</NavLink>
          <NavLink to="/Properties"
            className={({ isActive }) =>
              isActive ? "active" : "hover:text-my-orange"
            }>Properties</NavLink>
          <NavLink to="/propertyDetails"
            className={({ isActive }) =>
              isActive ? "active" : "hover:text-my-orange"
            }>Property Details</NavLink>
          <NavLink to="/contactUs"
            className={({ isActive }) =>
              isActive ? "active" : "hover:text-my-orange"
            }>Contact Us</NavLink>
        </div>

      }
    </div>
  )
}

export default Navbar

