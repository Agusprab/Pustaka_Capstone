/* eslint-disable no-alert */
/* eslint-disable react/react-in-jsx-scope */
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import logo from '../asset/img/logo-pustaka.png';
import RegisterInput from '../components/RegisterInput';
import { getAllUsers, addUser } from '../features/userSlice';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  const handleRegister = ({ name, email, password, confirmPassword }) => {
    if (password !== confirmPassword) {
      alert("Password doesn't match!");
      return;
    }
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      alert('User already exists!');
      return;
    }
    const role = 'user';
    const newUser = { name, email, password, role };
    dispatch(addUser(newUser));
    alert('Registration successful!');
    navigate('/login');
  };

  return (
    <div className="container justify-content-center align-content-center">
      <div className="row mx-0 mt-lg-3 pt-lg-5 justify-content-center">
        <div className="col-lg-5 d-none d-lg-block px-0  text-center">
          <div className="row primary-bg">
            <Link to="/" className="mb-5">
              <img src={logo} alt="Pustaka" className="img img-fluid" />
            </Link>
          </div>
        </div>
        <div className="col-lg-5 col-12 px-0 ">
          <RegisterInput onSubmit={handleRegister} />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
