import LoginInput from "../components/LoginInput";
function LoginPage() {
  return (
    <div className="container">
      <div className="row mx-0">
        <div className="col px-0">
          <img src="../asset/img/logo-pustaka.png" alt="" />
        </div>
        <div className="col px-0">
          <LoginInput></LoginInput>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
