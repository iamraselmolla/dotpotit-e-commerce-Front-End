import React, { useContext, useState, useEffect } from 'react';
import { FaHeart, FaUserCircle, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../authcontext/AuthProvider';

const Header = () => {
    const { user, isAuthenticated, logout, wishlistNumber, cartItemCount, cartTotalPrice } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={`bg-white ${isScrolled ? 'shadow-md' : ''} transition-all duration-300 fixed top-0 left-0 right-0 z-50`}>
            {/* Top bar - hidden on mobile, visible on larger screens */}
            <div className="hidden md:block bg-gray-100">
                <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-4">
                        <span className="font-semibold bg-gray-200 px-3 py-1 rounded-full">Hotline 24/7</span>
                        <span className="font-bold">(025) 3886 25 16</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="/" className="hover:text-green-500">Sell on Swoo</a>
                        <a href="/" className="hover:text-green-500">Order Tracking</a>
                        <select className="bg-transparent border-none">
                            <option>USD</option>
                        </select>
                        <select className="bg-transparent border-none">
                            <option>Eng</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Main navigation */}
            <nav className={`container mx-auto px-4 py-3 md:py-4 flex justify-between items-center ${menuOpen ? 'bg-white' : ''}`}>
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xl">😊</span>
                    </div>
                    <Link to="/" className="hover:text-green-500 uppercase">
                        <span className="font-bold text-lg">SWOO TECH MART</span>
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

                {/* User Actions - always visible */}
                <div className="flex items-center space-x-4">
                    <Link to="/wishlist" className="relative">
                        <FaHeart className="w-6 h-6 text-red-400" />
                        {wishlistNumber > 0 && (
                            <span className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                                {wishlistNumber}
                            </span>
                        )}
                    </Link>

                    <div className="hidden md:flex items-center">
                        <FaUserCircle className="w-6 h-6 mr-2" />
                        <div className="text-xs">
                            {isAuthenticated ? (
                                <>
                                    <div>WELCOME, {user?.name}</div>
                                    <button onClick={logout} className="font-semibold hover:text-green-500">LOG OUT</button>
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

                    <Link to="/cart" className="flex items-center">
                        <FaShoppingCart className="w-6 h-6 mr-2" />
                        <div className="hidden md:block text-xs">
                            <div>CART</div>
                            <div className="font-semibold">${cartTotalPrice?.toFixed(2)}</div>
                        </div>
                        <span className="ml-1 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                            {cartItemCount}
                        </span>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button onClick={toggleMenu} className="lg:hidden">
                        {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 ease-in-out`}>
                <div className="container mx-auto px-4 py-4 space-y-4">
                    <Link to="/" className="block py-2 hover:text-green-500" onClick={toggleMenu}>HOME</Link>
                    <Link to="/products" className="block py-2 hover:text-green-500" onClick={toggleMenu}>PRODUCTS</Link>
                    <Link to="/add-product" className="block py-2 hover:text-green-500" onClick={toggleMenu}>Add Product</Link>
                    <Link to="/add-category" className="block py-2 hover:text-green-500" onClick={toggleMenu}>Add Category</Link>
                    {(isAuthenticated || user) && (
                        <Link to="/history" className="block py-2 hover:text-green-500" onClick={toggleMenu}>Order History</Link>
                    )}
                    <div className="pt-4 border-t">
                        {isAuthenticated ? (
                            <button onClick={logout} className="w-full text-left py-2 font-semibold hover:text-green-500">LOG OUT</button>
                        ) : (
                            <>
                                <Link to="/login" className="block py-2 font-semibold hover:text-green-500" onClick={toggleMenu}>LOG IN</Link>
                                <Link to="/register" className="block py-2 font-semibold hover:text-green-500" onClick={toggleMenu}>REGISTER</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;