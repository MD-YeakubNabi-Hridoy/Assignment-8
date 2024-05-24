import React from 'react';
import Nav from '../Components/Nav';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <div>
                <Nav></Nav>
            </div>

            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;