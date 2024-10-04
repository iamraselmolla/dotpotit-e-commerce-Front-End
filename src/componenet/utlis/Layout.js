import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';

const Layout = () => {
    return (
        <main>
            <Header />
            <div className="bg-gray-300 mt-24">
                <Outlet />
            </div>
            <Footer />
        </main>
    );
};

export default Layout;