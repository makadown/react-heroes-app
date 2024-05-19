import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  
  // retrieving the login method from AuthProvider.jsx via useContext
  const {login} = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogin = () => {

    login('Ampy Magny');

    navigate('/marvel', {
      replace: true
    });
  }

  return (
      <>
      <div className="container mt-5">
        <h1>Login</h1>
        <hr />
        <button
            className='btn btn-primary'
            onClick={onLogin}
            >
              Login
        </button>

      </div>
      </>
  )
}
