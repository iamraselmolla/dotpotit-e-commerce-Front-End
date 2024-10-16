import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { getAllCategories, createProduct } from '../../services/user_services';
import toast from 'react-hot-toast';
import imageCompression from "browser-image-compression";
import Loader from "../../shared/Loader";
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState([]);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

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
        images: null, // Change to null for a single file
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
        inStock: Yup.boolean(),
        shippingFrom: Yup.string().required('Shipping location is required'),
    });

    const handleImageUpload = async (file) => {
        const options = {
            maxSizeMB: 1, // Set your max size limit
            maxWidthOrHeight: 800, // Set your max width or height
            useWebWorker: true, // Use web worker for performance
        };

        try {
            const compressedFile = await imageCompression(file, options);
            return compressedFile; // Return the compressed file
        } catch (error) {
            console.error('Error compressing image:', error);
            return null; // Return null if there's an error
        }
    };

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        setIsLoading(true);
        setError(null);

        const formData = new FormData();

        formData.append('name', values.name);
        formData.append('price', JSON.stringify(values.price));
        formData.append('features', JSON.stringify(values.features));
        formData.append('memorySizes', JSON.stringify(values.memorySizes));
        formData.append('gifts', JSON.stringify(values.gifts));
        formData.append('sku', values.sku);
        formData.append('category', values.category);
        formData.append('brand', values.brand);
        formData.append('inStock', values.inStock);
        formData.append('shippingFrom', values.shippingFrom);

        const colorsData = values?.colors?.map(color => ({
            name: color.name,
            price: color.price,
        }));
        formData.append('colors', JSON.stringify(colorsData));

        // Compress and append the single image
        if (values.images) {
            const compressedImage = await handleImageUpload(values.images);
            if (compressedImage) {
                formData.append('images', compressedImage); // Append compressed image
            }
        }

        values.colors.forEach((color) => {
            if (color.image) {
                formData.append('colorsImg', color.image);
            }
        });

        try {
            const result = await createProduct(formData);

            if (result?.status === 200) {
                toast.success('Product created successfully!');
                resetForm();
                setMessage('Product created successfully!');
                navigate('/products');
            } else {
                setError('An error occurred while uploading the product. Please try again.');
            }
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
            {isLoading && <Loader />}
            <h2 className="text-2xl font-bold mb-6 text-center">Upload Product</h2>
            <p className="text-center text-gray-600 mb-4">
                This section is for showcasing how we can handle product uploads from a form.
            </p>

            {error && <div className="text-red-500 text-center mb-4">{error}</div>}
            {message && <div className="text-blue-500 text-center mb-4">{message}</div>}

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, setFieldValue, isSubmitting }) => (
                    <Form encType="multipart/form-data">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
                                <Field name="name" type="text" className="mt-1 block w-full border pl-4 py-2 rounded-md border-gray-300" />
                                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Price Range</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    <Field name="price.min" type="number" placeholder="Min" className="mt-1 block w-full rounded-md border-gray-300 border pl-4 py-2" />
                                    <Field name="price.max" type="number" placeholder="Max" className="mt-1 block w-full rounded-md border-gray-300 border pl-4 py-2" />
                                </div>
                                <ErrorMessage name="price.min" component="div" className="text-red-500 text-sm mt-1" />
                                <ErrorMessage name="price.max" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                        </div>

                        <FieldArray name="features">
                            {({ remove, push }) => (
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Features</label>
                                    {values?.features?.map((_, index) => (
                                        <div key={index} className="flex items-center space-x-2 mt-2">
                                            <Field name={`features.${index}`} type="text" className="mt-1 block w-full rounded-md border-gray-300 border pl-4 py-2" />
                                            <button type="button" onClick={() => remove(index)} className="text-red-500"><FaMinus /></button>
                                        </div>
                                    ))}
                                    <button type="button" onClick={() => push('')} className="mt-2 text-indigo-600"><FaPlus /> Add Feature</button>
                                </div>
                            )}
                        </FieldArray>

                        <FieldArray name="colors">
                            {({ remove, push }) => (
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Colors</label>
                                    {values.colors.map((_, index) => (
                                        <div key={index} className="flex items-center space-x-2 mt-2">
                                            <Field name={`colors.${index}.name`} type="text" placeholder="Color Name" className="mt-1 block w-full rounded-md border-gray-300 border pl-4 py-2" />
                                            <Field name={`colors.${index}.price`} type="number" placeholder="Price" className="mt-1 block w-full rounded-md border-gray-300 border pl-4 py-2" />
                                            <input type="file" onChange={async (event) => {
                                                const file = event.currentTarget.files[0];
                                                if (file) {
                                                    setMessage('Compressing image...');
                                                    const compressedImage = await handleImageUpload(file);
                                                    if (compressedImage) {
                                                        setMessage('Image compressed successfully.');
                                                        setFieldValue(`colors.${index}.image`, compressedImage); // Handle color image
                                                    }
                                                }
                                            }} className="mt-1 block text-sm text-gray-500" />
                                            <button type="button" onClick={() => remove(index)} className="text-red-500"><FaMinus /></button>
                                        </div>
                                    ))}
                                    <button type="button" onClick={() => push({ name: '', price: '', image: null })} className="mt-2 text-indigo-600"><FaPlus /> Add Color</button>
                                </div>
                            )}
                        </FieldArray>

                        {/* Handle the general image upload */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Image</label>
                            <input type="file" onChange={async (event) => {
                                const file = event.currentTarget.files[0];
                                if (file) {
                                    const compressedImage = await handleImageUpload(file);
                                    if (compressedImage) {
                                        setFieldValue('images', compressedImage); // Set the compressed image
                                    }
                                }
                            }} className="mt-1 block text-sm text-gray-500" />
                            <ErrorMessage name="images" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <FieldArray name="memorySizes">
                            {({ remove, push }) => (
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Memory Sizes</label>
                                    {values.memorySizes.map((_, index) => (
                                        <div key={index} className="flex items-center space-x-2 mt-2">
                                            <Field name={`memorySizes.${index}`} type="text" className="mt-1 block w-full rounded-md border-gray-300 border pl-4 py-2" />
                                            <button type="button" onClick={() => remove(index)} className="text-red-500"><FaMinus /></button>
                                        </div>
                                    ))}
                                    <button type="button" onClick={() => push('')} className="mt-2 text-indigo-600"><FaPlus /> Add Memory Size</button>
                                </div>
                            )}
                        </FieldArray>

                        <FieldArray name="gifts">
                            {({ remove, push }) => (
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Gifts</label>
                                    {values.gifts.map((_, index) => (
                                        <div key={index} className="flex items-center space-x-2 mt-2">
                                            <Field name={`gifts.${index}.quantity`} type="number" placeholder="Quantity" className="mt-1 block w-full rounded-md border-gray-300 border pl-4 py-2" />
                                            <Field name={`gifts.${index}.gift`} type="text" placeholder="Gift Description" className="mt-1 block w-full rounded-md border-gray-300 border pl-4 py-2" />
                                            <button type="button" onClick={() => remove(index)} className="text-red-500"><FaMinus /></button>
                                        </div>
                                    ))}
                                    <button type="button" onClick={() => push({ quantity: '', gift: '' })} className="mt-2 text-indigo-600"><FaPlus /> Add Gift</button>
                                </div>
                            )}
                        </FieldArray>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                            <div>
                                <label htmlFor="sku" className="block text-sm font-medium text-gray-700">SKU</label>
                                <Field name="sku" type="text" className="mt-1 block w-full border pl-4 py-2 rounded-md border-gray-300" />
                                <ErrorMessage name="sku" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                                <Field as="select" name="category" className="mt-1 block w-full border pl-4 py-2 rounded-md border-gray-300">
                                    <option value="">Select a category</option>
                                    {categories.map((category) => (
                                        <option key={category._id} value={category._id}>{category.name}</option>
                                    ))}
                                </Field>
                                <ErrorMessage name="category" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                            <div>
                                <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand</label>
                                <Field name="brand" type="text" className="mt-1 block w-full border pl-4 py-2 rounded-md border-gray-300" />
                                <ErrorMessage name="brand" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">In Stock</label>
                                <Field name="inStock" type="checkbox" className="mt-1 h-5 w-5" />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="shippingFrom" className="block text-sm font-medium text-gray-700">Shipping From</label>
                            <Field name="shippingFrom" type="text" className="mt-1 block w-full border pl-4 py-2 rounded-md border-gray-300" />
                            <ErrorMessage name="shippingFrom" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div className="flex justify-end mt-6">
                            <button
                                type="submit"
                                className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                                disabled={isSubmitting || isLoading}
                            >
                                {isSubmitting || isLoading ? 'Uploading...' : 'Submit'}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddProduct;
