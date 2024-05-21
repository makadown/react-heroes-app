import React, { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';

/**
 * This initializes the state of the user.
 * @returns 
 */
const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged: !!user,
        user: user
    }
}

/**
 * Este componente es el proveedor del estado de autenticación.
 * Usado en HeroesApp.jsx
 * @param {*} param0 
 * @returns 
 */
export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init);

    /**
     * Metodo que se expondrá desde el AuthProvider a la aplicación
     * @param {*} name 
     */
    const login = (name = '') => {
        const user = { 
            id: 'ABC', 
            name: name
        };

        localStorage.setItem('user', JSON.stringify(user));

        const action = {
            type: types.login,
            payload: user
        };

        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('user');

        const action = {
            type: types.logout
        };

        dispatch(action);
    }

  return (
    <AuthContext.Provider value={{
            ...authState,
            login: login,
            logout: logout
            }}>
        {children}
    </AuthContext.Provider>
  );
}
