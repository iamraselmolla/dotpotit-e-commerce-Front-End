import React, { useEffect, useState } from 'react';
import Product from '../../shared/Product';
import dummyProducts from '../../shared/productData';
import { getAllProducts } from '../../services/user_services';
import Loader from '../../shared/Loader';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const result = await getAllProducts();
                if (result?.status === 200) {
                    setProducts(result?.data?.data);
                }
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        fetchAllProducts();
    }, [])
    return (
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-2 lg:grid-cols-5 mx-auto p-4">
            {loading && <Loader />}
            {products?.map(prodcut => <Product key={prodcut.id} product={prodcut} />)}
        </div>
    );
};

export default Products;