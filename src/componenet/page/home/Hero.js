import React from 'react';

const Hero = () => {
    return (
        <div className="mx-auto p-4">
            {/* Desktop Layout */}
            <div className="w-full lg:flex lg:space-x-4">
                {/* First Column - 25% width */}
                <div className="bg-white lg:mb-3 mb-3 p-4 pl-8 rounded-lg w-full lg:w-1/3 shadow">
                    <h2 className="text-red-600 md:text-center font-bold text-xl mb-4">SALE 40% OFF</h2>
                    <ul className="flex lg:flex-col md:flex-row md:flex-wrap md:gap-2.5 sm:flex-wrap flex-wrap md:justify-center gap-2.5">
                        {['Laptops', 'PC & Computers', 'Cell Phones', 'Tablets', 'Gaming & VR', 'Networking', 'Cameras', 'Sounds', 'Office', 'Storage, USB', 'Accessories', 'Clearance'].map((category, index) => (
                            <li key={index} className="hover:text-blue-600 cursor-pointer">{category}</li>
                        ))}
                    </ul>
                </div>

                {/* Second Column (Middle) - 66% width with background image */}
                <div className="lg:mb-3 mb-3 rounded-lg w-full lg:w-2/3 shadow">
                    {/* Main Image with Overlay Text */}
                    <div
                        className="bg-gray-100 p-4 rounded-lg relative flex items-center justify-center"
                        style={{
                            backgroundImage: 'url("/images/hero.png")', // Update with your image path
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '320px', // Adjust height as needed
                        }}
                    >
                        {/* Overlay Content */}
                        <div className="bg-opacity-50 w-full h-full p-6 pl-20 rounded-lg text-white">
                            <h2 className="text-3xl font-bold mb-2">Noise Cancelling Headphone</h2>
                            <p className="mb-2">Boso Over-Ear Headphone</p>
                            <p className="mb-4">WiFi, Voice Assistant, Low Latency Game Mode</p>
                            <button className="btn btn-white border-none underline-none">BUY NOW</button>
                        </div>
                    </div>

                    {/* Images Below with Overlay Headline and Button */}
                    <div className="flex flex-col md:flex-row gap-4 justify-between mt-4">
                        {/* First Child */}
                        <div className="relative h-36 w-full md:w-1/2">
                            <img src="images/hero2.png" alt="Image 2" className="object-cover h-full w-full rounded-lg" />
                            <div className="absolute mt-6 inset-0 flex flex-col pl-6 rounded-lg text-white">
                                <h4 className="text-lg w-1/2 text-black font-bold">Sono Playgo 5 from <span className='text-green-500'>$569</span></h4>
                                <a href="#" className="text-blue-600 hover:text-blue-800 underline-none border-none">Discover Now</a>
                            </div>
                        </div>
                        {/* Second Child */}
                        <div className="relative h-36 w-full md:w-1/2">
                            <img src="images/hero1.png" alt="Image 1" className="object-cover h-full w-full rounded-lg" />
                            <div className="absolute mt-6 inset-0 flex flex-col pl-6 rounded-lg text-white">
                                <h4 className="text-lg w-1/2 text-black font-bold">Logitek Bluetooth <span className='text-yellow-400'>Keyboard</span></h4>
                                <a href="#" className="text-blue-600 hover:text-blue-800 underline-none border-none">View More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-4 w-full lg:w-1/3 rounded-lg shadow">
                    {/* Parent div containing both image divs with flexbox for side-by-side layout */}
                    <div className="flex flex-col md:flex-row lg:flex-col gap-4 w-full">
                        {/* First image div with content aligned to the right */}
                        <div className="h-52 sm:mb-3 relative flex w-full md:w-1/2 lg:w-full items-center justify-end rounded-lg shadow-lg"
                            style={{
                                backgroundImage: 'url("/images/hero3.png")', // Update with your image path
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {/* Overlay content with full width */}
                            <div className="bg-opacity-50 p-6 text-right w-full">
                                <p className="mb-4">Xomia</p>
                                <h2 className="text-lg mb-5 font-bold mt-2">Sport Water Resistance Watch</h2>
                                <button className="bg-black text-white py-2 px-4 rounded-lg">Shop Now</button>
                            </div>
                        </div>

                        {/* Second image div with content aligned to the left */}
                        <div className="h-52 w-full md:w-1/2 lg:w-full relative flex items-center justify-start rounded-lg shadow-lg"
                            style={{
                                backgroundImage: 'url("/images/hero4.png")', // Update with your image path
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {/* Overlay content with full width */}
                            <div className="w-full bg-opacity-50 p-6 text-white text-left">
                                <h2 className="text-2xl font-bold mb-2">OKODo hero 11+ black</h2>
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
