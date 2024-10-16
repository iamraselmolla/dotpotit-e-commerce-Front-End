import React, { useContext, useEffect, useState } from 'react';
import { FaStar, FaPlus, FaEye, FaShoppingCart, FaHeart, FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaDribbble, FaCheckCircle, FaMinus } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { findProductById, increaseCountOfProductView } from '../../services/user_services';
import { AuthContext } from '../../authcontext/AuthProvider';

const ProductDetails = () => {
    const { id } = useParams(); // Get the id from the URL parameters
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { addToCart } = useContext(AuthContext)
    const [selectedImage, setSelectedImage] = useState(""); // Initialize as an empty string

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await findProductById(id);
                if (response?.status === 200) {
                    setProduct(response.data?.data);
                    setSelectedImage(response.data?.data?.images || ""); // Default to the first image
                    setLoading(false);

                }
            } catch (error) {
                console.error("Error fetching product:", error);
                setLoading(false);
            }
            await increaseCountOfProductView(id);
        };

        fetchProduct();
    }, [id]);

    const handleColorChange = (color) => {
        setSelectedImage(color?.image); // Change the main image to the selected color's image
    };

    if (loading) {
        return <div>Loading...</div>;
    }

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
                        <img src={selectedImage} alt="Product" className="w-full h-auto rounded-lg" /> {/* Updated image */}
                    </div>
                    <div className="flex mt-4 space-x-4">

                        <img
                            key={product?.images}
                            src={product?.images}
                            alt={`Thumbnail`}
                            className="w-20 h-20 rounded-lg cursor-pointer" Change image on click
                        />

                    </div>
                </div>

                {/* Product Info Section */}
                <div className="w-full lg:w-4/12 px-4 mt-6 lg:mt-0">
                    <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={`${i < 4 ? 'text-yellow-400' : 'text-gray-300'} mr-1`} />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">({product?.ratings?.count})</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{product?.name}</h2>
                    <h3 className="text-xl font-semibold mb-4">${product?.price?.min} - ${product?.price?.max}</h3>
                    <ul className="text-sm mb-4">
                        {product?.features?.map((feature, index) => (
                            <li key={index} className="flex items-center mb-2">
                                <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-4 mb-6">
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">FREE SHIPPING</span>
                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">FREE GIFT</span>
                    </div>
                    <div className="mb-6">
                        <p className="text-sm text-gray-600 mb-2"><strong className="text-black uppercase mr-1">Color:</strong> {product?.colors?.[0]?.name}</p>
                        <div className="flex space-x-4">
                            {product?.colors?.map((color, index) => (
                                <label key={index} onClick={() => handleColorChange(color)} className="flex flex-col items-center cursor-pointer">
                                    <input type="radio" name="color" value={color?.name} className="sr-only" defaultChecked={index === 0} />
                                    <img src={color?.image} alt={color?.name} className="w-16 h-16 rounded-lg mb-1" />
                                    <span className="text-xs">{color?.name}</span>
                                    <span className="text-xs font-bold">${color?.price}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="mb-6">
                        <p className="text-sm text-gray-600 mb-2"><strong className="text-black uppercase mr-1">Memory Size:</strong> {product?.memorySizes?.join(', ')}</p>
                        <div className="flex space-x-4">
                            {product?.memorySizes?.map((size) => (
                                <label key={size} className="inline-flex items-center">
                                    <input type="radio" name="memory" value={size} className="sr-only" defaultChecked={size === product?.memorySizes?.[1]} />
                                    <span className={`px-3 py-1 rounded border ${size === product?.memorySizes?.[1] ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}>{size}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    {/* Promotion Section */}
                    <div className="bg-green-50 p-4 rounded-lg mb-6">
                        <div className="flex items-start">
                            <img src="/api/placeholder/40/40" alt="Gift" className="w-10 h-10 mr-4" />
                            <div>
                                <ul className="text-sm">
                                    {product?.gifts?.map((gift, index) => (
                                        <li key={index} className="mb-1">
                                            • Buy <span className="text-red-600 font-bold">{gift?.quantity}</span> boxes get a <strong>{gift?.gift}</strong>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-xs text-gray-500 mt-2 italic">Promotion will expire in: 9h00pm, 25/5/2024</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-1"><strong className="text-black uppercase mr-1">SKU:</strong> {product?.sku}</p>
                    <p className="text-sm text-gray-600 mb-1"><strong className="text-black uppercase mr-1">Category:</strong> {product?.category?.name}</p>
                    <p className="text-sm text-gray-600 mb-4"><strong className="text-black uppercase mr-1">Brand:</strong> <span className="text-green-600">{product?.brand}</span></p>
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
                        <h4 className="text-3xl font-bold mb-4">${product?.price?.min}</h4>
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
                            <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} className="w-full text-center border-0" min="1" />
                            <button onClick={() => setQuantity(quantity + 1)} className="p-2"><FaPlus /></button>
                        </div>
                        <button onClick={() => addToCart(product)} className="w-full bg-blue-600 text-white py-2 rounded-lg mb-2">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
