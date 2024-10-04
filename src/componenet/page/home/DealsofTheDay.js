import React from 'react';
import { FaAngleRight, FaHeart, FaEye, FaShoppingCart, FaPlus } from 'react-icons/fa';

const DealsOfTheDay = () => {
    return (
        <section className="mx-auto py-8 px-4">
            <div className="flex flex-wrap -mx-3">
                {/* Main Deals Section */}
                <div className="w-full lg:w-9/12 px-3">
                    <div className="mt-3">
                        <div className="flex bg-[#1aba1a] px-4 rounded-lg text-white py-6 justify-between items-center mb-4">
                            <h6 className="text-lg font-bold uppercase">Deals of the Day</h6>
                            <a href="/" className="text-xs uppercase text-white hover:underline">
                                View All <FaAngleRight className="inline ml-1" />
                            </a>
                        </div>

                        {/* Deals Content */}
                        <div className="p-8 rounded bg-white shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Left Side: Product Image and Icons */}
                                <div className="flex flex-col justify-center">
                                    <div className="flex justify-between mb-4">
                                        <div className='bg-[#1aba1a] text-white px-3 rounded-xl'>
                                            <small className="text-xs uppercase">Save</small>
                                            <h6 className="text-lg">$199.00</h6>
                                        </div>
                                        <div className="flex space-x-2">
                                            <span className="cursor-pointer">
                                                <FaPlus />
                                            </span>
                                            <div className="flex space-x-2">
                                                <span className="cursor-pointer">
                                                    <FaEye />
                                                </span>
                                                <span className="cursor-pointer">
                                                    <FaShoppingCart />
                                                </span>
                                                <span className="cursor-pointer text-red-600">
                                                    <FaHeart />
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product Image */}
                                    <div className="swiper-container gallery-thumbs">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide mb-4">
                                                <div className="img">
                                                    <img src="images/phone.png" alt="Product" className="w-full h-auto object-cover rounded-lg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Product Info */}
                                <div className="flex flex-col justify-center">
                                    <div className="info">
                                        <div className="flex items-center mb-2">
                                            <div className="flex space-x-1">
                                                {[...Array(5)].map((_, index) => (
                                                    <span key={index}>
                                                        <i className="la la-star text-yellow-400" />
                                                    </span>
                                                ))}
                                            </div>
                                            <span className="text-xs">(12)</span>
                                        </div>
                                        <h4 className="text-lg font-bold">
                                            <a href="/" className="hover:underline">
                                                Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
                                            </a>
                                        </h4>
                                        <div className="mt-5">
                                            <h3 className="text-lg text-red-600 font-bold">
                                                $569.00 <span className="text-gray-600 line-through text-sm">$759.00</span>
                                            </h3>
                                        </div>
                                        <ul className="text-sm mt-3 list-disc list-inside">
                                            <li>Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
                                            <li>DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
                                            <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
                                        </ul>
                                        <div className="mt-3">
                                            <a href="#" className="text-green-600 text-sm">Free Shipping</a>
                                            <a href="#" className="text-red-600 text-sm ml-2">Free Gift</a>
                                        </div>

                                        {/* Countdown Timer */}
                                        <div className="mt-5">
                                            <span className="text-sm">Hurry up! Promotion will expire in</span>
                                            <div className="flex mt-2 space-x-4">
                                                <div className="text-center">
                                                    <span id="days" className="block text-lg font-bold">-367</span>
                                                    <small>d</small>
                                                </div>
                                                <div className="text-center">
                                                    <span id="hours" className="block text-lg font-bold">-14</span>
                                                    <small>h</small>
                                                </div>
                                                <div className="text-center">
                                                    <span id="minutes" className="block text-lg font-bold">-29</span>
                                                    <small>m</small>
                                                </div>
                                                <div className="text-center">
                                                    <span id="seconds" className="block text-lg font-bold">-36</span>
                                                    <small>s</small>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="mt-5 pt-5 border-t">
                                            <div className="relative">
                                                <div className="h-2 bg-gray-300 rounded">
                                                    <div className="h-full bg-green-600 rounded" style={{ width: '40%' }} />
                                                </div>
                                                <p className="text-xs text-gray-600 mt-2">Sold: <strong className="text-black">26/75</strong></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech News Sidebar */}
                <div className="w-full lg:w-3/12 px-3">
                    <div className="p-8 rounded bg-white mt-3 shadow-lg">
                        <div className="flex justify-between items-center mb-2">
                            <h6 className="text-lg font-bold uppercase">Tech News</h6>
                            <div className="flex space-x-2">
                                <div className="swiper-button-next" role="button" aria-label="Next slide"></div>
                                <div className="swiper-button-prev" role="button" aria-label="Previous slide"></div>
                            </div>
                        </div>

                        {/* Articles */}
                        <div className="overflow-hidden">
                            <div className="swiper-wrapper">
                                {Array(4).fill(null).map((_, index) => (
                                    <div key={index} className="swiper-slide mb-4">
                                        <div className="flex">
                                            <a href="/" className="flex items-center space-x-2">
                                                <div className="img">
                                                    <img src={`images/blog/blog${index + 1}.jpg`} alt="" className="w-16 h-16 object-cover rounded-full" />
                                                </div>
                                                <div>
                                                    <strong className="block text-sm font-bold">How to upgrade HDD for your PC by yourself</strong>
                                                    <small className="text-xs text-gray-600">25 Minutes ago</small>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-3">
                            <a href="/" className="text-xs text-blue-600 hover:underline">See All Articles <FaAngleRight className="inline ml-1" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DealsOfTheDay;
