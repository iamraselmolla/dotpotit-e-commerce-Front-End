import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../services/user_services';
import Loader from '../../shared/Loader';
import Product from '../../shared/Product';

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
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-4 mx-auto p-4">
            {loading && <Loader />}
            {products?.map(prodcut => <Product key={prodcut?._id} product={prodcut} />)}
        </div>
    );
};

export default Products;