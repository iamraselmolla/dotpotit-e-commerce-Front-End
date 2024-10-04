import React from 'react';

const Hero = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* First Column - 25% width, stacks on mobile */}
                <div className="md:col-span-1 bg-white p-4 pl-8 rounded-lg shadow">
                    <h2 className="text-red-600 font-bold text-lg md:text-xl mb-4">SALE 40% OFF</h2>
                    <ul className="space-y-2">
                        {['Laptops', 'PC & Computers', 'Cell Phones', 'Tablets', 'Gaming & VR', 'Networking', 'Cameras', 'Sounds', 'Office', 'Storage, USB', 'Accessories', 'Clearance'].map((category, index) => (
                            <li key={index} className="hover:text-blue-600 cursor-pointer text-sm md:text-base">{category}</li>
                        ))}
                    </ul>
                </div>

                {/* Second Column (Middle) - 50% width with background image */}
                <div className="md:col-span-2">
                    {/* Main Image with Overlay Text */}
                    <div
                        className="bg-gray-100 p-4 rounded-lg relative flex items-center justify-center"
                        style={{
                            backgroundImage: 'url("/images/hero.png")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '240px', // Adjust for mobile
                        }}
                    >
                        {/* Overlay Content */}
                        <div className="bg-opacity-60 w-full h-full p-4 md:p-6 rounded-lg text-white flex flex-col items-start justify-center">
                            <h2 className="text-xl md:text-3xl font-bold mb-1 md:mb-2">Noise Cancelling Headphone</h2>
                            <p className="text-sm md:text-base mb-1">Boso Over-Ear Headphone</p>
                            <p className="text-sm md:text-base mb-3">WiFi, Voice Assistant, Low Latency Game Mode</p>
                            <button className="bg-white text-black py-2 px-4 rounded-md text-sm md:text-base">BUY NOW</button>
                        </div>
                    </div>

                    {/* Images Below with Overlay Headline and Button */}
                    <div className="flex flex-col md:flex-row gap-4 justify-between mt-4">
                        <div className="relative h-40 w-full md:h-36">
                            <img src="images/hero2.png" alt="Image 2" className="object-cover h-full w-full rounded-lg" />
                            <div className="absolute inset-0 flex flex-col pl-4 pr-2 md:pl-6 rounded-lg justify-center">
                                <h4 className="text-black font-bold text-sm md:text-lg">Sono Playgo 5 <span className='text-green-500'>$569</span></h4>
                                <a href="#" className="text-blue-600 text-xs md:text-base hover:text-blue-800 underline-none">
                                    Discover Now
                                </a>
                            </div>
                        </div>
                        <div className="relative h-40 w-full md:h-36">
                            <img src="images/hero1.png" alt="Image 1" className="object-cover h-full w-full rounded-lg" />
                            <div className="absolute inset-0 flex flex-col pl-4 pr-2 md:pl-6 rounded-lg justify-center">
                                <h4 className="text-black font-bold text-sm md:text-lg">Logitek Bluetooth <span className='text-yellow-400'>Keyboard</span></h4>
                                <a href="#" className="text-blue-600 text-xs md:text-base hover:text-blue-800 underline-none">
                                    View More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Third Column - 25% width, stacks on mobile */}
                <div className="md:col-span-1 bg-white p-4 rounded-lg shadow">
                    <div className="space-y-4 md:space-y-6">
                        {/* First image div with content aligned to the right */}
                        <div
                            className="h-40 md:h-52 relative flex items-center justify-end rounded-lg shadow-lg"
                            style={{
                                backgroundImage: 'url("/images/hero3.png")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="w-2/3 bg-opacity-50 p-4 md:p-6 text-right">
                                <p className="text-xs md:text-sm mb-2 md:mb-4">Xomia</p>
                                <h2 className="text-base md:text-lg font-bold">Sport Water<br />Resistance Watch</h2>
                                <button className="bg-black text-white py-2 px-4 rounded-lg mt-2">Shop Now</button>
                            </div>
                        </div>

                        {/* Second image div with content aligned to the left */}
                        <div
                            className="h-40 md:h-52 relative flex items-center justify-start rounded-lg shadow-lg"
                            style={{
                                backgroundImage: 'url("/images/hero4.png")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="w-1/2 bg-opacity-50 p-4 md:p-6 text-left">
                                <h2 className="text-base md:text-2xl font-bold">OKODo hero 11+ black</h2>
                                <p className="text-green-500 font-bold">from $160</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
