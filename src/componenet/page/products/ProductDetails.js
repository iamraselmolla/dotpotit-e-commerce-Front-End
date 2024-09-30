import React, { useState } from 'react';
import { FaStar, FaPlus, FaEye, FaShoppingCart, FaHeart, FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaDribbble, FaCheckCircle, FaMinus, FaRedo, FaShippingFast } from 'react-icons/fa';

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="p-6 bg-white mt-3 rounded-lg shadow-md">
            <div className="flex flex-wrap -mx-4">
                {/* Image Section */}
                <div className="w-full lg:w-5/12 px-4">
                    <div className="relative">
                        <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs py-1 px-2 rounded uppercase">
                            new
                        </span>
                        <div className="absolute top-2 right-2 flex space-x-2">
                            <button className="bg-white p-2 rounded-full shadow"><FaPlus /></button>
                            <div className="flex space-x-2">
                                <button className="bg-white p-2 rounded-full shadow"><FaEye /></button>
                                <button className="bg-white p-2 rounded-full shadow"><FaShoppingCart /></button>
                                <button className="bg-white p-2 rounded-full shadow"><FaHeart /></button>
                            </div>
                        </div>
                        <img src="/images/phone.png" alt="Product" className="w-full rounded-lg" />
                    </div>
                    <div className="flex mt-4 space-x-4">
                        <img src="/images/phone.png" alt="Thumbnail 1" className="w-20 h-20 rounded-lg" />
                        <img src="/images/phone.png" alt="Thumbnail 2" className="w-20 h-20 rounded-lg" />
                        <img src="/images/phone.png" alt="Thumbnail 3" className="w-20 h-20 rounded-lg" />
                    </div>
                </div>

                {/* Product Info Section */}
                <div className="w-full lg:w-4/12 px-4 mt-6 lg:mt-0">
                    <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={`${i < 4 ? 'text-yellow-400' : 'text-gray-300'} mr-1`} />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">(5)</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Somseng Galatero X6 Ultra LTE 4G/128GB, Black Smartphone</h2>
                    <h3 className="text-xl font-semibold mb-4">$569.00 - $609.00</h3>
                    <ul className="text-sm mb-4">
                        <li className="flex items-center mb-2">
                            <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                            Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core
                        </li>
                        <li className="flex items-center mb-2">
                            <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                            DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory
                        </li>
                        <li className="flex items-center mb-2">
                            <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                            Commanding Power Design: Twin 16+1+2 Phases Digital VRM
                        </li>
                    </ul>
                    <div className="flex space-x-4 mb-6">
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">FREE SHIPPING</span>
                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">FREE GIFT</span>
                    </div>
                    <div className="mb-6">
                        <p className="text-sm text-gray-600 mb-2"><strong className="text-black uppercase mr-1">Color:</strong> Midnight Blue</p>
                        <div className="flex space-x-4">
                            <label className="flex flex-col items-center">
                                <input type="radio" name="color" value="midnight-blue" className="sr-only" defaultChecked />
                                <img src="/api/placeholder/60/60" alt="Midnight Blue" className="w-16 h-16 rounded-lg mb-1" />
                                <span className="text-xs">Midnight Blue</span>
                                <span className="text-xs font-bold">$569.00</span>
                            </label>
                            <label className="flex flex-col items-center">
                                <input type="radio" name="color" value="deep-purple" className="sr-only" />
                                <img src="/api/placeholder/60/60" alt="Deep Purple" className="w-16 h-16 rounded-lg mb-1" />
                                <span className="text-xs">Deep Purple</span>
                                <span className="text-xs font-bold">$569.00</span>
                            </label>
                            <label className="flex flex-col items-center">
                                <input type="radio" name="color" value="space-black" className="sr-only" />
                                <img src="/api/placeholder/60/60" alt="Space Black" className="w-16 h-16 rounded-lg mb-1" />
                                <span className="text-xs">Space Black</span>
                                <span className="text-xs font-bold">$569.00</span>
                            </label>
                        </div>
                    </div>
                    <div className="mb-6">
                        <p className="text-sm text-gray-600 mb-2"><strong className="text-black uppercase mr-1">Memory Size:</strong> 128GB</p>
                        <div className="flex space-x-4">
                            {['64GB', '128GB', '256GB', '512GB'].map((size) => (
                                <label key={size} className="inline-flex items-center">
                                    <input type="radio" name="memory" value={size} className="sr-only" defaultChecked={size === '128GB'} />
                                    <span className={`px-3 py-1 rounded border ${size === '128GB' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}>{size}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg mb-6">
                        <div className="flex items-start">
                            <img src="/api/placeholder/40/40" alt="Gift" className="w-10 h-10 mr-4" />
                            <div>
                                <ul className="text-sm">
                                    <li className="mb-1">• Buy <span className="text-red-600 font-bold">02</span> boxes get a <strong>Snack Tray</strong></li>
                                    <li>• Buy <span className="text-red-600 font-bold">04</span> boxes get a free <strong>Block Toys</strong></li>
                                </ul>
                                <p className="text-xs text-gray-500 mt-2 italic">Promotion will expires in: 9h00pm, 25/5/2024</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-1"><strong className="text-black uppercase mr-1">SKU:</strong> ABC025168</p>
                    <p className="text-sm text-gray-600 mb-1"><strong className="text-black uppercase mr-1">Category:</strong> Cell Phones & Tablets</p>
                    <p className="text-sm text-gray-600 mb-4"><strong className="text-black uppercase mr-1">Brand:</strong> <span className="text-green-600">sumsong</span></p>
                    <div className="flex space-x-4">
                        {[FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaDribbble].map((Icon, index) => (
                            <a key={index} href="#" className="text-gray-400 hover:text-gray-600">
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Payment Section */}
                <div className="w-full lg:w-3/12 px-4 mt-6 lg:mt-0">
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <p className="text-xs text-gray-600 uppercase mb-1">Total Price:</p>
                        <h4 className="text-3xl font-bold mb-4">$609.00</h4>
                        <div className="flex items-center text-xs border-b pb-3 mb-3">
                            <img src="/api/placeholder/60/20" alt="Affirm" className="h-5 mr-2" />
                            <span className="text-red-600 font-bold mr-1">$49/m</span>
                            <span className="mr-1">in 12 months.</span>
                            <a href="#" className="text-blue-500 underline">See more</a>
                        </div>
                        <p className="flex items-center text-sm mb-4">
                            <FaCheckCircle className="text-green-500 mr-2" />
                            In stock
                        </p>
                        <div className="flex items-center border rounded-md mb-4">
                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2"><FaMinus /></button>
                            <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} className="w-full text-center border-none" />
                            <button onClick={() => setQuantity(quantity + 1)} className="p-2"><FaPlus /></button>
                        </div>
                        <button className="btn btn-primary w-full mb-2">Add To Cart</button>
                        <button className="btn btn-warning w-full mb-4">
                            Buy with <img src="/api/placeholder/60/20" alt="PayPal" className="h-5 ml-2" />
                        </button>
                        <div className="flex justify-between text-sm text-gray-600 border-b pb-3 mb-3">
                            <a href="#" className="flex items-center">
                                <FaHeart className="text-green-500 mr-1" /> Wishlist added
                            </a>
                            <a href="#" className="flex items-center">
                                <FaRedo className="mr-1" /> Compare
                            </a>
                        </div>
                        <p className="text-xs text-gray-800 mb-2">Guaranteed Safe Checkout</p>
                        <img src="/api/placeholder/200/30" alt="Payment Methods" className="w-full" />
                    </div>
                    <div className="bg-gray-800 text-white p-3 rounded-lg mt-4 mb-4">
                        <p className="text-xs mb-1">Quick Order 24/7</p>
                        <h5 className="text-lg font-bold">(025) 3886 25 16</h5>
                    </div>
                    <p className="flex items-center text-sm">
                        <FaShippingFast className="mr-2" />
                        <span className="text-gray-600">Ships from</span>
                        <strong className="ml-1">United States</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;