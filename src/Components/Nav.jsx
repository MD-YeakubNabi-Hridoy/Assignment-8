import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='mt-5 '>
            <div className="navbar flex gap-2 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow border-2 border-green-300 rounded-box w-52">
                            <NavLink to={'/'}>Home</NavLink>
                            <NavLink to={'/listedbooks'}>Listed Books</NavLink>
                            <NavLink to={'/pageread'}>Page to Read</NavLink>
                        </ul>
                    </div>
                    <a className="font-bold text-2xl lg:text-4xl cursor-pointer">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex justify-evenly">
                    <ul className="menu menu-horizontal px-1 text-lg flex gap-8 item-center">
                        <NavLink to={'/'} className=  {({isActive}) => isActive ? 'px-3 py-1 font-semibold border-2 border-green-300 rounded-lg' : 'px-3 py-1'}>Home</NavLink>
                        <NavLink to={'/listedbooks'} className=  {({isActive}) => isActive ? 'px-3 py-1 font-semibold border-2 border-green-300 rounded-lg' : 'px-3 py-1'}>Listed Books</NavLink>
                        <NavLink to={'/pageread'} className=  {({isActive}) => isActive ? 'px-3 py-1 font-semibold border-2 border-green-300 rounded-lg' : 'px-3 py-1'}>Pages to Read</NavLink>
                        <NavLink to={'/blogs'} className=  {({isActive}) => isActive ? 'px-3 py-1 font-semibold border-2 border-green-300 rounded-lg' : 'px-3 py-1'}>Blogs</NavLink>
                        <NavLink to={'/contact'} className=  {({isActive}) => isActive ? 'px-3 py-1 font-semibold border-2 border-green-300 rounded-lg' : 'px-3 py-1'}>Contact</NavLink>
                    </ul>
                </div>
                <div className="navbar-end flex gap-3 lg:gap-8">
                    <button className="btn bg-green-400 text-sm lg:text-lg text-white">Sign in</button>
                    <button className="btn bg-blue-300 text-sm lg:text-lg text-white">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;