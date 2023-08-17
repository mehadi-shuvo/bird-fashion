import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <div className='sticky top-0 left-0'>
                <Navbar/>
            </div>
          <Outlet></Outlet>
        </div>
    );
};

export default Main;