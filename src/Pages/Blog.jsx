import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='flex flex-col space-y-6 justify-center items-center h-[77vh]'>
            <h1 className='text-7xl text-green-600 font-bold'>Sorry!!</h1>
            <p className='text-2xl font-bold rounded-xl'>There is No Blogs in here</p>
            <Link to={'/'}><button className='px-4 py-2 text-white text-xl font-bold bg-green-500 rounded-lg'>Go Home</button></Link>
        </div>
    );
};

export default Blog;