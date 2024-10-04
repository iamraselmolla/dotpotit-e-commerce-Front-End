import React from 'react';
import { FaStar } from 'react-icons/fa';

const Save = () => {
    return (
        <section className="mt-3 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="bg-[#1aba1a] shadow-md py-6 md:py-10">
                <h6 className="flex flex-col md:flex-row text-white justify-center items-center text-lg font-medium leading-5 text-center md:text-left px-4 md:px-0">
                    <FaStar className="text-yellow-400 mr-2" />
                    <span>Members get</span>
                    <span className="uppercase text-[#ffe400] mx-2">FREE SHIPPING*</span>
                    <span>with no order minimum! <span className="text-xs">*Restrictions apply</span></span>
                    <a href="/" className="text-sm text-white underline mt-2 md:mt-0 md:ml-2">
                        Try free 30-day trial!
                    </a>
                </h6>
            </div>
        </section>
    );
};

export default Save;
