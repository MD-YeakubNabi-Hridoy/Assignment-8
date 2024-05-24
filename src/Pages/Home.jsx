import Hero from "../Components/Hero";
import Nav from "../Components/Nav";

const Home = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <Nav></Nav>
            <Hero></Hero>
        </div>
    );
};

export default Home;