/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { postedAt } from '../../utils/index';

function ListUser({ users = [], deleteUser, isLoadingUser }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6>Authors table test</h6>
                <Link className="btn btn-primary" to="/admin/add-user">
                  <i className="fa fa-plus" aria-hidden="true" />
                  &nbsp; Tambah User
                </Link>
              </div>
              <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleSearchChange}
                className="form-control"
                style={{ display: 'inline', width: '200px', marginRight: '10px' }}
              />
            </div>
          </div>
          <div className="card-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr>
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
                      Created At
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Action
                    </th>
                    <th className="text-secondary opacity-7" />
                  </tr>
                </thead>
                <tbody>
                  {!users ? (
                    <tr>
                      <td colSpan="10" className="text-center">
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </td>
                    </tr>
                  ) : filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                      <tr key={user.uuid}>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold">{user.id}</span>
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
                          <span className="text-secondary text-xs font-weight-bold">{postedAt(user.createdAt)}</span>
                        </td>
                        <td className="align-middle text-center">
                          <Link to={`/admin/edit-user/${user.uuid}`} className="text-secondary font-weight-bold text-xs">
                            Edit
                          </Link>
                          |
                          <Link
                            href=""
                            className="text-danger font-weight-bold text-xs"
                            onClick={() => deleteUser(user.uuid)}
                          >
                            Delete
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="10" className="text-center">
                        No users found
                      </td>
                    </tr>
                  )}
                  {isLoadingUser && (
                  <tr>
                    <td colSpan="3" className="text-center">
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </td>
                  </tr>
                  )}
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
  users: PropTypes.array,
  deleteUser: PropTypes.func,
  isLoadingUser: PropTypes.bool,
};

export default ListUser;
