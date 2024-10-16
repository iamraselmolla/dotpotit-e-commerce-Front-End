import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPurchaseHistory } from '../../../services/user_services';
import { AuthContext } from '../../../authcontext/AuthProvider';
import { FaTruck, FaCreditCard, FaCalendarAlt, FaBox } from 'react-icons/fa';
import toast from 'react-hot-toast';

const PurchaseHistory = () => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user, clearCart } = useContext(AuthContext);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const currentUser = JSON.parse(localStorage.getItem("currentUser")); // No need for await here
                const { userId } = currentUser || {};
                if (userId) {
                    const result = await getPurchaseHistory(userId);
                    if (result?.status === 200) {
                        setHistory(result.data?.data);
                    }
                } else {
                    toast.error("No user ID found");
                }
            } catch (error) {
                console.error("Error fetching purchase history:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchHistory();
    }, [user?.userId]);


    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const paymentSuccess = params.get('payment') === 'success';
        if (paymentSuccess) {
            clearCart();
        }
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (history?.length === 0) {
        return (
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">No Purchases Yet</h1>
                        <p className="py-6">Looks like you haven't made any purchases. Start shopping to see your history here!</p>
                        <Link to="/products" className="btn btn-primary">Start Shopping</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 max-w-7xl">
            <h1 className="text-4xl font-bold mb-8 text-center text-primary">Your Purchase History</h1>
            <div className="grid grid-cols-1 gap-6">
                {history?.map((transaction) => (
                    <div key={transaction?._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="bg-primary text-white p-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-semibold">Order #{transaction._id.slice(-6)}</h2>
                                <span className="bg-white text-primary px-3 py-1 rounded-full text-sm font-medium">
                                    {transaction.paymentType}
                                </span>
                            </div>
                            <div className="mt-2 flex items-center space-x-4 text-sm">
                                <span className="flex items-center">
                                    <FaCalendarAlt className="mr-1" /> {new Date(transaction.createdAt).toLocaleDateString()}
                                </span>
                                <span className="flex items-center">
                                    <FaCreditCard className="mr-1" /> ${transaction.totalAmount.toFixed(2)}
                                </span>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold flex items-center gap-2 mb-2 text-gray-700">
                                        <FaTruck className="text-primary" /> Shipping Details
                                    </h3>
                                    <p className="text-sm text-gray-600">{transaction.shippingData.name}</p>
                                    <p className="text-sm text-gray-600">{transaction.shippingData.phone}</p>
                                    <p className="text-sm text-gray-600">{transaction.shippingData.address}, {transaction.shippingData.city}, {transaction.shippingData.postcode}</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold flex items-center gap-2 mb-2 text-gray-700">
                                        <FaBox className="text-primary" /> Order Summary
                                    </h3>
                                    <p className="text-sm text-gray-600">Total Items: {transaction.products.length}</p>
                                    <p className="text-sm text-gray-600">Status: <span className="text-green-600 font-medium">Completed</span></p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {transaction?.products?.map((product) => (
                                    <div key={product?.productId} className="flex items-center space-x-4 border-b pb-4">
                                        <img src={`http://localhost:5000/${product.image}`} alt={product.productId.name} className="w-20 h-20 object-cover rounded-md" />
                                        <div className="flex-grow">
                                            <Link to={`/products/${product?.productId}`} className="text-lg font-medium text-primary hover:underline">
                                                {product.name} {/* Display the product name */}
                                            </Link>
                                            <p className="text-sm text-gray-500">Quantity: {product.quantity}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-medium">${product.totalPrice.toFixed(2)}</p>
                                            <p className="text-sm text-gray-500">${product.price.toFixed(2)} each</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 text-right">
                                <p className="text-lg font-semibold">Total: <span className="text-primary">${transaction.totalAmount.toFixed(2)}</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PurchaseHistory;
