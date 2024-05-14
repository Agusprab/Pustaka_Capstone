import LoginInput from "../components/LoginInput";
import logo from "../asset/img/logo-pustaka.png";

function LoginPage(){
    return(
        <div className="container">
            <div className="row mx-0">
                <div className="col px-0 bg-primary">
                    <img src={logo} alt="Pustaka" />
                </div>
                <div className="col px-0"><LoginInput></LoginInput></div>
            </div>
        </div>
       
    )
}

export default LoginPage;