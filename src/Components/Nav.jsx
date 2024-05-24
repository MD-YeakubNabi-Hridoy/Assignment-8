import React from 'react';

const Nav = () => {
    return (
        <div className='mt-5'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow border-2 border-green-300 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Listed Books</a>
                            </li>
                            <li><a>Page to Read</a></li>
                        </ul>
                    </div>
                    <a className="font-bold text-3xl cursor-pointer">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg ">
                        <li className='border-2 border-green-300 rounded-lg'><a>Home</a></li>
                        <li><a>Listed Books</a></li>
                        <li><a>Pages to Read</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-8">
                    <button className="btn bg-green-400 text-lg text-white">Sign in</button>
                    <button className="btn bg-blue-300 text-lg text-white">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;