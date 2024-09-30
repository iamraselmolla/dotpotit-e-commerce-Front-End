import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../authcontext/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated, jwtToken, } = useContext(AuthContext);
    const location = useLocation();

    if (!isAuthenticated && !jwtToken) {
        toast.error("You can't access this page without login");
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children

};

export default PrivateRoute;