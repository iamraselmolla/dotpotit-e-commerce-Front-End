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
    const [filterType, setFilterType] = useState('all');
    const [search, setSearch] = useState('');

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

    const filterProducts = () => {
        let filtered = [...products];

        // Category Filter
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(product => product.category?._id?.toString() === selectedCategory?.toString());
        }

        // Best-Selling / Best-Viewing Filter
        if (filterType === 'best-selling') {
            filtered = filtered.sort((a, b) => b.salesCount - a.salesCount);
        } else if (filterType === 'best-viewing') {
            filtered = filtered.sort((a, b) => b.views - a.views);
        }

        // Search Filter
        if (search) {
            filtered = filtered.filter((product) => {
                return Object.values(product).some((value) =>
                    value?.toString().toLowerCase().includes(search.toLowerCase())
                );
            });
        }

        setFilteredProducts(filtered);
    };

    // Apply filter when any filter criteria changes
    useEffect(() => {
        filterProducts();
    }, [selectedCategory, filterType, search]);

    return (
        <div className="container mx-auto p-4">
            {/* Filter Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <div className="flex flex-wrap gap-2">
                    <button
                        className={`btn ${filterType === 'all' ? 'btn-active' : ''}`}
                        onClick={() => setFilterType('all')}
                    >
                        All
                    </button>
                    <button
                        className={`btn ${filterType === 'best-selling' ? 'btn-active' : ''}`}
                        onClick={() => setFilterType('best-selling')}
                    >
                        Best Selling
                    </button>
                    <button
                        className={`btn ${filterType === 'best-viewing' ? 'btn-active' : ''}`}
                        onClick={() => setFilterType('best-viewing')}
                    >
                        Best Viewing
                    </button>
                </div>

                {/* Category Dropdown */}
                <select
                    className="select select-bordered w-full sm:w-auto"
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    value={selectedCategory}
                >
                    <option value="all">All Categories</option>
                    {categories?.map((category) => (
                        <option key={category._id} value={category._id}>
                            {category.name}
                        </option>
                    ))}
                </select>

                {/* Search Input */}
                <input
                    type="text"
                    className="input input-bordered w-full sm:w-auto"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {loading && <Loader />}
                {!loading && filteredProducts.length === 0 && (
                    <p>No products found for the selected filter.</p>
                )}
                {filteredProducts?.map((product) => (
                    <Product key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
