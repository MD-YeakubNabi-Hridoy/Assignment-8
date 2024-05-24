import React from 'react';
import Nav from '../Components/Nav';
import Home from '../Pages/Home';
import ListedBooks from '../Pages/ListedBooks';
import ReadChart from '../Pages/ReadChart';
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