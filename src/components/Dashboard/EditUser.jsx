/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */

import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function EditUser({ users, editUser }) {
  const { uuid } = useParams();
  const findUser = users?.find((item) => item.uuid === uuid);

  if (!findUser) {
    return <div>User not found</div>;
  }

  const [name, setName] = useInput(findUser.name);
  const [jenisKelamin, setJenisKelamin] = useInput(findUser.jenisKelamin);
  const [email, setEmail] = useInput(findUser.email);
  const [password, setPassword] = useInput(findUser.password);
  const [alamat, setAlamat] = useInput(findUser.alamat);
  const [noTlp, setNoTlp] = useInput(findUser.noTlp);
  const [role, setRole] = useInput(findUser.role);

  const editHandler = (e) => {
    e.preventDefault();
    const newUser = {
      uuid, name, jenisKelamin, email, password, alamat, noTlp, role,
    };
    console.log(newUser);
    editUser(newUser);
  };

  return (
    <div className="row">
      <form onSubmit={editHandler}>
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <h5>Edit User</h5>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <div className="row">
                <div className="col-lg-6">
                  <div className="p-2">
                    <label htmlFor="userIdInput" className="form-label">
                      ID USER
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="userIdInput"
                      placeholder="ex: 012"
                      value={findUser.id}
                      disabled
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="p-1">
                    <label htmlFor="userNameInput" className="form-label">
                      NAMA USER
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="userNameInput"
                      placeholder="name"
                      required
                      value={name}
                      onChange={setName}
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="p-2">
                    <label htmlFor="jenisKelaminInput" className="form-label">
                      JENIS KELAMIN
                    </label>
                    <select
                      className="form-select"
                      id="jenisKelaminInput"
                      required
                      value={jenisKelamin}
                      onChange={setJenisKelamin}
                    >
                      <option value="Laki-Laki">Laki-Laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="p-2">
                    <label htmlFor="userEmailInput" className="form-label">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="userEmailInput"
                      placeholder="name@example.com"
                      required
                      value={email}
                      onChange={setEmail}
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="p-2">
                    <label htmlFor="userPasswordInput" className="form-label">
                      PASSWORD
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="userPasswordInput"
                      placeholder="password"
                      value={password}
                      onChange={setPassword}
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="p-2">
                    <label htmlFor="userAddressInput" className="form-label">
                      ALAMAT
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="userAddressInput"
                      placeholder="alamat"
                      required
                      value={alamat}
                      onChange={setAlamat}
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="p-2">
                    <label htmlFor="userPhoneInput" className="form-label">
                      NO.TELEPON
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="userPhoneInput"
                      placeholder="08********"
                      required
                      value={noTlp}
                      onChange={setNoTlp}
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="p-2">
                    <label htmlFor="userRoleInput" className="form-label">
                      ROLE
                    </label>
                    <select
                      className="form-select"
                      id="userRoleInput"
                      required
                      value={role}
                      onChange={setRole}
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </div>

                <div className="col-12 p-4">
                  <button type="submit" className="btn btn-primary">Simpan</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

EditUser.propTypes = {
  users: PropTypes.array,
  editUser: PropTypes.func,
};

export default EditUser;
