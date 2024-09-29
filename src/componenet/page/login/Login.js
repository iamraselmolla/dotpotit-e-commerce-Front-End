import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Loader from '../../shared/Loader';
import { userLogin } from '../../services/user_services';

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // Validation schema
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters long'),
    });

    const handleLogin = async (values) => {
        console.log(values)
        setLoading(true);
        try {
            const response = await userLogin(values);
            if (response.status === 200) {
                toast.success(response.data.message);
                navigate('/');
            }
            // Save token to localStorage or handle cookie setting
            // localStorage.setItem('token', response.data.token);

        } catch (error) {
            toast.error(error.response?.data?.message || 'Login failed!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            {loading && <Loader />}
            <div className="container mx-auto max-w-5xl bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
                {/* Left Section with Image */}
                <div className="flex justify-center items-center bg-gray-200 md:w-1/2 p-8">
                    <img
                        src="images/login.png"
                        alt="Login"
                        className="w-2/3 h-auto object-cover"
                    />
                </div>

                {/* Right Section with Form */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-center text-gray-700 mb-4">Welcome Back</h2>
                    <p className="text-center text-gray-500 mb-6">LOGIN TO CONTINUE</p>

                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleLogin}
                    >
                        {() => (
                            <Form>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        Email Address
                                    </label>
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="example@gmail.com"
                                        className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:shadow-outline"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <Field
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="••••••••"
                                        className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:shadow-outline"
                                    />
                                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                                    <div className="flex items-center justify-between mt-2">
                                        <Link to="/forget-password" className="text-sm text-blue-500 hover:text-blue-700">
                                            Forgot Password?
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <button
                                        type="submit"
                                        disabled={loading} // Disable button while loading
                                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        {loading ? 'Logging in...' : 'Login'} {/* Show loading text or default text */}
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>

                    <div className="text-center mt-4">
                        <span>NEW USER? </span>
                        <Link to="/register" className="text-blue-500 hover:text-blue-700">SIGN UP</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
