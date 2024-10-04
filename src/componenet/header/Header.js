import React, { useContext, useState } from 'react';
import { FaHeart, FaUserCircle, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'; // FaBars for menu icon, FaTimes for close icon
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { AuthContext } from '../authcontext/AuthProvider';

const Header = () => {
    const { user, isAuthenticated, logout, wishlistNumber, cartItemCount, cartTotalPrice } = useContext(AuthContext); // Consume AuthContext
    const [menuOpen, setMenuOpen] = useState(false); // State to toggle mobile menu

    // Function to toggle menu open/close
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-white shadow-sm">
            {/* Top bar */}
            <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm lg:text-base">
                <div className="flex items-center space-x-4">
                    <span className="font-semibold bg-gray-300 px-2 py-1 lg:px-6 lg:py-2 rounded-lg">Hotline 24/7</span>
                    <span className="font-extrabold text-xs lg:text-base">(025) 3886 25 16</span>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="/" className="hover:text-green-500 hidden sm:block">Sell on Swoo</a>
                    <a href="/" className="hover:text-green-500 hidden sm:block">Order Tracking</a>
                    <select className="bg-transparent border-none text-xs lg:text-base">
                        <option>USD</option>
                    </select>
                    <select className="bg-transparent border-none text-xs lg:text-base">
                        <option>Eng</option>
                    </select>
                </div>
            </div>

            {/* Main navigation */}
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xl lg:text-2xl">😊</span>
                    </div>
                    <Link to="/" className="hover:text-green-500 uppercase">
                        <span className="font-bold text-lg lg:text-xl">SWOO TECH MART</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex space-x-6">
                    <Link to="/" className="hover:text-green-500 uppercase">HOME</Link>
                    <Link to="/products" className="hover:text-green-500 uppercase">PRODUCTS</Link>
                    <Link to="/add-product" className="hover:text-green-500 uppercase">Add Product</Link>
                    <Link to="/add-category" className="hover:text-green-500 uppercase">Add Category</Link>
                    {(isAuthenticated || user) && <Link to="/history" className="hover:text-green-500 uppercase">Order History</Link>}
                </div>

                {/* Mobile Hamburger Menu Icon */}
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        {menuOpen ? <FaTimes className="w-8 h-8" /> : <FaBars className="w-8 h-8" />}
                    </button>
                </div>

                <div className="flex items-center space-x-4">
                    <Link to="/wishlist">
                        <div className="relative cursor-pointer">
                            <FaHeart className="w-6 h-6 lg:w-10 lg:h-10 text-red-400" />
                            {wishlistNumber > 0 && (
                                <span className="absolute top-[-6px] right-[-6px] bg-green-500 text-white rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center text-xs">
                                    {wishlistNumber}
                                </span>
                            )}
                        </div>
                    </Link>

                    <div className="flex items-center">
                        <FaUserCircle className="w-6 h-6 lg:w-8 lg:h-8 mr-2" />
                        <div className="text-xs lg:text-sm">
                            {isAuthenticated ? (
                                <>
                                    <div>WELCOME, {user?.name}</div>
                                    <button
                                        onClick={logout}
                                        className="font-semibold hover:text-green-500"
                                    >
                                        LOG OUT
                                    </button>
                                </>
                            ) : (
                                <>
                                    <div>WELCOME</div>
                                    <div className="font-semibold">
                                        <Link to="/login" className="hover:text-green-500">LOG IN</Link> /
                                        <Link to="/register" className="hover:text-green-500">REGISTER</Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    <Link to="/cart">
                        <div className="flex items-center">
                            <FaShoppingCart className="w-6 h-6 lg:w-8 lg:h-8 mr-2" />
                            <div className="text-xs lg:text-sm">
                                <div>CART</div>
                                <div className="font-semibold">${cartTotalPrice?.toFixed(2)}</div>
                            </div>
                            <span className="ml-2 bg-green-500 text-white rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center text-xs">
                                {cartItemCount}
                            </span>
                        </div>
                    </Link>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md py-4">
                    <Link to="/" className="block py-2 px-4 hover:bg-gray-100" onClick={toggleMenu}>HOME</Link>
                    <Link to="/products" className="block py-2 px-4 hover:bg-gray-100" onClick={toggleMenu}>PRODUCTS</Link>
                    <Link to="/add-product" className="block py-2 px-4 hover:bg-gray-100" onClick={toggleMenu}>Add Product</Link>
                    <Link to="/add-category" className="block py-2 px-4 hover:bg-gray-100" onClick={toggleMenu}>Add Category</Link>
                    {(isAuthenticated || user) && (
                        <Link to="/history" className="block py-2 px-4 hover:bg-gray-100" onClick={toggleMenu}>Order History</Link>
                    )}
                </div>
            )}
        </header>
    );
};

export default Header;
