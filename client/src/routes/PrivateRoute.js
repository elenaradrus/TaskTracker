import React from 'react';
import { Navigate } from 'react-router-dom';

//import { useAuth } from '../hooks/useAuth';
import { useSelector } from 'react-redux';

const PrivateRoute = ({children}) => {
    //const {user} = useAuth();
    const isAuthenticated = useSelector(state => state.user.token);

    return isAuthenticated ? children: <Navigate to="/login" />;

};

export default PrivateRoute;
