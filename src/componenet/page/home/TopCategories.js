import React from 'react';

const TopCategories = () => {
    return (
        <div className="bg-white rounded-lg p-4 mt-2">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl md:text-2xl uppercase font-bold">Top Categories</h2>
                <a href="/" className="text-blue-600 hover:underline text-sm md:text-base">View All</a>
            </div>
            {/* Responsive flexbox layout for categories */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="flex justify-center items-center p-4">
                        <img src={`images/categories/cat (${index + 1}).png`} alt={`Category ${index + 1}`} className="max-w-full object-contain" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopCategories;
