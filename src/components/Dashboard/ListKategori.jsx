import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getAllKategori } from '../../features/kategoriSlice';

function ListKategori({ kategori, isLoadingKategori, deleteKategori }) {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(getAllKategori());
  }, [dispatch]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredKategori = kategori
    ? kategori.filter((kat) =>
        kat.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6>Authors table</h6>
                <Link className="btn btn-primary" to="/admin/add-kategori">
                  <i className="fa fa-plus" aria-hidden="true" />
                  &nbsp; Tambah Kategori
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
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">ID Kategori</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nama Kategori</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Action</th>
                    <th className="text-secondary opacity-7" />
                  </tr>
                </thead>
                <tbody>
                  {filteredKategori.map((kat) => (
                    <tr key={kat.uuid}>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">{kat.id}</span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">{kat.name}</span>
                      </td>
                      <td className="align-middle text-center">
                        <Link to={`/admin/edit-kategori/${kat.uuid}`} className="text-secondary font-weight-bold text-xs">Edit</Link>
                        |
                        <Link className="text-danger font-weight-bold text-xs" onClick={() => deleteKategori(kat.uuid)}>Delete</Link>
                      </td>
                    </tr>
                  ))}
                  {!filteredKategori && (
                    <tr>
                      <td colSpan="4" className="text-center">
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </td>
                    </tr>

                 )}
                  {/* ini berguna ketika ada perubahan di  */}
                  {!isLoadingKategori && (
                  <tr>
                    <td colSpan="4" className="text-center">
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

ListKategori.propTypes = {
  kategori: PropTypes.array,
  deleteKategori: PropTypes.func.isRequired,
  isLoadingKategori: PropTypes.bool.isRequired,
};

export default ListKategori;
