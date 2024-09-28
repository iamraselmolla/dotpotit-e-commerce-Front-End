import React, { useState } from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className="container mx-auto bg-white rounded-lg shadow-xl p-6">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 lg:pr-8 mb-4 lg:mb-0">
                        <img
                            src="https://via.placeholder.com/300"
                            alt="Product"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="lg:w-1/2 lg:pl-8">
                        <h2 className="text-4xl font-bold">Somseng Galatero X6 Ultra LTE 4G/128GB, Black</h2>
                        <h3 className="text-xl font-semibold mt-2">Smartphone</h3>
                        <p className="text-md mt-4">
                            Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core<br />
                            DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory<br />
                            Commanding Power Design: Twin 16+1+2 Phases Digital VRM
                        </p>
                        <div className="mt-4">
                            <span className="bg-blue-500 text-white px-2 py-1 rounded-md">NEW</span>
                            <span className="text-2xl font-bold ml-2">TOTAL PRICE: $609.00</span>
                        </div>
                        <div className="mt-6 flex items-center">
                            <div className="flex items-center border rounded-md overflow-hidden">
                                <button
                                    onClick={decrementQuantity}
                                    className="bg-gray-200 px-3 py-2 border-r-0 rounded-l-md"
                                    disabled={quantity <= 1}
                                >
                                    -
                                </button>
                                <span className="px-4">{quantity}</span>
                                <button
                                    onClick={incrementQuantity}
                                    className="bg-gray-200 px-3 py-2 border-l-0 rounded-r-md"
                                >
                                    +
                                </button>
                            </div>
                            <button className="bg-green-500 text-white px-4 py-2 rounded-md ml-4 flex items-center">
                                <FaShoppingCart className="mr-2" />
                                Add to Cart
                            </button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded-md ml-2 flex items-center">
                                <FaHeart className="mr-2" />
                                Wishlist
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="text-2xl font-bold">Product Details</h2>
                    <p className="text-md mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
