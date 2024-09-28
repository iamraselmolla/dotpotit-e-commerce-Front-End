import React from 'react';

const Header = () => {
    return (
        <header className="bg-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold text-green-600">SWOO TECH MART</div>
                <nav className="space-x-4">
                    <a href="/" className="text-gray-700">Home</a>
                    <a href="/" className="text-gray-700">Products</a>
                    <a href="/" className="text-gray-700">Contact</a>
                </nav>
                <div>
                    <span className="text-gray-600">Call: (025) 3686 25 16</span>
                </div>
            </div>
        </header>
    );
};

export default Header;