import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CategoryForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const initialValues = {
        name: '',
        description: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Category name is required')
            .min(3, 'Category name must be at least 3 characters'),
        description: Yup.string()
            .min(5, 'Description should be at least 5 characters long'),
    });

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        setIsLoading(true);
        setError(null);
        setSuccessMessage(null);

        try {
            // Simulate API call to create category
            await new Promise((resolve) => setTimeout(resolve, 2000));

            console.log('Category Created with values:', values);
            setSuccessMessage('Category created successfully!');
            resetForm();  // Reset form after submission
        } catch (err) {
            setError('An error occurred while creating the category. Please try again.');
        } finally {
            setIsLoading(false);
            setSubmitting(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Create New Category</h2>
            {error && <div className="text-red-500 text-center mb-4">{error}</div>}
            {successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Category Name</label>
                            <Field
                                name="name"
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                            <Field
                                name="description"
                                as="textarea"
                                rows="4"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                            <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting || isLoading}
                            className="w-full bg-indigo-600 text-white rounded-md p-2 mt-4 hover:bg-indigo-500 focus:outline-none"
                        >
                            {isSubmitting || isLoading ? 'Submitting...' : <> Create Category</>}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CategoryForm;
