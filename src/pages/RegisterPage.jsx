/* eslint-disable no-alert */
/* eslint-disable react/react-in-jsx-scope */
import { Link, useNavigate } from 'react-router-dom';
import logo from '../asset/img/logo-pustaka.png';
import RegisterInput from '../components/RegisterInput';

const users = [];

function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = ({ email, password, confirmPassword }) => {
    if (password !== confirmPassword) {
      alert("Password doesn't match!");
      return;
    }
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      alert('User already exists!');
      return;
    }
    users.push({ email, password });
    alert('Registration successful!');
    navigate('/login');
  };

  return (
    <div className="container">
      <div className="row mx-0 mt-lg-5 pt-lg-5 justify-content-center">
        <div className="col-lg-5 d-none d-lg-block px-0 primary-bg text-center">
          <Link to="/">
            <img src={logo} alt="Pustaka" className="img img-fluid" />
          </Link>
        </div>
        <div className="col-lg-5 col-12 px-0 ">
          <RegisterInput onSubmit={handleRegister} />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
