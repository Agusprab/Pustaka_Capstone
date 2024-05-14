import logo from "../asset/img/logo-pustaka-navbar.png";
import { Link } from "react-router-dom";
export default function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg primary-bg">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
                </button>
               <a href=""> <img src={logo} alt="" className="img igm" style={{width: "150px"}}/></a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Superiority</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Tutorial</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">
                        <button type="button" className="btn btn-outline-light btn-login rounded-pill"> <Link to="/login" className="text-white link-underline link-underline-opacity-0">Login</Link></button>
                        </a>
                    </li>
                </ul>
              
                </div>
            </div>
            </nav>
    )
}