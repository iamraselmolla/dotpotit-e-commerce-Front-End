import React, { useContext, useEffect, useState } from 'react';
import WishList from '../../shared/WishList';
import { AuthContext } from '../../authcontext/AuthProvider';
import toast from 'react-hot-toast';

const WishLists = () => {
    const [wishlist, setWishlist] = useState([]);
    const { setWishlistNumber } = useContext(AuthContext);

    // Function to remove product from wishlist
    const removeFromWishlist = (productId) => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const updatedWishlist = storedWishlist.filter(item => item.id?.toString() !== productId?.toString());

        // Update the local storage and state
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        setWishlist(updatedWishlist);  // Update the state to re-render the UI
        setWishlistNumber(updatedWishlist.length);

        toast.success('Product removed from wishlist'); // Show a success message
    };

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlist(storedWishlist);
    }, []);

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

            {wishlist.length === 0 ? (
                <div className="text-center">
                    <h2 className="text-xl font-semibold">Your wishlist is empty!</h2>
                    <p className="text-gray-600 mt-4">
                        Browse our products and start adding items to your wishlist!
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlist.map((product) => (
                        <WishList removeFromWishlist={removeFromWishlist} key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default WishLists;
