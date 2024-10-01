import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPurchaseHistory } from '../../../services/user_services';
import { AuthContext } from '../../../authcontext/AuthProvider';
import { FaShoppingCart, FaTruck, FaCreditCard, FaCalendarAlt } from 'react-icons/fa';

const PurchaseHistory = () => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user, clearCart } = useContext(AuthContext); // Use clearCart from context

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const result = await getPurchaseHistory(user?.userId);
                if (result?.status === 200) {
                    setHistory(result.data?.data);
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
            clearCart(); // Clear the cart on successful payment
        }
    }, [clearCart]);

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
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Your Purchase History</h1>
            <div className="space-y-8">
                {history?.map((transaction) => (
                    <div key={transaction?._id} className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title flex justify-between items-center">
                                <span>Order #{transaction._id.slice(-6)}</span>
                                <span className="badge badge-primary">{transaction.paymentType}</span>
                            </h2>
                            <div className="divider"></div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h3 className="font-semibold flex items-center gap-2">
                                        <FaTruck /> Shipping Details
                                    </h3>
                                    <p>{transaction.shippingData.name}</p>
                                    <p>{transaction.shippingData.phone}</p>
                                    <p>{transaction.shippingData.address}, {transaction.shippingData.city}, {transaction.shippingData.postcode}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold flex items-center gap-2">
                                        <FaCalendarAlt /> Order Date
                                    </h3>
                                    <p>{new Date(transaction.createdAt).toLocaleString()}</p>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="overflow-x-auto">
                                <table className="table w-full">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transaction.products.map((product) => (
                                            <tr key={product.productId._id}>
                                                <td>
                                                    <div className="flex items-center space-x-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                <img src={product.image} alt={product.productId.name} />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{product.productId.name}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>${product.price.toFixed(2)}</td>
                                                <td>{product.quantity}</td>
                                                <td>${product.totalPrice.toFixed(2)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th colSpan="3" className="text-right">Total Amount:</th>
                                            <th>${transaction.totalAmount.toFixed(2)}</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PurchaseHistory;
