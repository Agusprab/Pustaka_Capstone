/* eslint-disable no-alert */
/* eslint-disable react/react-in-jsx-scope */

import React from 'react';
import { Link } from 'react-router-dom';

import LoginInput from '../components/LoginInput';
import logo from '../asset/img/logo-pustaka.png';

function LoginPage() {
  return (
    <div className="container justify-content-center align-content-center">
      <div className="row mx-0 mt-lg-3 pt-lg-5 justify-content-center">
        <div className="col-lg-5 d-none d-lg-block px-0 text-center">
          <div className="row primary-bg">
            <Link to="/" className="mb-5">
              <img src={logo} alt="Pustaka" className="img img-fluid" />
            </Link>
          </div>
        </div>
        <div className="col-lg-5 col-12 px-0 ">
          <LoginInput />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
