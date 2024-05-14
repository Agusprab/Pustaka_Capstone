import logo from "../asset/img/logo-pustaka.png";
import LoginInput from "../components/LoginInput";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="container">
      <div className="row mx-0 mt-lg-5 pt-lg-5 justify-content-center">
        <div className="col-lg-5 d-none d-lg-block px-0 primary-bg text-center">
          <Link to="/"><img src={logo} alt="Pustaka" className="img img-fluid" /></Link>
        </div>
        <div className="col-lg-5 col-12 px-0 ">
          <LoginInput></LoginInput>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
