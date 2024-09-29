import React from 'react';
import { BiHeart } from 'react-icons/bi';
import { CgShoppingCart } from 'react-icons/cg';

const Product = ({ product }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={product.image} alt={product.name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-lg font-bold">{product.name}</h2>
                <p className="text-2xl font-semibold text-primary">${product.price.toFixed(2)}</p>
                <div className="flex items-center space-x-2 text-sm">
                    <span className="text-success">FREE SHIPPING</span>
                    <span className="text-success">FREE GIFT</span>
                </div>
                <div className="badge badge-outline">In stock</div>
                <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                        <CgShoppingCart className="w-4 h-4 mr-2" />
                        Add to cart
                    </button>
                </div>
            </div>
            <button className="btn btn-circle btn-ghost absolute right-2 top-2">
                <BiHeart className="w-6 h-6" />
            </button>
        </div>
    );
};

export default Product;