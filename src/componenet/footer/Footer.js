import React from 'react';

const Footer = () => {
    return (
        < footer className="bg-white p-6 mt-8" >
            <div className="container mx-auto flex justify-between">
                <div>
                    <h4 className="font-bold">SWOO - 1ST NYC TECH ONLINE MARKET</h4>
                    <p className="text-gray-500">Contact: (025) 3686 25 16</p>
                </div>
                <div>
                    <h4 className="font-bold">Top Categories</h4>
                    <ul className="text-gray-500 space-y-2">
                        <li>Laptops</li>
                        <li>Cell Phones</li>
                        <li>Tablets</li>
                    </ul>
                </div>
            </div>
        </footer >
    );
};

export default Footer;