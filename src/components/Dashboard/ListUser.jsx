/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ListUser({ users }) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h6>Authors table test</h6>
            <Link className="btn btn-primary" to="/admin/add-user">
              <i className="fa fa-plus" aria-hidden="true" />
              &nbsp; Tambah User
            </Link>
          </div>
          <div className="card-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <thead>
                <tr>
                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Created At
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      ID User
                  </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Nama
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Email
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Jenis Kelamin
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Alamat
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      No. Telepon
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Role
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Employed
                    </th>
                    <th className="text-secondary opacity-7" />
                </tr>
                </thead>
                <tbody>
                {users && users.map((user) => (
                  <tr key={user.uuid}>
                  <td className="align-middle text-center">
                    <span className="text-secondary text-xs font-weight-bold">23/04/24</span>
                  </td>
                  <td className="align-middle text-center">
                    <span className="text-secondary text-xs font-weight-bold">USR123</span>
                  </td>
                  <td className="align-middle text-center">
                    <span className="text-secondary text-xs font-weight-bold">{user.name}</span>
                  </td>
                  <td className="align-middle text-center">
                    <span className="text-secondary text-xs font-weight-bold">{user.email}</span>
                  </td>
                  <td className="align-middle text-center">
                    <span className="text-secondary text-xs font-weight-bold">{user.jenisKelamin}</span>
                  </td>
                  <td className="align-middle text-center">
                    <span className="text-secondary text-xs font-weight-bold">{user.alamat}</span>
                  </td>
                  <td className="align-middle text-center">
                    <span className="text-secondary text-xs font-weight-bold">{user.noTlp}</span>
                  </td>
                  <td className="align-middle text-center">
                    <span className="text-secondary text-xs font-weight-bold">{user.role}</span>
                  </td>
                  <td className="align-middle text-center">
                    <Link to="/admin/edit-user" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                      Edit
                    </Link>
                    |
                    <a href="" className="text-danger font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                      Delete
                    </a>
                  </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ListUser.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  users: PropTypes.array,
};

export default ListUser;
