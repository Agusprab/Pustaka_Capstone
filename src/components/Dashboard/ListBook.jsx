/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ListBook({ book, deleteBook, isLoadingBook }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = book ? book.filter((b) => b.judul.toLowerCase().includes(searchTerm.toLowerCase())) : [];

  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6>Authors table</h6>
                <Link className="btn btn-primary" to="/admin/add-book">
                  <i className="fa fa-plus" aria-hidden="true" />
                  &nbsp; Tambah Buku
                </Link>
              </div>
              <input
                type="text"
                placeholder="Search by title"
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
                      ID Book
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Judul
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Cover
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Kategori
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Qty
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Action
                    </th>
                    <th className="text-secondary opacity-7" />
                  </tr>
                </thead>
                <tbody>

                  {book && filteredBooks.map((book) => (
                    <tr key={book.uuid}>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">
                          {book.id}
                        </span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">
                          {book.judul}
                        </span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">
                          {book.cover ? (
                            <img src={book.cover} alt="" style={{ width: '50px' }} />
                          ) : (
                            <img src="https://firebasestorage.googleapis.com/v0/b/capstoneprojek.appspot.com/o/images%2F8104bc91-4265-4eb9-a7f7-6e1628211666?alt=media&token=395b55f6-4e7b-4c15-a827-9d0c6bf4d275" alt="" style={{ width: '50px' }} />
                          )}
                        </span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">
                          {book.kategori.name}
                        </span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">
                          {book.qty}
                        </span>
                      </td>
                      <td className="align-middle text-center">
                        <Link
                          to={`/admin/edit-book/${book.uuid}`}
                          className="text-secondary font-weight-bold text-xs"
                          data-toggle="tooltip"
                          data-original-title="Edit user"
                        >
                          Edit
                        </Link>
                        |
                        <Link
                          className="text-danger font-weight-bold text-xs"
                          onClick={() => deleteBook(book.uuid)}
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}
                  {filteredBooks.length === 0 && (
                    <tr>
                      <td colSpan="7" className="text-center">
                        No books found
                      </td>
                    </tr>
                  )}

                  {isLoadingBook && (
                  <tr>
                    <td colSpan="7" className="text-center">
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

ListBook.propTypes = {
  book: PropTypes.array,
  deleteBook: PropTypes.func.isRequired,
  isLoadingBook: PropTypes.bool,
};

export default ListBook;
