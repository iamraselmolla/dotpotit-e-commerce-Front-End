import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiHeart } from 'react-icons/bi';
import { CgShoppingCart } from 'react-icons/cg';
import toast from 'react-hot-toast';
import { FaHeart } from 'react-icons/fa';

const Product = ({ product }) => {
    const [isInWishlist, setIsInWishlist] = useState(false);

    // Function to add a product to the wishlist
    const addToWishlist = (productItem) => {
        // Get the existing wishlist from local storage, or initialize an empty array
        const existingWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        // Check if the product is already in the wishlist
        const existingProductIndex = existingWishlist.findIndex(item => item?._id?.toString() === productItem?._id?.toString());
        console.log(existingProductIndex)

        if (existingProductIndex < 0) {
            // If not, add the product with the required details
            const productToAdd = {
                id: productItem._id,
                name: productItem.name,
                price: productItem.price,
                image: productItem.images[0],
            };
            existingWishlist.push(productToAdd);

            // Update the local storage with the new wishlist
            localStorage.setItem('wishlist', JSON.stringify(existingWishlist));
            toast.success('Product added to wishlist');
            setIsInWishlist(true); // Update state to reflect that the product is in the wishlist
        }
    };

    // Check if product is already in wishlist on component mount
    useEffect(() => {
        const existingWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const isProductInWishlist = existingWishlist?.some(item => item?.id?.toString() === product?._id?.toString());
        setIsInWishlist(isProductInWishlist);
    }, [product]);

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
            <button

                className="absolute right-3 top-3 p-2 rounded-full bg-white shadow hover:bg-gray-100 transition"
            >
                {isInWishlist ? (
                    <FaHeart className="w-6 h-6 text-red-600" /> // Red heart icon if in wishlist
                ) : (
                    <BiHeart onClick={() => addToWishlist(product)} className="w-6 h-6 text-gray-600" /> // Default heart icon
                )}
            </button>
        </div>
    );
};

export default Product;
