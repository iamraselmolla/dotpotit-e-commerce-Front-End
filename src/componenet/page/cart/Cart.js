import React, { useContext } from 'react';
import { AuthContext } from '../../authcontext/AuthProvider';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa'; // Icons for increment, decrement, and remove

const Cart = () => {
    const { cartItems, addToCart, removeFromCart } = useContext(AuthContext);

    // Function to decrease quantity of a product
    const decreaseQuantity = (product) => {
        if (product.quantity > 1) {
            addToCart({ ...product, quantity: product.quantity - 1 }); // Update quantity using addToCart
        } else {
            removeFromCart(product.id); // If quantity reaches 0, remove the item
        }
    };

    return (
        <div className="container max-w-7xl mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Cart Items (66% width) */}
                <div className="md:col-span-2 space-y-4">
                    {cartItems.length > 0 ? cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
                            {/* Product Image */}
                            <img src={item.images[0]} alt={item.name} className="w-24 h-24 object-cover rounded" />

                            {/* Product Info */}
                            <div className="flex-1 px-4">
                                <h2 className="text-lg font-semibold">{item.name}</h2>
                                <p className="text-gray-500">Price: ${item.price.min.toFixed(2)}</p>
                                <p className="text-gray-500">Shipping: FREE</p>
                                <span className="badge badge-outline text-green-600">In stock</span>
                            </div>

                            {/* Quantity Counter */}
                            <div className="flex items-center">
                                <button
                                    onClick={() => decreaseQuantity(item)}
                                    className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full">
                                    <FaMinus />
                                </button>
                                <span className="mx-2 text-lg">{item.quantity}</span>
                                <button
                                    onClick={() => addToCart(item)}
                                    className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full">
                                    <FaPlus />
                                </button>
                            </div>

                            {/* Remove Button */}
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="p-2 ml-4 bg-red-500 hover:bg-red-600 text-white rounded-full"
                                title="Remove item">
                                <FaTrash />
                            </button>

                            {/* Total Price */}
                            <div className="text-right">
                                <p className="text-lg font-semibold">
                                    ${(item.price.min * item.quantity).toFixed(2)}
                                </p>
                            </div>
                        </div>
                    )) : (
                        <p className="text-center text-gray-500">Your cart is empty.</p>
                    )}
                </div>

                {/* Cart Summary (33% width) */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
                    <div className="flex justify-between">
                        <span>Total Items:</span>
                        <span>{cartItems.reduce((count, item) => count + item.quantity, 0)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Total Price:</span>
                        <span>
                            ${cartItems.reduce((total, item) => total + (item.price.min * item.quantity), 0).toFixed(2)}
                        </span>
                    </div>
                    <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
