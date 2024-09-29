import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createUser } from '../../services/user_services';
import Loader from '../../shared/Loader';

const Register = () => {
    const [loading, setLoading] = useState(false); // Loading state
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Must be at least 6 characters')
            .required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Passwords don't match")
            .required('Required'),
    });

    const handleSubmit = async (values) => {
        setLoading(true); // Start loading

        try {
            const response = await createUser({
                name: values.name,
                email: values.email,
                password: values.password,
            })
            toast.success(response.data.message || 'Registration successful!');
            // Redirect to login or another page as needed
        } catch (error) {
            toast.error(error.response?.data?.message || 'Registration failed');
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center relative">
            {loading && (
                <Loader />
            )}
            <div className="container mx-auto max-w-6xl bg-white shadow-md rounded-lg overflow-hidden flex flex-col lg:flex-row">
                <div className="flex justify-center items-center bg-gray-200 lg:w-1/2 p-6">
                    <img src="images/login.png" alt="Registration" className="w-2/3 h-auto object-cover" />
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-green-500 mb-2">Register</h2>
                    <p className="text-gray-500 mb-6">JOIN US</p>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                                        Your Name
                                    </label>
                                    <Field
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                                    />
                                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                                        Email Address
                                    </label>
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="example@gmail.com"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <Field
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            name="password"
                                            placeholder="••••••••"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <FaEyeSlash className="h-5 w-5 text-gray-400" /> : <FaEye className="h-5 w-5 text-gray-400" />}
                                        </button>
                                    </div>
                                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="confirmPassword">
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <Field
                                            type={showConfirmPassword ? "text" : "password"}
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            placeholder="••••••••"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        >
                                            {showConfirmPassword ? <FaEyeSlash className="h-5 w-5 text-gray-400" /> : <FaEye className="h-5 w-5 text-gray-400" />}
                                        </button>
                                    </div>
                                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                                >
                                    REGISTER
                                </button>
                            </Form>
                        )}
                    </Formik>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        ALREADY A USER? <Link to="/login" className="text-green-500 hover:underline">LOGIN</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
