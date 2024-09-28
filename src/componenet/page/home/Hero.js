import React from 'react';

function Hero() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Store</h1>
                <p className="text-lg text-gray-600">Discover amazing products at unbeatable prices.</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4">Shop Now</button>
            </div>
        </section>
    );
}

export default Hero;