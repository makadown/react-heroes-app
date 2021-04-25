import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../auth/AuthContext';
import { Types } from '../../types/types';

export const LoginScreen = ({ history }) => {
  
  const {dispatch} = useContext(AuthContext);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    //  alert(JSON.stringify(data));
    if ( !(data.username === 'test' && data.password === 'test')) {
      alert(
        'Credenciales incorrectas. Capture "test"/"test" para este demo =)'
      );
    } else {
      dispatch( {
        type: Types.login,
        payload: {name: data.username}
      } );
      history.replace('/');
    }
  };

  return (
    <>
      <div className="sidenav">
        <div className="login-main-text">
          <h2> Heroes App </h2>
          <p>Introduce tus credenciales.</p>
        </div>
      </div>
      <div className="main">
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
};
