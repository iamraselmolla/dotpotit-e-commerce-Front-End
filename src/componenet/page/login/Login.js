import React from 'react';

const Login = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="container mx-auto max-w-5xl bg-white shadow-md rounded-lg overflow-hidden flex">
                {/* Left Section with Image */}
                <div className="hidden md:block md:w-1/2">
                    <img
                        src="images/login.png"
                        alt="Login"
                        className=""
                    />
                </div>

                {/* Right Section with Form */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-center text-gray-700 mb-4">
                        Welcome Back
                    </h2>
                    <p className="text-center text-gray-500 mb-6">
                        LOGIN TO CONTINUE
                    </p>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="example@gmail.com"
                                className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:shadow-outline"
                            />
                            <div className="flex items-center justify-between mt-2">
                                <a href="#" className="text-sm text-blue-500 hover:text-blue-700">
                                    Forgot Password?
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="text-center mt-4">
                        <span>NEW USER? </span>
                        <a href="#" className="text-blue-500 hover:text-blue-700">SIGN UP</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
