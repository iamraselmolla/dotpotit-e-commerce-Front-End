import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { getAllCategories } from '../../services/user_services';

const AddProduct = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState([]);

    const initialValues = {
        name: '',
        price: { min: '', max: '' },
        features: [''],
        colors: [{ name: '', price: '', image: null }],
        memorySizes: [''],
        gifts: [{ quantity: '', gift: '' }],
        sku: '',
        category: '',
        brand: '',
        images: [],
        inStock: true,
        shippingFrom: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Product name is required'),
        price: Yup.object().shape({
            min: Yup.number().required('Minimum price is required'),
            max: Yup.number().required('Maximum price is required'),
        }),
        features: Yup.array().of(Yup.string().required('Feature is required')),
        colors: Yup.array().of(
            Yup.object().shape({
                name: Yup.string().required('Color name is required'),
                price: Yup.number().required('Color price is required'),
                image: Yup.mixed().required('Color image is required'),
            })
        ),
        memorySizes: Yup.array().of(Yup.string().required('Memory size is required')),
        gifts: Yup.array().of(
            Yup.object().shape({
                quantity: Yup.number().required('Gift quantity is required'),
                gift: Yup.string().required('Gift description is required'),
            })
        ),
        sku: Yup.string().required('SKU is required'),
        category: Yup.string().required('Category is required'),
        brand: Yup.string().required('Brand is required'),
        images: Yup.array().min(1, 'At least one image is required'),
        inStock: Yup.boolean(),
        shippingFrom: Yup.string().required('Shipping location is required'),
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        setIsLoading(true);
        setError(null);
        try {
            // Simulating API call
            await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log('Form submitted with values:', values);
        } catch (err) {
            setError('An error occurred while uploading the product. Please try again.');
        } finally {
            setIsLoading(false);
            setSubmitting(false);
        }
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await getAllCategories();
                if (response?.status === 200) {
                    setCategories(response?.data?.data);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Upload Product</h2>
            {error && <div className="text-red-500 text-center mb-4">{error}</div>}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, setFieldValue, isSubmitting }) => (
                    <Form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                            {/* Product Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
                                <Field name="name" type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            {/* Price Range */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Price Range</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    <Field name="price.min" type="number" placeholder="Min" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                    <Field name="price.max" type="number" placeholder="Max" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                </div>
                                <ErrorMessage name="price.min" component="div" className="text-red-500 text-sm mt-1" />
                                <ErrorMessage name="price.max" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                        </div>

                        {/* Features */}
                        <FieldArray name="features">
                            {({ remove, push }) => (
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Features</label>
                                    {values.features.map((_, index) => (
                                        <div key={index} className="flex items-center space-x-2 mt-2">
                                            <Field name={`features.${index}`} type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                            <button type="button" onClick={() => remove(index)} className="text-red-500"><FaMinus /></button>
                                        </div>
                                    ))}
                                    <button type="button" onClick={() => push('')} className="mt-2 text-indigo-600"><FaPlus /> Add Feature</button>
                                </div>
                            )}
                        </FieldArray>

                        {/* Colors */}
                        <FieldArray name="colors">
                            {({ remove, push }) => (
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Colors</label>
                                    {values.colors.map((_, index) => (
                                        <div key={index} className="flex items-center space-x-2 mt-2">
                                            <Field name={`colors.${index}.name`} type="text" placeholder="Color Name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                            <Field name={`colors.${index}.price`} type="number" placeholder="Price" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                            <input type="file" onChange={(event) => {
                                                setFieldValue(`colors.${index}.image`, event.currentTarget.files[0]);
                                            }} className="mt-1 block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
                                            <button type="button" onClick={() => remove(index)} className="text-red-500"><FaMinus /></button>
                                        </div>
                                    ))}
                                    <button type="button" onClick={() => push({ name: '', price: '', image: null })} className="mt-2 text-indigo-600"><FaPlus /> Add Color</button>
                                </div>
                            )}
                        </FieldArray>

                        {/* Memory Sizes */}
                        <FieldArray name="memorySizes">
                            {({ remove, push }) => (
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Memory Sizes</label>
                                    {values.memorySizes.map((_, index) => (
                                        <div key={index} className="flex items-center space-x-2 mt-2">
                                            <Field name={`memorySizes.${index}`} type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                            <button type="button" onClick={() => remove(index)} className="text-red-500"><FaMinus /></button>
                                        </div>
                                    ))}
                                    <button type="button" onClick={() => push('')} className="mt-2 text-indigo-600"><FaPlus /> Add Memory Size</button>
                                </div>
                            )}
                        </FieldArray>

                        {/* Gifts */}
                        <FieldArray name="gifts">
                            {({ remove, push }) => (
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Gifts</label>
                                    {values.gifts.map((_, index) => (
                                        <div key={index} className="flex items-center space-x-2 mt-2">
                                            <Field name={`gifts.${index}.quantity`} type="number" placeholder="Quantity" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                            <Field name={`gifts.${index}.gift`} type="text" placeholder="Gift" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                            <button type="button" onClick={() => remove(index)} className="text-red-500"><FaMinus /></button>
                                        </div>
                                    ))}
                                    <button type="button" onClick={() => push({ quantity: '', gift: '' })} className="mt-2 text-indigo-600"><FaPlus /> Add Gift</button>
                                </div>
                            )}
                        </FieldArray>

                        {/* SKU */}
                        <div className="mb-4">
                            <label htmlFor="sku" className="block text-sm font-medium text-gray-700">SKU</label>
                            <Field name="sku" type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            <ErrorMessage name="sku" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Category Dropdown */}
                        <div className="mb-4">
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                            <Field as="select" name="category" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                <option value="">Select a category</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                            </Field>
                            <ErrorMessage name="category" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Brand */}
                        <div className="mb-4">
                            <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand</label>
                            <Field name="brand" type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            <ErrorMessage name="brand" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Images */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Product Images</label>
                            <input type="file" multiple onChange={(event) => setFieldValue('images', event.currentTarget.files)} className="mt-1 block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
                            <ErrorMessage name="images" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* In Stock */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">In Stock</label>
                            <Field name="inStock" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                            <ErrorMessage name="inStock" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Shipping From */}
                        <div className="mb-4">
                            <label htmlFor="shippingFrom" className="block text-sm font-medium text-gray-700">Shipping From</label>
                            <Field name="shippingFrom" type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            <ErrorMessage name="shippingFrom" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div className="text-center">
                            <button type="submit" disabled={isSubmitting} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                {isSubmitting ? 'Uploading...' : 'Upload Product'}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddProduct;
