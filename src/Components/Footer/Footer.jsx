import React from 'react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router';
import {FaFacebookF, FaLinkedin, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
    return (
        <div className='bg-white md:p-14 p-6 border-b'>
            <div className='flex flex-col  items-center border-b border-b-gray-300'>
            <div className='flex items-center '>
                <div>
                    <img className='md:w-[80%] w-[60%]' src={logo} alt="logo.img" />
                </div>
                <a className="md:text-2xl font-bold">Phudu</a>
            </div>
            <div className=" my-3 navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-gray-500">
                  <li>
                  <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? "text-primary font-bold" : ""}
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink 
                    to="/book" 
                    className={({ isActive }) => isActive ? "text-primary font-bold" : ""}
                  >
                    My-Bookings
                  </NavLink>
                </li>

                <li>
                  <NavLink 
                    to="/blogs" 
                    className={({ isActive }) => isActive ? "text-primary font-bold" : ""}
                  >
                    Blogs
                  </NavLink>
                </li>

                <li>
                  <NavLink 
                    to="/contact" 
                    className={({ isActive }) => isActive ? "text-primary font-bold" : ""}
                  >
                    Contact Us
                  </NavLink>
                </li>
                </ul>
              </div>
            </div>
            <div className='flex justify-center my-5 gap-3 text-primary'>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={24} />
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={24} />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaXTwitter size={24} />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
                </a>
            </div>
        </div>
    );
};

export default Footer;