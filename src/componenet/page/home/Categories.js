import React from 'react';
import { FaLaptop, FaMobile, FaHeadphones, FaCamera } from 'react-icons/fa';

function Categories() {
    const categories = [
        {
            title: 'Laptops',
            icon: <FaLaptop size={30} />,
        },
        {
            title: 'Mobiles',
            icon: <FaMobile size={30} />,
        },
        {
            title: 'Headphones',
            icon: <FaHeadphones size={30} />,
        },
        {
            title: 'Cameras',
            icon: <FaCamera size={30} />,
        },
    ];

    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {categories.map((category) => (
                    <div key={category.title} className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-100">
                        {category.icon}
                        <h3 className="text-lg font-semibold mt-2">{category.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Categories;