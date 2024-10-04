import React from 'react';
import Hero from '../Hero';
import FeaturedBrands from '../FeaturesBand';
import TopCategories from '../TopCategories';
import DealsOfTheDay from '../DealsofTheDay';
import Save from '../Save';

function Home2() {
    return (
        <div>
            <Hero />
            {/* Responsive grid layout for Featured Brands and Top Categories */}
            <div className="mx-auto p-4 grid gap-6 grid-cols-1 lg:grid-cols-2">
                <FeaturedBrands />
                <TopCategories />
            </div>
            <DealsOfTheDay />
            <Save />
        </div>
    );
}

export default Home2;
