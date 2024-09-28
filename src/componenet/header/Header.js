import React from 'react';
import { FaPhoneAlt, FaHeart, FaUserCircle, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="bg-white shadow-sm">
            {/* Top bar */}
            <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
                <div className="flex items-center space-x-4">
                    <span className="font-semibold">Hotline 24/7</span>
                    <span>(025) 3886 25 16</span>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="#" className="hover:text-green-500">Sell on Swoo</a>
                    <a href="#" className="hover:text-green-500">Order Tracking</a>
                    <select className="bg-transparent border-none">
                        <option>USD</option>
                    </select>
                    <select className="bg-transparent border-none">
                        <option>Eng</option>
                    </select>
                </div>
            </div>

            {/* Main navigation */}
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl">😊</span>
                    </div>
                    <span className="font-bold text-xl">SWOO TECH MART</span>
                </div>

                <div className="flex space-x-6">
                    <a href="#" className="hover:text-green-500">HOMES</a>
                    <a href="#" className="hover:text-green-500">PAGES</a>
                    <a href="#" className="hover:text-green-500">PRODUCTS</a>
                    <a href="#" className="hover:text-green-500">CONTACT</a>
                </div>

                <div className="flex items-center space-x-4">
                    <FaHeart className="w-6 h-6" />
                    <div className="flex items-center">
                        <FaUserCircle className="w-6 h-6 mr-2" />
                        <div className="text-xs">
                            <div>WELCOME</div>
                            <div className="font-semibold">LOG IN / REGISTER</div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <FaShoppingCart className="w-6 h-6 mr-2" />
                        <div className="text-xs">
                            <div>CART</div>
                            <div className="font-semibold">$1,689.00</div>
                        </div>
                        <span className="ml-2 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">5</span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;