import logo from "../asset/img/logo-pustaka.png";
import RegisterInput from "../components/RegisterInput";

function RegisterPage() {
  return (
    <div className="container">
      <div className="row mx-0 mt-5 pt-5 justify-content-center">
        <div className="col-lg-5 px-0 primary-bg text-center">
          <img src={logo} alt="Pustaka" className="img img-fluid" />
        </div>
        <div className="col-lg-5 px-0 ">
          <RegisterInput></RegisterInput>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
