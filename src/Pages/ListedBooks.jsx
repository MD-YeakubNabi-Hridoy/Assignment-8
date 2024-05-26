import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


const ListedBooks = () => {

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className='w-4/5 mx-auto mt-10'>
            <h1 className='text-4xl font-bold text-center bg-slate-100 p-5 rounded-xl'>Books</h1>
            <div className='flex justify-center my-5'>
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="m-1 px-7 py-3 text-lg font-bold bg-green-500 text-white rounded-xl w-52 text-center">Click</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li className='text-lg font-medium text-center'><a>Rating</a></li>
                    <li className='text-lg font-medium text-center'><a>Number Of Pages</a></li>
                    <li className='text-lg font-medium text-center'><a>Publisher Year</a></li>
                </ul>
            </div>
            </div>
            <div className="flex justify-center lg:justify-start  mt-7 border-b-2">
                <Link
                    to={``}
                    onClick={() => setTabIndex(0)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400 `}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>
                <Link
                    to={`wishlist`}
                    onClick={() => setTabIndex(1)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400 `}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>
            </div>

            <div className='mt-5'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ListedBooks;