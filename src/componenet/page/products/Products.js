import React from 'react';
import Product from '../../shared/Product';
import dummyProducts from '../../shared/productData';

const Products = () => {
    return (
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-2 lg:grid-cols-5 mx-auto p-4">
            {dummyProducts.map(prodcut => <Product key={prodcut.id} product={prodcut} />)}
        </div>
    );
};

export default Products;