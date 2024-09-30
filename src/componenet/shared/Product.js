import React from 'react';
import { Link } from 'react-router-dom';
import { BiHeart } from 'react-icons/bi';
import { CgShoppingCart } from 'react-icons/cg';

const Product = ({ product }) => {
    return (
        <div className="relative bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <figure className="px-6 pt-6">
                <img
                    src={product?.images[0]} // Optional chaining
                    alt={product?.name} // Optional chaining
                    className="rounded-lg object-cover h-48 w-full"
                />
            </figure>
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">{product?.name}</h2> {/* Optional chaining */}
                <p className="text-xl font-bold text-primary mt-2">
                    ${product?.price?.min.toFixed(2)} - {product?.price?.max.toFixed(2)}
                </p>
                <div className="flex items-center space-x-4 my-2">
                    <span className="text-sm text-green-600 bg-green-100 rounded-full px-2 py-1">FREE SHIPPING</span>
                    <span className="text-sm text-blue-600 bg-blue-100 rounded-full px-2 py-1">FREE GIFT</span>
                </div>
                <div className="badge badge-outline text-green-600 mt-2">In stock</div>

                <div className="mt-4 flex flex-col space-y-2">
                    <button
                        className="flex items-center justify-center w-full bg-blue-600 text-white font-semibold py-2 rounded-lg transition-colors hover:bg-blue-700"
                    >
                        <CgShoppingCart className="w-5 h-5 mr-2" />
                        Add to cart
                    </button>
                    {/* Navigation button to product details */}
                    <Link to={`/products/${product?._id}`}> {/* Optional chaining */}
                        <button
                            className="w-full bg-gray-300 text-gray-800 font-semibold py-2 rounded-lg transition-colors hover:bg-gray-400"
                        >
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
            <button className="absolute right-3 top-3 p-2 rounded-full bg-white shadow hover:bg-gray-100 transition">
                <BiHeart className="w-6 h-6 text-gray-600" />
            </button>
        </div>
    );
};

export default Product;
