import React, { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';

const initialState = {
    logged: false
}

/**
 * Este componente es el proveedor del estado de autenticación.
 * Usado en HeroesApp.jsx
 * @param {*} param0 
 * @returns 
 */
export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer(authReducer, initialState); 
                                /*useReducer(authReducer, initialState, () => {
        const user = JSON.parse(localStorage.getItem('user'));
        return {    
            ...user
        }
    });*/

    /**
     * Metodo que se expondrá desde el AuthProvider a la aplicación
     * @param {*} name 
     */
    const login = (name = '') => {
        // const user = { id: 'ABC', name };
        // localStorage.setItem('user', JSON.stringify(user));
        const action = {
            type: types.login,
            payload: { 
                id: 'ABC', 
                name: name
            }
        };
        dispatch(action);
    }

  return (
    <AuthContext.Provider value={{
            ...authState,
            login: login, 
            }}>
        {children}
    </AuthContext.Provider>
  );
}
