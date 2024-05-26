import { CiLocationOn } from "react-icons/ci";
import { MdPeopleAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiPagesFill } from "react-icons/ri";



const ReadListCard = ({ readCard }) => {

    const { bookId, image, bookName, author, tags, publisher, totalPages, category, rating, yearOfPublishing } = readCard;
    return (
        <div className="mb-8">
            <div className="flex p-6 space-y-4 gap-10 border border-gray-300 shadow-lg rounded-2xl">
                <div className="bg-gray-100 p-6 rounded-xl">
                    <img className=" object-cover w-52 h-60" src={image} alt="Polaroid camera" />
                </div>
                <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="">
                            <h3 className="text-4xl font-bold leading-snug">{bookName}</h3>
                            <p className="text-lg text-gray-800 mt-2">{author}</p>
                            <div className='flex gap-8 my-5 items-center'>
                                <span className='text-lg font-semibold'>Tags:</span>
                                <span className="block text-lg tracking-widest text-green-500 px-3 py-2 rounded-xl bg-slate-100">{tags[0]}</span>
                                <span className="block text-lg tracking-widest text-green-500 px-3 py-2 rounded-xl bg-slate-100">{tags[1]}</span>
                                <div className="flex items-center gap-1">
                                    <CiLocationOn className="text-2xl" />
                                    <p className="text-lg text-black"> Year Of Publishing: {yearOfPublishing}</p>
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="flex items-center gap-1">
                                    <MdPeopleAlt className="text-2xl" />
                                    <span className="text-lg text-black">Publisher : {publisher}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <RiPagesFill className="text-2xl" />
                                    <span className="text-lg text-black">Pages : {totalPages}</span>
                                </div>
                            </div>
                            <hr className="my-6 border border-gray-300"/>
                            <div className="flex gap-5">
                                <span className="px-4 py-2 bg-blue-100 rounded-xl text-lg text-blue-600 font-semibold">Category : {category}</span>
                                <span className="px-4 py-2 bg-pink-200 rounded-xl text-lg text-pink-600 font-semibold">Rating : {rating}</span>
                                <Link to={`/book/${bookId}`}> <button className="px-3 py-2 bg-green-500 font-bold text-white rounded-xl text-lg">View Details </button></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadListCard;