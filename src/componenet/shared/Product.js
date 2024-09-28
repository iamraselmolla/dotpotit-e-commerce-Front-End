import React from 'react';

function Product() {
    const products = [
        {
            image: 'https://placehold.co/300x300',
            title: 'Product 1',
            price: '$29.99',
        },
        {
            image: 'https://placehold.co/300x300',
            title: 'Product 1',
            price: '$29.99',
        },
        {
            image: 'https://placehold.co/300x300',
            title: 'Product 1',
            price: '$29.99',
        },
        {
            image: 'https://placehold.co/300x300',
            title: 'Product 1',
            price: '$29.99',
        },
        {
            image: 'https://placehold.co/300x300',
            title: 'Product 1',
            price: '$29.99',
        },
        {
            image: 'https://placehold.co/300x300',
            title: 'Product 1',
            price: '$29.99',
        },
        {
            image: 'https://placehold.co/300x300',
            title: 'Product 1',
            price: '$29.99',
        },
        {
            image: 'https://placehold.co/300x300',
            title: 'Product 1',
            price: '$29.99',
        },
        {
            image: 'https://placehold.co/300x300',
            title: 'Product 1',
            price: '$29.99',
        },
        // ... other products
    ];

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product.title} className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-100">
                        <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-lg" />
                        <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
                        <p className="text-gray-600">{product.price}</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2">Add to Cart</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Product;