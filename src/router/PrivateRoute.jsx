import React, { useContext } from 'react'
import { AuthContext } from '../auth';
import { Navigate, useLocation } from 'react-router-dom';

/**
 * Protege el acceso a una ruta, si el usuario no ha iniciado sesión, redirige a la ruta /login
 * @param {*} param0 
 * @returns 
 */
export const PrivateRoute = ({ children }) => {

    const { logged } = useContext(AuthContext);

    const {pathname, search} = useLocation();
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);

    return (
        <>
            {
                (logged)
                    ? children
                    : <Navigate to="/login" />
            }
        </>
    );
}
