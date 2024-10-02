import React, { useContext } from 'react';
import { FaTrash, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../authcontext/AuthProvider';

const WishList = ({ product, removeFromWishlist }) => {
    const { addToCart } = useContext(AuthContext)
    return (
        <div className="bg-white rounded-lg shadow-md p-4 relative transition-transform transform hover:scale-105">
            {/* Wishlist & Trash Icons */}
            <div className="absolute top-2 right-2 flex space-x-2">
                <button className="text-gray-500 hover:text-red-500" onClick={() => removeFromWishlist(product?._id)}>
                    <FaTrash className="w-5 h-5" />
                </button>
            </div>

            {/* Product Image */}
            <Link to={`/products/${product?._id}`}>
                <img src={product.images[0]} alt={product.name} className="w-full h-48 object-contain mb-4 rounded" />
            </Link>

            {/* Ratings */}
            <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                    ))}
                </div>
                <span className="text-gray-600 text-sm ml-2">({product.reviewCount})</span>
            </div>

            {/* Product Name */}
            <Link to={`/products/${product?.id}`}>
                <h3 className="font-bold text-lg mb-2 text-gray-800 hover:text-primary transition">{product.name}</h3>
            </Link>

            {/* Price */}
            <div className="text-red-600 font-bold text-xl mb-4">
                ${product.price.min} - ${product.price.max}
            </div>

            {/* Free Shipping Label */}
            <div className="mb-2">
                <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Free shipping</span>
            </div>

            {/* Stock Availability */}
            <div className="flex items-center text-green-600 mb-4">
                <FaCheckCircle className="mr-1" />
                <span className="text-sm">In stock</span>
            </div>

            {/* Add to Cart Button */}
            <button
                className="btn btn-primary w-full"
                onClick={() => addToCart(product)}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default WishList;
