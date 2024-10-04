import React, { useContext } from 'react';
import { AuthContext } from '../../authcontext/AuthProvider';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { makePayment } from '../../services/user_services';
import toast from 'react-hot-toast';

const Cart = () => {
    const { cartItems, increaseQuantity, decreaseQuantity, user, removeFromCart } = useContext(AuthContext);

    const handleCheckout = async (values) => {
        const totalAmount = cartItems.reduce((total, item) => total + (item.price.min * item.quantity), 0);
        const products = cartItems.map(item => ({
            productId: item._id,
            quantity: item.quantity,
            price: item.price.min
        }));

        try {
            const { userId } = JSON.parse(localStorage.getItem("currentUser"));

            if (userId) {
                const response = await makePayment({
                    totalAmount,
                    products,
                    shippingData: values,
                    currency: 'BDT',
                    user: userId
                });
                if (response?.data?.url) {
                    window.location.href = response.data.url;
                } else {
                    alert("Payment initialization failed.");
                }
            } else {
                toast.error("no user Id")
            }
        } catch (error) {
            console.error('Checkout error:', error);
        }
    };

    // Formik validation schema
    const validationSchema = Yup.object({
        cus_name: Yup.string().required('Name is required'),
        cus_phone: Yup.string().required('Mobile number is required').matches(/^[0-9]{11}$/, 'Invalid mobile number'),
        cus_address: Yup.string().required('Address is required'),
        cus_city: Yup.string().required('City is required'),
        cus_postcode: Yup.string().required('Postcode is required'),
    });

    return (
        <div className="container max-w-7xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div key={item._id} className="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-lg shadow-md mb-4">
                                <img src={item.images[0]} alt={item.name} className="w-28 h-28 object-cover rounded-md border mb-4 md:mb-0" />
                                <div className="flex-1 px-4">
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                    <p className="text-gray-700">Price: <span className="font-bold">${item.price.min.toFixed(2)}</span></p>
                                    <p className="text-gray-600">Shipping: FREE</p>
                                    <span className={`badge ${item.inStock ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                                        {item.inStock ? 'In Stock' : 'Out of Stock'}
                                    </span>
                                </div>
                                <div className="flex items-center mb-4 md:mb-0">
                                    <button onClick={() => decreaseQuantity(item._id)} className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full">
                                        <FaMinus />
                                    </button>
                                    <span className="mx-2 text-lg">{item.quantity}</span>
                                    <button onClick={() => increaseQuantity(item._id)} className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full">
                                        <FaPlus />
                                    </button>
                                </div>
                                <button onClick={() => removeFromCart(item._id)} className="p-2 ml-0 md:ml-4 bg-red-500 hover:bg-red-600 text-white rounded-full">
                                    <FaTrash />
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">Your cart is empty.</p>
                    )}
                </div>

                {/* Shipping Form */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-md sticky top-4 h-fit">
                    <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                    <Formik
                        initialValues={{
                            cus_name: '',
                            cus_phone: '',
                            cus_address: '',
                            cus_city: '',
                            cus_postcode: '',
                            cus_email: user?.email || '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleCheckout}
                    >
                        {({ isSubmitting, values }) => (
                            <Form>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Name</label>
                                    <Field
                                        name="cus_name"
                                        type="text"
                                        className="w-full px-4 py-2 border rounded-lg"
                                    />
                                    <ErrorMessage name="cus_name" component="div" className="text-red-500 text-sm" />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700">Mobile Number</label>
                                    <Field
                                        name="cus_phone"
                                        type="text"
                                        className="w-full px-4 py-2 border rounded-lg"
                                    />
                                    <ErrorMessage name="cus_phone" component="div" className="text-red-500 text-sm" />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700">Address</label>
                                    <Field
                                        name="cus_address"
                                        type="text"
                                        className="w-full px-4 py-2 border rounded-lg"
                                    />
                                    <ErrorMessage name="cus_address" component="div" className="text-red-500 text-sm" />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700">City</label>
                                    <Field
                                        name="cus_city"
                                        type="text"
                                        className="w-full px-4 py-2 border rounded-lg"
                                    />
                                    <ErrorMessage name="cus_city" component="div" className="text-red-500 text-sm" />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700">Postcode</label>
                                    <Field
                                        name="cus_postcode"
                                        type="text"
                                        className="w-full px-4 py-2 border rounded-lg"
                                    />
                                    <ErrorMessage name="cus_postcode" component="div" className="text-red-500 text-sm" />
                                </div>

                                {/* Email Field */}
                                <div className="mb-4">
                                    <label className="block text-gray-700">Email</label>
                                    <Field
                                        name="email"
                                        type="email"
                                        value={user?.email}
                                        className="w-full px-4 py-2 border rounded-lg bg-gray-200"
                                        readOnly
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                                </div>

                                <div className="flex justify-between mb-2">
                                    <span>Total Items:</span>
                                    <span>{cartItems.reduce((count, item) => count + item.quantity, 0)}</span>
                                </div>
                                <div className="flex justify-between mb-4">
                                    <span>Total Price:</span>
                                    <span>${cartItems.reduce((total, item) => total + (item.price.min * item.quantity), 0).toFixed(2)}</span>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                >
                                    Proceed to Checkout
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Cart;
