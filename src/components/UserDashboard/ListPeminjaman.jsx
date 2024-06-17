/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import { convertToIndonesianDate } from '../../utils';

function ListPeminjaman({ user, peminjaman, isLoadingPmj }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(peminjaman.length / itemsPerPage);

  const indexOfLastBook = currentPage * itemsPerPage;
  const indexOfFirstBook = indexOfLastBook - itemsPerPage;
  const currentBooks = peminjaman.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  if (peminjaman) {
    return (
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <h6>Riwayat Peminjaman</h6>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>

                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Book
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Kategori
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Tanggal Pinjam
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Tanggal Kembali
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Status
                      </th>

                      <th className="text-secondary opacity-7" />
                    </tr>
                  </thead>
                  <tbody>
                    {peminjaman && peminjaman
                      .filter((pjm) => user.uuid === pjm.user.uuid)
                      .map((pjm) => (
                        <tr key={pjm.uuid}>

                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              {pjm.book.judul}
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              {pjm.book.kategori.name}
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              {convertToIndonesianDate(pjm.tanggal_pinjam)}
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              {pjm.tanggal_kembali && convertToIndonesianDate(pjm.tanggal_kembali) !== '01 Januari 1970' ? convertToIndonesianDate(pjm.tanggal_kembali) : '-'}
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <span className={`badge badge-sm ${
                              pjm.status === 'Diajukan' ? 'bg-gradient-dark'
                                : pjm.status === 'Dipinjamkan' ? 'bg-gradient-primary'
                                  : pjm.status === 'Selesai' ? 'bg-gradient-success'
                                    : pjm.status === 'Ditolak' ? 'bg-gradient-danger' : ''
                            }`}
                            >
                              {pjm.status}
                            </span>
                          </td>

                        </tr>

                      ))}
                    {isLoadingPmj && (
                    <tr className="text-center">
                      <td colSpan="6" className="text-center">
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </td>
                    </tr>
                    )}
                  </tbody>
                </table>
              </div>

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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListPeminjaman;
