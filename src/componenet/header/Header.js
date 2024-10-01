import React, { useContext } from 'react';
import { FaHeart, FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { AuthContext } from '../authcontext/AuthProvider';

const Header = () => {
    const { user, isAuthenticated, logout, wishlistNumber, cartItemCount, cartTotalPrice } = useContext(AuthContext); // Consume AuthContext


    return (
        <header className="bg-white shadow-sm">
            {/* Top bar */}
            <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
                <div className="flex items-center space-x-4">
                    <span className="font-semibold bg-gray-300 px-6 py-2 rounded-lg">Hotline 24/7</span>
                    <span className='font-extrabold'>(025) 3886 25 16</span>
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

            {/* Main navigation */}
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl">😊</span>
                    </div>
                    <span className="font-bold text-xl">SWOO TECH MART</span>
                </div>

                <div className="flex space-x-6">
                    <Link to="/" className="hover:text-green-500 uppercase">HOME</Link>
                    <Link to="/products" className="hover:text-green-500 uppercase">PRODUCTS</Link>
                    <Link to="/add-product" className="hover:text-green-500 uppercase">Add Product</Link>
                    <Link to="/add-category" className="hover:text-green-500 uppercase">Add Category</Link>
                    <Link to="/history" className="hover:text-green-500 uppercase">Order Hisotry</Link>
                </div>

                <div className="flex items-center space-x-4">
                    <Link to="/wishlist">
                        <div className="relative cursor-pointer">
                            <FaHeart className="w-10 h-10 text-red-400" />
                            {wishlistNumber > 0 && (
                                <span className="absolute top-[-8px] right-[-6px] bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                    {wishlistNumber}
                                </span>
                            )}
                        </div></Link>

                    <div className="flex items-center">
                        <FaUserCircle className="w-6 h-6 mr-2" />
                        <div className="text-xs">
                            {isAuthenticated ? (
                                <>
                                    <div>WELCOME, {user?.name}</div> {/* Display the user's name */}
                                    {console.log(user)}
                                    <button
                                        onClick={logout}
                                        className="font-semibold hover:text-green-500"
                                    >
                                        LOG OUT
                                    </button> {/* Logout button */}
                                </>
                            ) : (
                                <>
                                    <div>WELCOME</div>
                                    <div className="font-semibold">
                                        <Link to="/login" className="hover:text-green-500">LOG IN</Link> /
                                        <Link to="/register" className="hover:text-green-500">REGISTER</Link>
                                    </div> {/* Log In / Register links */}
                                </>
                            )}
                        </div>
                    </div>

                    <Link to={"/cart"}>
                        <div className="flex items-center">
                            <FaShoppingCart className="w-6 h-6 mr-2" />
                            <div className="text-xs">
                                <div>CART</div>
                                <div className="font-semibold">${cartTotalPrice?.toFixed(2)}</div>
                            </div>
                            <span className="ml-2 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">{cartItemCount}</span>
                        </div></Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
