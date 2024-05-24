import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {

    const bookDetails = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = bookDetails.find(book => book.bookId === id);
    const { bookName, author, image, rating, category, tags, review, totalPages, publisher, yearOfPublishing } = book;
    return (
        <div className='mt-16'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='bg-slate-100 p-10 mx-auto rounded-2xl'>
                    <img className='w-72 h-96' src={image} alt="" />
                </div>
                <div>
                    <h1 className='text-5xl font-bold '>{bookName}</h1>
                    <h4 className='text-lg font-semibold my-4'>By: {author}</h4>
                    <h4 className='font-semibold border-t-2 border-b-2 border-gray-100 py-2'>{category}</h4>
                    <p className='my-5'> <span className='text-lg font-semibold'>Review:</span> {review}</p>
                    <div className='flex gap-8 my-5 items-center'>
                        <span className='text-lg font-semibold'>Tags:</span>
                        <span className="block text-xs font-bold tracking-widest uppercase border-2 text-green-500 px-2 py-3 rounded-xl bg-slate-50">{tags[0]}</span>
                        <span className="block text-xs font-bold tracking-widest uppercase border-2 text-green-500 px-2 py-3 rounded-xl bg-slate-50">{tags[1]}</span>
                    </div>
                    <hr className='my-7' />
                    <div className='mb-5'>
                        <div className='grid grid-cols-2'>
                            <p className='text-lg '>Number of Pages :</p>
                            <p className='text-lg '>{totalPages}</p>
                        </div>
                        <div className='grid grid-cols-2'>
                            <p className='text-lg '>Publisher :</p>
                            <p className='text-lg '>{publisher}</p>
                        </div>
                        <div className='grid grid-cols-2'>
                            <p className='text-lg '>Year of Publishing : </p>
                            <p className='text-lg '>{yearOfPublishing}</p>
                        </div>
                        <div className='grid grid-cols-2'>
                            <p className='text-lg '>Rating :</p>
                            <p className='text-lg '>{rating}</p>
                        </div>
                    </div>

                    <div>
                        <button className='px-5 py-2 text-lg font-semibold border-2 rounded-xl mr-5'>Read</button>
                        <button className='px-5 py-2 text-lg text-white font-semibold bg-blue-400 rounded-xl'>Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;