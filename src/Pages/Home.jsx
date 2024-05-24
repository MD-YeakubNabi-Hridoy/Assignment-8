import { useLoaderData } from "react-router-dom";
import Book from "../Components/Book";
import Hero from "../Components/Hero";

const Home = () => {

    const Books = useLoaderData();

    return (
        <div>
            <Hero></Hero>
            <h1 className='text-4xl font-bold text-center mt-10'>Books</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {
                    Books.map( book => <Book key={Books.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Home;