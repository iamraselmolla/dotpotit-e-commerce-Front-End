import React, { createContext, useEffect, useState } from "react";
import Loader from "../shared/Loader";

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
        const storedJwtToken = getCookie('jwttoken');
        const isSignedIn = getCookie('dotpotItSign') === 'true';

        if (storedJwtToken && isSignedIn) {
            setJwtToken(storedJwtToken);
            setUser({ /* Optionally set user info here if available */ });
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

    function getCookie(name) {
        const nameEQ = name + "=";
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.indexOf(nameEQ) === 0) return cookie.substring(nameEQ.length, cookie.length);
        }
        return null;
    }

    function deleteCookie(name) {
        document.cookie = `${name}=; Max-Age=0; path=/; domain=${window.location.hostname}`;
    }

    const addToCart = (product) => {
        const existingCartItems = [...cartItems];
        const existingProductIndex = existingCartItems.findIndex(item => item.id === product.id);

        if (existingProductIndex < 0) {
            existingCartItems.push({ ...product, quantity: 1 });
        } else {
            existingCartItems[existingProductIndex].quantity += 1; // Increase quantity
        }

        setCartItems(existingCartItems);
        setCartTotalPrice(existingCartItems.reduce((total, item) => total + (item.price.min * item.quantity), 0)); // Update total price
        setCartItemCount(existingCartItems.reduce((count, item) => count + item.quantity, 0)); // Update total item count

        // Store cart items in localStorage
        localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
    };

    const removeFromCart = (productId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCartItems);
        setCartTotalPrice(updatedCartItems.reduce((total, item) => total + (item.price.min * item.quantity), 0)); // Update total price
        setCartItemCount(updatedCartItems.reduce((count, item) => count + item.quantity, 0)); // Update total item count

        // Store updated cart items in localStorage
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const logout = () => {
        deleteCookie('jwttoken');
        deleteCookie('dotpotItSign');
        setUser(null);
        setIsAuthenticated(false);
        setWishlistNumber(0); // Reset wishlist count on logout
        setCartItems([]); // Clear cart items
        setCartTotalPrice(0); // Reset total price
        setCartItemCount(0); // Reset cart item count
        localStorage.removeItem('cartItems'); // Clear cart items from localStorage
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
        addToCart, // Add the addToCart method
        removeFromCart, // Add the removeFromCart method
        cartItems, // Expose cart items
        cartTotalPrice, // Expose total price
        cartItemCount, // Expose cart item count
        logout,
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
