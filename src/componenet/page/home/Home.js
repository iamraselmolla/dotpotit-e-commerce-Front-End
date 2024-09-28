import React from 'react';

const Home = () => {
    return (
        <div className="bg-gray-100">
            {/* Main Content */}
            <div className="container mx-auto p-6">
                {/* Breadcrumb */}
                <nav className="text-sm text-gray-500 mb-4">
                    <a href="/" className="hover:underline">Home</a> / <a href="/" className="hover:underline">Shop</a> / <span>Product Name</span>
                </nav>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Product Image */}
                    <div>
                        <img
                            src="https://via.placeholder.com/500"
                            alt="Product"
                            className="rounded-md w-full"
                        />
                    </div>

                    {/* Product Details */}
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Samsung Galaxy X6 Ultra LTE</h1>
                        <p className="text-gray-600">4G/128GB, Black Smartphone</p>
                        <div className="my-4">
                            <span className="text-2xl font-bold text-green-500">$609.00</span>
                            <span className="ml-4 text-gray-500 line-through">$650.00</span>
                        </div>
                        <p className="text-sm text-gray-700 mb-6">Free shipping on orders over $199!</p>
                        <div className="flex gap-4 mb-6">
                            <button className="btn btn-primary">Add to Cart</button>
                            <button className="btn btn-secondary">Buy Now</button>
                        </div>

                        {/* Color Options */}
                        <div className="mb-4">
                            <h4 className="font-semibold mb-2">Color</h4>
                            <div className="flex gap-2">
                                <button className="w-8 h-8 bg-blue-500 rounded-full"></button>
                                <button className="w-8 h-8 bg-black rounded-full"></button>
                                <button className="w-8 h-8 bg-gray-300 rounded-full"></button>
                            </div>
                        </div>

                        {/* Memory Options */}
                        <div>
                            <h4 className="font-semibold mb-2">Memory Size</h4>
                            <select className="select select-bordered w-full">
                                <option>128GB</option>
                                <option>256GB</option>
                                <option>512GB</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Frequently Bought Together */}
                <div className="my-8 bg-white p-4 shadow-md rounded-md">
                    <h3 className="font-bold text-lg mb-4">Frequently Bought Together</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Product"
                                className="w-16 h-16"
                            />
                            <div>
                                <p className="text-gray-700">Samsung Galaxy X6</p>
                                <span className="text-green-500 font-bold">$609.00</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Product"
                                className="w-16 h-16"
                            />
                            <div>
                                <p className="text-gray-700">Bose Wireless Earphones</p>
                                <span className="text-green-500 font-bold">$199.00</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Product"
                                className="w-16 h-16"
                            />
                            <div>
                                <p className="text-gray-700">Apple Watch Series 6</p>
                                <span className="text-green-500 font-bold">$329.00</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description and Reviews */}
                <div className="bg-white p-4 shadow-md rounded-md">
                    <h3 className="font-bold text-lg mb-4">Product Description</h3>
                    <p className="text-gray-600">
                        Built for ultra-fast performance, the Samsung Galaxy Tab S2 goes anywhere you go...
                    </p>
                    <button className="text-green-500 mt-4">Read More</button>
                </div>
            </div>


        </div>
    );
};

export default Home;
