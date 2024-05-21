import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const LoginPage = () => {
  const MySwal = withReactContent(Swal);
  const { register, handleSubmit } = useForm();

  // retrieving the login method from AuthProvider.jsx via useContext
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Ampy Magny');

    navigate(lastPath, {
      replace: true
    });
  }

  const onSubmit = (data) => {
    //  alert(JSON.stringify(data));
    if (!(data.username === 'test' && data.password === 'test_T3st!!')) {
      MySwal.fire({
        title: 'Incorrect credentials',
        text:
          `Type "test"/"test_T3st!!" for this demo =)`,
        icon: 'error',
        confirmButtonText: 'Ok!',
      });
      /*alert(
        'Credenciales incorrectas. Capture "test"/"test" para este demo =)'
      );*/
    } else {
      const lastPath = localStorage.getItem('lastPath') || '/';
      login(data.username);
      history.replace(lastPath ? lastPath : '/');
      navigate(lastPath, {
        replace: true
      });
    }
  };

  return (
    <>
      <div className="sidenav animate__animated animate__fadeInLeft">
        <div className="bg"></div>
        <div className="login-main-text">
          <h2> Heroes App </h2>
          <p>Introduce your credentials.</p>
        </div>
      </div>
      <div className="main animate__animated animate__fadeInRight">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>User Name</label>
                <input
                  type="text"
                  {...register('username')}
                  className="form-control"
                  placeholder="User Name"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  {...register('password')}
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-secondary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}