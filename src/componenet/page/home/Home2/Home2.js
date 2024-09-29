import React from 'react';
import Hero from '../Hero';
import Categories from '../Categories';
import Products from '../../../shared/Product';
import FeaturedBrands from '../FeaturesBand';
import TopCategories from '../TopCategories';
import DealsOfTheDay from '../DealsofTheDay';
import Save from '../Save';

function Home2() {
    return (
        <div>
            <Hero />
            <div className="container mx-auto gap-4 p-4 grid md:grid-cols-2 grid-cols-1">
                <FeaturedBrands />
                <TopCategories />
            </div>
            < Categories />
            <Products />
            <DealsOfTheDay />
            <Save />
        </div>
    );
}

export default Home2;