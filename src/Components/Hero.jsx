import React from 'react';

const Hero = () => {
    return (
        <div className='mt-10'>
            <div className="hero h-[70vh] bg-base-200 rounded-3xl">
                <div className="hero-content p-16 flex-col lg:flex-row-reverse">
                    <img className='w-5/12' src="/src/assets/Book_10.jpg" />
                    <div className=''>
                        <h1 className=" text-6xl font-bold">Books to freshen up your bookshelf</h1>
                        <button className="btn bg-green-400 font-bold text-lg text-white mt-10">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;