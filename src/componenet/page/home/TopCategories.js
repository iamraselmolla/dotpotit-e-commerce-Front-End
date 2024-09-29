import React from 'react';

const TopCategories = () => {
    return (
        <div className="bg-white rounded-lg mx-auto p-4 mt-2" >
            < div className="flex justify-between items-center mb-4" >
                <h2 className="text-2xl uppercase font-bold">top categories</h2>
                <a href="/" className="text-blue-600 hover:underline">View All</a>
            </div >
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="flex items-center justify-center p-4">
                        <img src={`images/categories/cat (${index + 1}).png`} alt={`Brand ${index + 1}`} className="max-w-full object-contain" />
                    </div>
                ))}
            </div>
        </div >
    );
};

export default TopCategories;