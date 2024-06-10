/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */

import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function InputUser({ addUserhandle }) {
  const { users, message, isError } = useSelector((state) => state.users);
  const getLastId = users && users.length > 0 ? users[users.length - 1].id + 1 : 0;
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [jenisKelamin, setJenisKelamin] = useInput('Laki-Laki');
  const [alamat, setAlamat] = useInput('');
  const [noTlp, setNoTlp] = useInput('');
  const [role, setRole] = useInput('user');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name, email, password, jenisKelamin, alamat, noTlp, role,
    };

    addUserhandle(newUser);
  };

  return (
    <div className="row">
      <form onSubmit={handleSubmit}>
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <h5>Form Add User</h5>
            </div>
            { isError && (
            <p className="text-center text-danger">
              {message}
              {' '}
            </p>
            )}
            <div className="card-body px-0 pt-0 pb-2" />
            <div className="row">
              <div className="col-lg-6">
                <div className="p-2">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    ID USER
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="ex: 012"
                    value={getLastId}
                    disabled required
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="p-1">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    NAMA USER
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name"
                    required
                    value={name}
                    onChange={setName}

                  />
                </div>
              </div>

              {/* <div className="row">
                <div className="col-lg-6">
                  <div className="p-2">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      USERNAME
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                </div> */}

              <div className="col-lg-12">
                <div className="p-2">
                  <label htmlFor="jenisKelaminInput" className="form-label">
                    JENIS KELAMIN
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    required
                    value={jenisKelamin}
                    onChange={setJenisKelamin}
                  >
                    <option value="Laki-Laki">Laki-Laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="p-2">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      EMAIL
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                      required
                      value={email}
                      onChange={setEmail}
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="p-2">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      PASSWORD
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="password"
                      required
                      value={password}
                      onChange={setPassword}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="p-2">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        ALAMAT
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="alamat"
                        required
                        value={alamat}
                        onChange={setAlamat}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="p-2">
                      <label>NO.TELEPON</label>
                      <input
                        type="number"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="08********"
                        required
                        value={noTlp}
                        onChange={setNoTlp}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="p-2">
                      <label>ROLE</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        required
                        value={role}
                        onChange={setRole}
                      >

                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 p-4">
                    <button type="submit" className="btn btn-primary">Kirim</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

InputUser.propTypes = {
  addUserhandle: PropTypes.func.isRequired,
};

export default InputUser;
