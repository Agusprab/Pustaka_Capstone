import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";

function RegisterInput({ onSubmit }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email, password, confirmPassword });
  };

  return (
    <form className="p-5">
      <h1 className="font-poppins mt-5 text-center">Register</h1>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control shadow rounded-pill border-0"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={onEmailChange}
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
          value={password}
          onChange={onPasswordChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control shadow rounded-pill border-0"
          id="exampleInputPassword1"
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
        />
      </div>

      <div className="d-grid gap-2">
        <button type="submit" className="btn primary-bg text-white">
          Submit
        </button>
      </div>
      <p className="mt-1">
        Already have account ?{" "}
        <Link to="/login" className="link-opacity-100-hover">
          {" "}
          Login here{" "}
        </Link>
      </p>
    </form>
  );
}

RegisterInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterInput;
