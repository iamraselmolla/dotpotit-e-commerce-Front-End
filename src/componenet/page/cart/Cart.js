import React, { useContext } from 'react';
import { AuthContext } from '../../authcontext/AuthProvider';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import axios from 'axios'; // Import axios to make HTTP requests
import { makePayment } from '../../services/user_services';

const Cart = () => {
    const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(AuthContext);

    const handleCheckout = async () => {
        const totalAmount = cartItems.reduce((total, item) => total + (item.price.min * item.quantity), 0);
        const cartData = cartItems.map(item => ({
            productId: item._id,
            quantity: item.quantity,
            price: item.price.min
        }));

        try {
            const response = await makePayment({
                totalAmount,
                cartData,
                currency: 'BDT', // Pass any other necessary details
            });

            // Check if response has the payment gateway URL
            if (response.data.url) {
                window.location.href = response.data.url;  // Redirect to SSLCommerz payment page
            } else {
                alert("Payment initialization failed.");
            }
        } catch (error) {
            console.error('Checkout error:', error);
        }
    };


    return (
        <div className="container max-w-7xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div key={item._id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mb-4">
                                <img src={item.images[0]} alt={item.name} className="w-28 h-28 object-cover rounded-md border" />
                                <div className="flex-1 px-4">
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                    <p className="text-gray-700">Price: <span className="font-bold">${item.price.min.toFixed(2)}</span></p>
                                    <p className="text-gray-600">Shipping: FREE</p>
                                    <span className={`badge ${item.inStock ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                                        {item.inStock ? 'In Stock' : 'Out of Stock'}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <button onClick={() => decreaseQuantity(item._id)} className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full">
                                        <FaMinus />
                                    </button>
                                    <span className="mx-2 text-lg">{item.quantity}</span>
                                    <button onClick={() => increaseQuantity(item._id)} className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full">
                                        <FaPlus />
                                    </button>
                                </div>
                                <button onClick={() => removeFromCart(item._id)} className="p-2 ml-4 bg-red-500 hover:bg-red-600 text-white rounded-full">
                                    <FaTrash />
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">Your cart is empty.</p>
                    )}
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-md sticky top-4 h-fit">
                    <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
                    <div className="flex justify-between mb-2">
                        <span>Total Items:</span>
                        <span>{cartItems.reduce((count, item) => count + item.quantity, 0)}</span>
                    </div>
                    <div className="flex justify-between mb-4">
                        <span>Total Price:</span>
                        <span>${cartItems.reduce((total, item) => total + (item.price.min * item.quantity), 0).toFixed(2)}</span>
                    </div>
                    <button onClick={handleCheckout} className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
