import React from 'react';
import Hero from '../Hero';
import FeaturedBrands from '../FeaturesBand';
import TopCategories from '../TopCategories';
import DealsOfTheDay from '../DealsofTheDay';
import Save from '../Save';
import dummyProducts from "../../../shared/productData"
import Product from '../../../shared/Product';
function Home2() {

    return (
        <div>
            <Hero />
            <div className="container mx-auto gap-4 p-4 grid md:grid-cols-2 grid-cols-1">
                <FeaturedBrands />
                <TopCategories />
            </div>
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-2 lg:grid-cols-5 mx-auto p-4">
                {dummyProducts.map(prodcut => <Product key={prodcut.id} product={prodcut} />)}
            </div>
            <DealsOfTheDay />
            <Save />
        </div>
    );
}

export default Home2;