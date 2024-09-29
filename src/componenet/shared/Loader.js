import React from 'react';

const Loader = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="w-16 h-16 border-8 border-dashed rounded-full border-gray-300 animate-spin border-t-green-500"></div>
        </div>
    );
};

export default Loader;