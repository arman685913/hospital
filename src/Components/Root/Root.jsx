import React from 'react';
import Nav from '../NavBar/Nav';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='gFont bg-base-300'>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;