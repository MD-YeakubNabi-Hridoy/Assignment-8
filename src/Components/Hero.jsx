import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='mt-10'>
            <div className="hero flex flex-col lg:flex-row lg:h-[70vh] bg-base-200 rounded-3xl">
                <div className="hero-content lg:p-16 p-8 flex-col lg:flex-row-reverse">
                    <img className='w-5/12' src="/src/assets/Book_10.jpg" />
                    <div className=''>
                        <h1 className="text-4xl lg:text-6xl text-center lg:text-left font-bold">Books to freshen up your bookshelf</h1>
                        <Link to={'/listedbooks'}><button className="btn ml-28 lg:ml-0 bg-green-400 font-bold text-lg text-white mt-10">View The List</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;