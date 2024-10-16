import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiHeart, BiShoppingBag } from 'react-icons/bi';
import { FaHeart, FaEye } from 'react-icons/fa';
import { IoMdPricetag } from 'react-icons/io';
import toast from 'react-hot-toast';
import { AuthContext } from '../authcontext/AuthProvider';

const Product = ({ product }) => {
    const [isInWishlist, setIsInWishlist] = useState(false);
    const { setWishlistNumber, addToCart } = useContext(AuthContext);

    const addToWishlist = (productItem) => {
        const existingWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const existingProductIndex = existingWishlist.findIndex(item => item?.id?.toString() === productItem?._id?.toString());

        if (existingProductIndex < 0) {
            existingWishlist.push(productItem);
            localStorage.setItem('wishlist', JSON.stringify(existingWishlist));
            toast.success('Product added to wishlist');
            setIsInWishlist(true);
            setWishlistNumber(existingWishlist.length);
        } else {
            toast.error('Product is already in the wishlist');
        }
    };

    useEffect(() => {
        const existingWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const isProductInWishlist = existingWishlist?.some(item => item?.id?.toString() === product?._id?.toString());
        setIsInWishlist(isProductInWishlist);
    }, [product]);

    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="relative">
                <img
                    src={`http://localhost:5000/${product?.images}`}
                    alt={product?.name}
                    className="rounded-xl object-cover w-full"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product?.inStock ? (
                        <span className="badge badge-success">In Stock</span>
                    ) : (
                        <span className="badge badge-error">Out of Stock</span>
                    )}
                    <span className="badge badge-primary flex items-center gap-1">
                        <IoMdPricetag /> {product?.category?.name}
                    </span>
                </div>
                <button
                    onClick={() => addToWishlist(product)}
                    className="absolute top-4 right-4 btn btn-circle btn-sm bg-base-100"
                >
                    {isInWishlist ? (
                        <FaHeart className="text-red-500" />
                    ) : (
                        <BiHeart className="text-gray-500" />
                    )}
                </button>
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title text-lg font-semibold">{product?.name}</h2>
                <p className="text-sm text-gray-600">{product?.brand}</p>
                <div className="flex justify-between items-center mt-2">
                    <div className="text-lg font-bold text-primary">
                        ${product?.price?.min.toFixed(2)} - ${product?.price?.max.toFixed(2)}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <FaEye /> {product?.views}
                        <BiShoppingBag /> {product?.salesCount}
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                    {product?.features?.slice(0, 3).map((feature, index) => (
                        <span key={index} className="badge badge-outline badge-sm">{feature}</span>
                    ))}
                </div>
                <div className="card-actions justify-between mt-4">
                    <button
                        onClick={() => addToCart(product)}
                        className="btn btn-primary btn-sm flex-1 mr-2"
                    >
                        Add to cart
                    </button>
                    <Link to={`/products/${product?._id}`} className="btn btn-outline btn-sm flex-1">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
