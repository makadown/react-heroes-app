import React, { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/AuthContext';
import { AuthReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';

const init = () => {
  return (
    JSON.parse(localStorage.getItem('user')) || {
      logged: false,
    }
  );
};

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(AuthReducer, {}, init);

  // Importante para cachar cuando se ha cambiado el user desde login
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  // No olvides que aqui siempre se inicializa el AuthContext,
  // con los elementos de nuestro custom reducer instanciado aquí.
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
