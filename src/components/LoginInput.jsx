import { Link } from "react-router-dom";
function LoginInput() {
  return (
    <form className="p-5">
      <h1 className="font-poppins mt-5 text-center">Login</h1>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control shadow rounded-pill border-0"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control shadow rounded-pill border-0"
          id="exampleInputPassword1"
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
        <button type="submit" className="btn primary-bg text-white">
          Submit
        </button>
      </div>
      <p className="mt-1">
        I don't have account ?{" "}
        <Link to="/register" className="link-opacity-100-hover">
          {" "}
          Register Here{" "}
        </Link>
      </p>
    </form>
  );
}

export default LoginInput;
