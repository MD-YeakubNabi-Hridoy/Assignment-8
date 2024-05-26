import React from 'react';
import Nav from '../Components/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div >
            <div className='w-4/5 mx-auto'>
                <Nav></Nav>
            </div>

            <Outlet className='w-4/5 mx-auto'></Outlet>

            <div>
               <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;