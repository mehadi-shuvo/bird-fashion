import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className=''>
            <div className='sticky top-0 z-20'>
                <Navbar />
            </div>
            <div className='z-10'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;