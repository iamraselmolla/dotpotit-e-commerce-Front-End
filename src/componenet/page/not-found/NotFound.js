import React from 'react';

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-2xl text-gray-600 mb-2">Oops! Page Not Found</h2>
            <p className="text-gray-500 mb-6">The page you're looking for doesn't exist or has been moved.</p>
            <div className="flex space-x-4">
                <a href="/" className="btn btn-primary">Go to Homepage</a>
                <a href="/contact" className="btn btn-secondary">Contact Us</a>
            </div>
        </div>
    );
};

export default NotFound;
