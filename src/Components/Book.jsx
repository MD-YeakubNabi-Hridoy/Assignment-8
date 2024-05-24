import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Books = ({ book }) => {

    const {bookId, bookName, author, image, rating, category, tags } = book;

    return (
        <div className='mt-10 mx-auto'>
            <Link to={`/book/${bookId}`}>
               <div  className=" p-6 rounded-2xl border-2 w-96 ">
                <div className='flex justify-center bg-slate-100 rounded-xl p-6'>
                    <img src={image} alt="" className=" object-cover object-center w-52 rounded-md h-72" />
                </div>
                <div className="mt-6 mb-2 flex  gap-4">
                    <span className="block text-xs font-bold tracking-widest uppercase border-2 text-green-500 px-2 py-3 rounded-xl bg-slate-50">{tags[0]}</span>
                    <span className="block text-xs font-bold tracking-widest uppercase border-2 text-green-500 px-2 py-3 rounded-xl bg-slate-50">{tags[1]}</span>
                </div>
                <h2 className="text-3xl font-bold  mt-3">{bookName}</h2>
                <p className="my-4 text-xl font-semibold">By : {author}</p>
                <hr className='border-2 border-dashed border-slate-300 my-7'/>

                <div className='flex justify-between'>
                    <h1 className='text-lg font-semibold'>{category}</h1>
                    <div className='flex gap-1 items-center'>
                        <h3 className='text-lg font-medium'>{rating}</h3>
                        <FaRegStar />
                    </div>
                </div>
               </div>
            </Link>
        </div>
    );
};

export default Books;