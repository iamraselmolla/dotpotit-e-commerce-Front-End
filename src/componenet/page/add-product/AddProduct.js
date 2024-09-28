import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddProduct = () => {
    const initialValues = {
        name: '',
        category: '',
        description: '',
        price: '',
        quantity: 1,
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Product name is required')
            .min(3, 'Product name must be at least 3 characters'),
        category: Yup.string()
            .required('Category is required'),
        description: Yup.string()
            .required('Description is required'),
        price: Yup.number()
            .required('Price is required')
            .positive('Price must be a positive number'),
        quantity: Yup.number()
            .required('Quantity is required')
            .min(1, 'Quantity must be at least 1'),
    });

    const handleSubmit = (values, { resetForm }) => {
        // Handle the form submission (e.g., API call to save the product)
        console.log('Product Details:', values);
        // Reset the form after submission
        resetForm();
    };

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className="container mx-auto bg-white rounded-lg shadow-xl p-6">
                <h2 className="text-3xl font-bold mb-4">Add New Product</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1" htmlFor="name">Product Name</label>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                className="input input-bordered w-full"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1" htmlFor="category">Category</label>
                            <Field
                                type="text"
                                id="category"
                                name="category"
                                className="input input-bordered w-full"
                            />
                            <ErrorMessage name="category" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1" htmlFor="description">Description</label>
                            <Field
                                as="textarea"
                                id="description"
                                name="description"
                                className="input input-bordered w-full h-32"
                            />
                            <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1" htmlFor="price">Price ($)</label>
                            <Field
                                type="number"
                                id="price"
                                name="price"
                                className="input input-bordered w-full"
                            />
                            <ErrorMessage name="price" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1" htmlFor="quantity">Quantity</label>
                            <Field
                                type="number"
                                id="quantity"
                                name="quantity"
                                className="input input-bordered w-full"
                                min="1"
                            />
                            <ErrorMessage name="quantity" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        >
                            Add Product
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default AddProduct;
