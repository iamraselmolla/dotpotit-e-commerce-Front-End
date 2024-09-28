import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="py-10">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between px-6">
                {/* Brand Section */}
                <div className="flex flex-col mb-6 lg:mb-0">
                    <div className="flex items-center mb-4">
                        <img src="logo.png" alt="SWOO Logo" className="w-16 h-16" />
                        <span className="text-2xl font-bold ml-3">SWOO 1ST NYC TECH ONLINE MARKET</span>
                    </div>
                    <p className="text-sm text-gray-400">
                        Your trusted partner for tech solutions and online shopping.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col lg:flex-row lg:space-x-12 mb-6 lg:mb-0">
                    <div className="flex flex-col mb-4 lg:mb-0">
                        <h4 className="text-lg font-semibold mb-2">Categories</h4>
                        <Link to="/laptops" className="footer-link">Laptops</Link>
                        <Link to="/computers" className="footer-link">PC & Computers</Link>
                        <Link to="/cell-phones" className="footer-link">Cell Phones</Link>
                    </div>
                    <div className="flex flex-col mb-4 lg:mb-0">
                        <h4 className="text-lg font-semibold mb-2">Company</h4>
                        <Link to="/about" className="footer-link">About Siwon</Link>
                        <Link to="/contact" className="footer-link">Contact</Link>
                        <Link to="/career" className="footer-link">Career</Link>
                    </div>
                    <div className="flex flex-col mb-4 lg:mb-0">
                        <h4 className="text-lg font-semibold mb-2">Support</h4>
                        <Link to="/help-center" className="footer-link">Help Center</Link>
                        <Link to="/customer-service" className="footer-link">Customer Service</Link>
                        <Link to="/faq" className="footer-link">FAQ</Link>
                    </div>
                    <div className="flex flex-col mb-4 lg:mb-0">
                        <h4 className="text-lg font-semibold mb-2">Partnership</h4>
                        <Link to="/partner" className="footer-link">Partner</Link>
                        <Link to="/become-seller" className="footer-link">Become Seller</Link>
                        <Link to="/affiliate" className="footer-link">Affiliate</Link>
                    </div>
                </div>

                {/* Subscribe Section */}
                <div className="flex flex-col items-start mb-6 lg:mb-0">
                    <h4 className="text-lg font-semibold mb-2">Subscribe to our Newsletter</h4>
                    <p className="text-sm text-gray-400 mb-4">Get the latest updates and offers.</p>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-2 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 mb-2"
                    />
                    <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 mt-6">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <FaFacebook size={24} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <FaTwitter size={24} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <FaInstagram size={24} />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <FaYoutube size={24} />
                </a>
            </div>

            {/* Copyright Section */}
            <div className="text-center text-gray-400 text-sm mt-6">
                &copy; {new Date().getFullYear()} SWOO. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
