import React from 'react';
import { FaStar } from 'react-icons/fa';

const Save = () => {
    return (
        <section className="mt-3" style={{ animationDelay: '0.2s' }}>
            <div className="bg-[#1aba1a] shadow-md py-10">
                <h6 className="flex text-white justify-center items-center text-lg font-medium leading-5">
                    <FaStar className="text-green-600 mr-2" />
                    Member get
                    <span className="text-uppercase text-[#ffe400] ml-2"> FREE SHIPPING* </span>
                    with no order minimum!

                    *Restrictions apply

                    <a href="/" className="text-sm text-white underline ml-2">Try free 30-days trial!</a>
                </h6>
            </div>
        </section>
    );
};

export default Save;
