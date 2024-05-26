import { useLoaderData } from "react-router-dom";
import Book from "../Components/Book";
import Hero from "../Components/Hero";

const Home = () => {

    const Books = useLoaderData();

    return (
        <div className='w-4/5 mx-auto'>
            <Hero></Hero>
            <h1 className='text-4xl font-bold text-center mt-16'>Books</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-10">
                {
                    Books.map( book =>  <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Home;