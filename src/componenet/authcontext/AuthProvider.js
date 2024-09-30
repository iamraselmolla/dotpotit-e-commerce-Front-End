import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [initialLoading, setInitialLoading] = useState(true); // Ensures no render until auth check is complete
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [jwtToken, setJwtToken] = useState(null);

    // Check authentication status on app load
    useEffect(() => {
        const storedJwtToken = getCookie('jwttoken'); // Check if JWT token exists in cookies
        const isSignedIn = getCookie('dotpotItSign') === 'true'; // Check if user is marked as signed in

        if (storedJwtToken && isSignedIn) {
            setJwtToken(storedJwtToken);
            setUser({ /* Optionally set user info here if available */ });
            setIsAuthenticated(true); // Mark the user as authenticated
        } else {
            setIsAuthenticated(false); // User is not authenticated
        }

        setInitialLoading(false); // Allow the app to render after auth check
    }, []);

    // Plain JavaScript cookie functions
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
        document.cookie = name + "=; Max-Age=-99999999; path=/"; // Added path to ensure the cookie is deleted from the correct scope
    }

    // Logout function to clear cookies and reset state
    const logout = () => {
        deleteCookie('jwttoken');
        deleteCookie('dotpotItSign');
        setUser(null);
        setIsAuthenticated(false);
    };

    // Auth info provided to the context consumers
    const authInfo = {
        user,
        isAuthenticated,
        jwtToken,
        setJwtToken,
        logout, // Pass the logout function to consumers
    };

    if (initialLoading) {
        return <>Loading...</>; // You can replace this with a loading spinner
    }
    console.log(isAuthenticated, jwtToken)
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
