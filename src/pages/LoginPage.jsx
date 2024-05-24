/* eslint-disable no-alert */
/* eslint-disable react/react-in-jsx-scope */
import { Link, useNavigate } from 'react-router-dom';
import logo from '../asset/img/logo-pustaka.png';
import LoginInput from '../components/LoginInput';

const users = [{ email: 'user@example.com', password: 'password123' }];
function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = ({ email, password }) => {
    const user = users.find(
      // eslint-disable-next-line no-shadow
      (user) => user.email === email && user.password === password,
    );
    if (user) {
      localStorage.setItem('isAuthenticated', true);
      navigate('/*');
    } else {
      alert('Invalid email or password!');
    }
  };
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
          <LoginInput onSubmit={handleLogin} />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
