import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';
import { BiDollar } from 'react-icons/bi';
import { BsFillPhoneFill } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className="bg-white text-black">
            <div className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {/* First Column */}
                    <div className="col-span-1">
                        <h6 className="text-lg font-bold mb-3 uppercase">Swoo - 1st NYC tech online market</h6>
                        <p className="uppercase">hotline 24/7</p>
                        <h4 className="text-2xl font-bold text-green-400 mb-3"> (025) 3686 25 16 </h4>
                        <p className="text-sm">257 Thatcher Road St, Brooklyn, Manhattan, NY 10092</p>
                        <a className="text-sm" href="mailto:contact@Swootechmart.com">contact@Swootechmart.com</a>
                        <div className="flex space-x-4 mt-4">
                            <a href="/"><FaTwitter /></a>
                            <a href="/"><FaFacebookF /></a>
                            <a href="/"><FaInstagram /></a>
                            <a href="/"><FaYoutube /></a>
                            <a href="/"><FaPinterest /></a>
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="col-span-1">
                        <h6 className="text-lg font-bold mb-3 uppercase">Top Categories</h6>
                        <ul className="space-y-1">
                            <li><a href="/">Laptops</a></li>
                            <li><a href="/">PC & Computers</a></li>
                            <li><a href="/">Cell Phones</a></li>
                            <li><a href="/">Tablets</a></li>
                            <li><a href="/">Gaming & VR</a></li>
                            <li><a href="/">Networks</a></li>
                            <li><a href="/">Cameras</a></li>
                            <li><a href="/">Sounds</a></li>
                            <li><a href="/">Office</a></li>
                        </ul>
                    </div>

                    {/* Third Column */}
                    <div className="col-span-1">
                        <h6 className="text-lg font-bold mb-3 uppercase">Company</h6>
                        <ul className="space-y-1">
                            <li><a href="/">About Swoo</a></li>
                            <li><a href="/">Contact</a></li>
                            <li><a href="/">Career</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Sitemap</a></li>
                            <li><a href="/">Store Locations</a></li>
                        </ul>
                    </div>

                    {/* Fourth Column */}
                    <div className="col-span-1">
                        <h6 className="text-lg font-bold mb-3 uppercase">Help Center</h6>
                        <ul className="space-y-1">
                            <li><a href="/">Customer Service</a></li>
                            <li><a href="/">Policy</a></li>
                            <li><a href="/">Terms & Conditions</a></li>
                            <li><a href="/">Track Order</a></li>
                            <li><a href="/">FAQs</a></li>
                            <li><a href="/">My Account</a></li>
                            <li><a href="/">Product Support</a></li>
                        </ul>
                    </div>

                    {/* Fifth Column */}
                    <div className="col-span-1">
                        <h6 className="text-lg font-bold mb-3 uppercase">Partner</h6>
                        <ul className="space-y-1">
                            <li><a href="/">Become Seller</a></li>
                            <li><a href="/">Affiliate</a></li>
                            <li><a href="/">Advertise</a></li>
                            <li><a href="/">Partnership</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-600 pt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center">
                        {/* Currency Selector */}
                        <div className="col-span-1 flex justify-center md:justify-start">
                            <div className="flex items-center space-x-2">
                                <BiDollar />
                                <div className="dropdown relative">
                                    <button className="bg-gray-700 rounded text-white p-2">
                                        USD
                                    </button>
                                    <div className="dropdown-content absolute hidden bg-gray-800 text-white mt-1 rounded shadow-lg">
                                        <a href="/" className="block px-4 py-2">USD</a>
                                        <a href="/" className="block px-4 py-2">EUR</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Subscription Section */}
                        <div className="col-span-2 md:col-span-3 text-center">
                            <h6 className="text-lg font-bold mb-3 uppercase">Subscribe & get <span className="text-red-400">10% off</span> for your first order</h6>
                            <div className="flex justify-center items-center">
                                <input type="email" placeholder="Enter your email address" className="p-2 rounded-l-md w-full sm:w-auto" />
                                <button className="bg-green-400 text-white p-2 rounded-r-md">Subscribe</button>
                            </div>
                            <p className="text-sm mt-2">By subscribing, you’re accepting our <a href="/" className="text-blue-300 underline">Policy</a></p>
                        </div>

                        {/* Mobile Site */}
                        <div className="col-span-1 text-center md:text-right mt-4 md:mt-0">
                            <a href="/" className="text-blue-300">
                                <BsFillPhoneFill className="inline" /> Mobile Site
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-6">
                    <p className="text-gray-400">© 2024 <strong className="text-black">Swoo</strong>. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
