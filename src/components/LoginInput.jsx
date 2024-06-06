/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { LoginUser, reset } from '../features/authSlice';

function LoginInput() {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    user, isError, isSuccess, isLoading, message,
  } = useSelector((state) => state.auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  useEffect(() => {
    if (user || isSuccess) {
      navigate('/admin');
    }
    dispatch(reset());
  }, [user, isSuccess, navigate, dispatch]);

  return (
    <form className="p-5" onSubmit={handleSubmit}>
      <h1 className="font-poppins mt-5 text-center">Login</h1>
      { isError && <p className="text-center text-danger">{message} </p>}
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control shadow rounded-pill border-0"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={onEmailChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control shadow rounded-pill border-0"
          name="password"
          autoComplete="on"
          id="exampleInputPassword1"
          value={password}
          onChange={onPasswordChange}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <div className="d-grid gap-2">
        <button type="submit" className="btn primary-bg btn-primary text-white">
          {isLoading ? 'Loading...' : 'Login'}
        </button>
      </div>
      <p className="mt-1">
        I don't have account?
        {' '}
        <Link to="/register" className="link-opacity-100-hover">
          Register Here
        </Link>
      </p>
    </form>
  );
}

export default LoginInput;
