// src/components/VerifyEmail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Loader from '../../shared/Loader';

const VerifyEmail = () => {
    const { token } = useParams(); // Get the token from the URL
    const [loading, setLoading] = useState(true);
    const [verified, setVerified] = useState(false);

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await axios.post(`https://dot-commerce-server.vercel.app/api/v1/user/verify-user`, { token });
                if (response.status === 200) {
                    toast.success(response.data.message);
                    setVerified(true);
                }
            } catch (error) {
                toast.error(error.response?.data?.message || 'Verification failed!');
            } finally {
                setLoading(false);
            }
        };

        verifyEmail();
    }, [token]);

    if (loading) return <Loader />;

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-md text-center">
                {verified ? (
                    <h2 className="text-xl font-bold">Email Verified Successfully!</h2>
                ) : (
                    <h2 className="text-xl font-bold">Email Verification Failed!</h2>
                )}
                <p className="mt-4">
                    {verified ? "You can now log in to your account." : "Please try again."}
                </p>
            </div>
        </div>
    );
};

export default VerifyEmail;
