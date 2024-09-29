import React from 'react';

const Hero = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* First Column - 25% width */}
                <div className="md:col-span-1 bg-white p-4 rounded-lg shadow">
                    <h2 className="text-red-600 font-bold text-xl mb-4">SALE 40% OFF</h2>
                    <ul className="space-y-2">
                        {['Laptops', 'PC & Computers', 'Cell Phones', 'Tablets', 'Gaming & VR', 'Networking', 'Cameras', 'Sounds', 'Office', 'Storage, USB', 'Accessories', 'Clearance'].map((category, index) => (
                            <li key={index} className="hover:text-blue-600 cursor-pointer">{category}</li>
                        ))}
                    </ul>
                </div>

                {/* Second Column (Middle) - 50% width with background image */}
                <div className="md:col-span-2">
                    {/* Main Image with Overlay Text */}
                    <div
                        className="bg-gray-100 p-4 rounded-lg relative flex items-center justify-center"
                        style={{
                            backgroundImage: 'url("/images/hero.png")', // Update with your image path
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '300px', // Adjust height as needed
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
                    <div className="flex gap-4 justify-between mt-4">
                        <div className="relative h-36 w-full">
                            <img src="images/hero2.png" alt="Image 2" className="object-cover h-full w-full rounded-lg" />
                            <div className="absolute mt-8 inset-0 flex flex-col pl-6 rounded-lg text-white">
                                <h4 className="text-lg lg:w-3/5 text-black font-bold">Sono Playgo 5
                                    from <span className='text-green-500'>$569</span></h4>
                                <a href="#" className="text-blue-600 hover:text-blue-800 underline-none border-none">
                                    Discover Now
                                </a>
                            </div>
                        </div>
                        <div className="relative h-36 w-full">
                            <img src="images/hero1.png" alt="Image 1" className="object-cover h-full w-full rounded-lg" />
                            <div className="absolute inset-0 flex flex-col pl-6 rounded-lg text-white">
                                <h4 className="text-lg font-bold">Smart Watches</h4>
                                <a href="#" className="text-blue-600 hover:text-blue-800 underline-none border-none">
                                    View More
                                </a>
                            </div>
                        </div>


                    </div>
                </div>

                {/* Third Column - 25% width */}
                <div className="md:col-span-1 bg-white p-4 rounded-lg shadow">
                    <div className="flex items-center">
                        <h3 className="ml-2 font-bold">Exclusive Deals</h3>
                    </div>
                    <p className="text-sm mt-2">Grab the best offers on our newest gadgets</p>
                </div>
            </div>

            {/* Additional Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-4 rounded-lg shadow flex items-center">
                    <img src="/api/placeholder/100/100" alt="Sono Playgo 5" className="w-1/3" />
                    <div className="ml-4">
                        <h3 className="font-bold">Sono Playgo 5</h3>
                        <p className="text-green-600">from $569</p>
                        <button className="btn btn-sm btn-outline mt-2">DISCOVER NOW</button>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow flex items-center">
                    <img src="/api/placeholder/100/100" alt="Logitek Bluetooth Keyboard" className="w-1/3" />
                    <div className="ml-4">
                        <h3 className="font-bold">Logitek Bluetooth Keyboard</h3>
                        <p>Best for all devices</p>
                        <div className="rating rating-sm mt-2">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
