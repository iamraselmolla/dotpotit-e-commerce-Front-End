import React, { createContext, useEffect, useState } from "react";
import Loader from "../shared/Loader";
import toast from "react-hot-toast";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [initialLoading, setInitialLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [jwtToken, setJwtToken] = useState(null);
    const [wishlistNumber, setWishlistNumber] = useState(0);
    const [cartItems, setCartItems] = useState([]); // Cart items state
    const [cartTotalPrice, setCartTotalPrice] = useState(0); // Total price state
    const [cartItemCount, setCartItemCount] = useState(0); // Total cart item count state

    // Function to update wishlist count from localStorage
    const updateWishlistNumber = () => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlistNumber(storedWishlist.length);
    };

    useEffect(() => {
        const storedJwtToken = localStorage.getItem('jwttoken');
        const storedIsSignedIn = localStorage.getItem('isSignedIn') === 'true';

        if (storedJwtToken && storedIsSignedIn) {
            setJwtToken(storedJwtToken);
            const storedUser = JSON.parse(localStorage.getItem('currentUser'));
            if (storedUser) {
                setUser(storedUser); // Set user from localStorage
            }
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }

        setInitialLoading(false);
        updateWishlistNumber();

        // Load cart items from localStorage
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
        setCartTotalPrice(storedCartItems.reduce((total, item) => total + (item.price.min * item.quantity), 0));
        setCartItemCount(storedCartItems.reduce((count, item) => count + item.quantity, 0)); // Count total items
    }, []);

    const addToCart = (product) => {
        const existingCartItems = [...cartItems];
        const existingProductIndex = existingCartItems.findIndex(item => item._id === product._id);

        if (existingProductIndex < 0) {
            existingCartItems.push({ ...product, quantity: 1 }); // Add new product
        } else {
            existingCartItems[existingProductIndex].quantity += 1; // Increase quantity
        }

        updateCartState(existingCartItems);
        toast.success("item added to cart");
    };

    const increaseQuantity = (productId) => {
        const updatedCartItems = cartItems?.map(item =>
            item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        updateCartState(updatedCartItems);
    };

    const decreaseQuantity = (productId) => {
        const updatedCartItems = cartItems?.map(item =>
            item._id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0); // Optionally remove item if quantity is 0
        updateCartState(updatedCartItems);
    };

    const removeFromCart = (productId) => {
        const updatedCartItems = cartItems.filter(item => item._id !== productId);
        updateCartState(updatedCartItems);
    };

    const updateCartState = (updatedItems) => {
        setCartItems(updatedItems);
        setCartTotalPrice(updatedItems.reduce((total, item) => total + (item.price.min * item.quantity), 0)); // Update total price
        setCartItemCount(updatedItems.reduce((count, item) => count + item.quantity, 0)); // Update total item count

        // Store cart items in localStorage
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    };

    const logout = () => {
        localStorage.removeItem('jwttoken');
        localStorage.removeItem('isSignedIn');
        localStorage.removeItem('currentUser');
        setUser(null);
        setIsAuthenticated(false);
        setWishlistNumber(0); // Reset wishlist count on logout
        setCartItems([]); // Clear cart items
        setCartTotalPrice(0); // Reset total price
        setCartItemCount(0); // Reset cart item count
    };

    const clearCart = () => {
        setCartItems([]);
        setCartTotalPrice(0);
        setCartItemCount(0);
        localStorage.removeItem('cartItems'); // Clear from localStorage
    };

    const authInfo = {
        user,
        isAuthenticated,
        jwtToken,
        setJwtToken,
        setIsAuthenticated,
        setUser,
        wishlistNumber,
        setWishlistNumber,
        updateWishlistNumber,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        cartItems,
        cartTotalPrice,
        cartItemCount,
        logout,
        clearCart
    };

    if (initialLoading) {
        return <Loader />;
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
