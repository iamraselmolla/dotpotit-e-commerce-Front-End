import React, { useEffect, useState } from 'react';
import { getAllProducts, getAllCategories } from '../../services/user_services';
import Loader from '../../shared/Loader';
import Product from '../../shared/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [filterType, setFilterType] = useState('all'); // 'all', 'best-selling', 'best-viewing'

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const result = await getAllProducts();
                if (result?.status === 200) {
                    setProducts(result?.data?.data);
                    setFilteredProducts(result?.data?.data); // Initially show all products
                }
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        const fetchAllCategories = async () => {
            try {
                const categoryResult = await getAllCategories();
                if (categoryResult?.status === 200) {
                    setCategories(categoryResult?.data?.data);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllProducts();
        fetchAllCategories();
    }, []);

    const handleFilter = (type) => {
        setFilterType(type);
        let updatedProducts = [...products];

        if (selectedCategory !== 'all') {
            updatedProducts = updatedProducts.filter(
                (product) => product.category._id === selectedCategory
            );
        }

        if (type === 'best-selling') {
            updatedProducts = updatedProducts.sort((a, b) => b.salesCount - a.salesCount);
        } else if (type === 'best-viewing') {
            updatedProducts = updatedProducts.sort((a, b) => b.views - a.views);
        }
        setFilteredProducts(updatedProducts);
    };

    const handleCategoryFilter = (categoryId) => {
        setSelectedCategory(categoryId);
        handleFilter(filterType); // Reapply the selected filter
    };

    return (
        <div className="container mx-auto p-4">
            {/* Filter Buttons */}
            <div className="flex justify-between mb-6">
                <div>
                    <button
                        className={`btn ${filterType === 'all' ? 'btn-active' : ''}`}
                        onClick={() => handleFilter('all')}
                    >
                        All
                    </button>
                    <button
                        className={`btn ${filterType === 'best-selling' ? 'btn-active' : ''}`}
                        onClick={() => handleFilter('best-selling')}
                    >
                        Best Selling
                    </button>
                    <button
                        className={`btn ${filterType === 'best-viewing' ? 'btn-active' : ''}`}
                        onClick={() => handleFilter('best-viewing')}
                    >
                        Best Viewing
                    </button>
                </div>
                {/* Category Dropdown */}
                <select
                    className="select select-bordered"
                    onChange={(e) => handleCategoryFilter(e.target.value)}
                    value={selectedCategory}
                >
                    <option value="all">All Categories</option>
                    {categories.map((category) => (
                        <option key={category._id} value={category._id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-4">
                {loading && <Loader />}
                {!loading && filteredProducts.length === 0 && (
                    <p>No products found for the selected filter.</p>
                )}
                {filteredProducts?.map((product) => (
                    <Product key={product?._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
