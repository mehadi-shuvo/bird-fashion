import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTwitter } from "react-icons/fa";

const Navbar = () => {
    const routes=<>
    <li className='bg-transparent rounded-none'><NavLink>Home</NavLink></li>
    <li className='bg-transparent rounded-none'><NavLink>Men</NavLink></li>
    <li className='bg-transparent rounded-none'><NavLink>Women</NavLink></li>
    <li className='bg-transparent rounded-none'><NavLink>Children</NavLink></li>
    
    </>
    return (
        <div className='w-full bg-[#00000080]'>
            <div className="navbar w-4/5 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                            {
                                routes
                            }
                        </ul>
                    </div>
                    <p className="text-xl uppercase text-black w-16 h-16 font-bold  flex flex-col items-center justify-center"><span className='text-4xl text-[#2ab3fd]'><FaTwitter></FaTwitter></span> Fashion</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-3">
                        {routes}
                    </ul>
                </div>
                <div className="navbar-end">
                <input type="text" placeholder="Search" className="input rounded-none input-bordered w-24 md:w-auto" />
                    <a className="btn rounded-none">Search</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;