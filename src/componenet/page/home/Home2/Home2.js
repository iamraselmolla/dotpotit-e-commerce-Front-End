import React from 'react';
import Hero from '../Hero';
import Categories from '../Categories';
import Products from '../../../shared/Product';
import FeaturedBrands from '../FeaturesBand';

function Home2() {
    return (
        <div>
            <Hero />
            <div className="grid md:grid-cols-2 grid-cols-1">
                <FeaturedBrands />
            </div>
            < Categories />
            <Products />
        </div>
    );
}

export default Home2;