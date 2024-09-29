import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="container mx-auto max-w-6xl bg-white shadow-md rounded-lg overflow-hidden flex flex-col lg:flex-row">
                {/* Left Section with Image */}
                <div className="flex justify-center items-center bg-gray-200 lg:w-1/2 p-6">
                    <img src="images/login.png" alt="Registration" className="w-2/3 h-auto object-cover" />
                </div>

                {/* Right Section with Form */}
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-green-500 mb-2">Register</h2>
                    <p className="text-gray-500 mb-6">JOIN US</p>
                    <form>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="John Doe"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="example@gmail.com"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
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
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirmPassword"
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
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                        >
                            REGISTER
                        </button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        ALREADY A USER? <Link to="/login" className="text-green-500 hover:underline">LOGIN</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
