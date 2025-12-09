import React from 'react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router';

const Nav = () => {
    return (
        <div className='md:mx-10 mr-3'>
            <div className="navbar">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className='my-1'> 
                          <NavLink 
                            to="/" 
                            className={({ isActive }) => isActive ? "text-primary font-bold" : ""}
                          >
                            Home
                          </NavLink>
                        </li>

                        <li className='my-1'>
                          <NavLink 
                            to="/book" 
                            className={({ isActive }) => isActive ? "text-primary font-bold" : ""}
                          >
                            My-Bookings
                          </NavLink>
                        </li>

                        <li className='my-1'>
                          <NavLink 
                            to="/blogs" 
                            className={({ isActive }) => isActive ? "text-primary font-bold" : ""}
                          >
                            Blogs
                          </NavLink>
                        </li>

                        <li className='my-1'>
                          <NavLink 
                            to="/contact" 
                            className={({ isActive }) => isActive ? "text-primary font-bold" : ""}
                          >
                            Contact Us
                          </NavLink>
                        </li>
                  </ul>
                </div>
                <div className='flex items-center gap-3'>
                <img className='md:w-[30%] w-[15%]' src={logo} alt="logo.img" />
                <NavLink to='/' className="md:text-2xl text-xl font-bold">
                  Phudu
                </NavLink>
                </div>
              </div>
              <div className="navbar-center hidden lg:flex">
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
              <div className="navbar-end">
                <a className="btn btn-primary rounded-2xl text-white  sm:text-xs px-3 md:px-6">Emergency</a>
              </div>
            </div>
        </div>
    );
};

export default Nav;