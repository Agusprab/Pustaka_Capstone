/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ListKategori({ kategori, isLoadingKategori, deleteKategori }) {
  if (kategori) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };

    const filteredKategori = kategori
      ? kategori.filter((kat) => kat.name.toLowerCase().includes(searchTerm.toLowerCase()))
      : [];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(kategori.length / itemsPerPage);

    const indexOfLastBook = currentPage * itemsPerPage;
    const indexOfFirstBook = indexOfLastBook - itemsPerPage;
    const currentKategori = kategori.slice(indexOfFirstBook, indexOfLastBook);
    const ShowKategori = (searchTerm ? filteredKategori : currentKategori);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6>Categories table</h6>
                  <Link className="btn btn-primary" to="/admin/add-kategori">
                    <i className="fa fa-plus" aria-hidden="true" />
                  &nbsp; Add Category
                  </Link>
                </div>
                <input
                  type="text"
                  placeholder="Search by Kategori"
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
                    </tr>
                  </thead>
                  <tbody>
                    {!kategori && (
                    <tr>
                      <td colSpan="3" className="text-center">
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </td>
                    </tr>
                    )}

                    {!isLoadingKategori && ShowKategori.length === 0 && (
                    <tr>
                      <td colSpan="3" className="text-center">
                        No categories found
                      </td>
                    </tr>
                    )}
                    {kategori && ShowKategori.map((kat) => (
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
                    {isLoadingKategori && (
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
              {!searchTerm && (
              <div className="d-flex justify-content-center mt-2">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                      <button className="page-link" onClick={() => paginate(currentPage - 1)} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </button>
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => (
                      <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                        <button className={`page-link ${index + 1 === currentPage ? 'text-white' : ''}`} onClick={() => paginate(index + 1)}>
                          {index + 1}
                        </button>
                      </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                      <button className="page-link" onClick={() => paginate(currentPage + 1)} aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ListKategori.propTypes = {
  kategori: PropTypes.array,
  deleteKategori: PropTypes.func.isRequired,
  isLoadingKategori: PropTypes.bool.isRequired,
};

export default ListKategori;
