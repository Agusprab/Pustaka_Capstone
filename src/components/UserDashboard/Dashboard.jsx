/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Dashboard({ kategori, book }) {
  if (kategori) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
    };

    const filteredBooks = book
      ? book
        .filter((b) => b.judul.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter((b) => (selectedCategory ? b.kategori.name === selectedCategory : true))
      : [];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

    const indexOfLastBook = currentPage * itemsPerPage;
    const indexOfFirstBook = indexOfLastBook - itemsPerPage;
    const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

    const Showbook = (searchTerm ? filteredBooks : currentBooks);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
      <div className="row p-1">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <h6>Temukan Buku Impian Mu</h6>
              <div className="row">
                <div className="col-lg-6 col-6">
                  <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                    <div className="input-group">
                      <span className="input-group-text text-body"><i className="fas fa-search" aria-hidden="true" /></span>
                      <input type="text" className="form-control" placeholder="Type here..." value={searchTerm} onChange={handleSearchChange} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-2" />
                <div className="col-lg-3 col-4">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                  >
                    <option value="">All Category</option>
                    {kategori && kategori.map((cat) => (
                      <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="card-body pb-2 d-flex flex-wrap justify-content-start row shadow">
              {Showbook && Showbook.map((data) => (
                <div key={data.id} className="col-lg-4 col-md-6 col-12 mb-4">
                  <div className="card h-100" key={data.id}>
                    {data.cover ? (
                      <img
                        src={data.cover}
                        alt="book"
                        style={{
                          objectFit: 'cover', objectPosition: 'center', height: '200px', borderRadius: '5px', transition: 'transform .2s', ':hover': { transform: 'scale(0.9)' },
                        }}
                      />
                    ) : (
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/capstoneprojek.appspot.com/o/images%2F8104bc91-4265-4eb9-a7f7-6e1628211666?alt=media&token=395b55f6-4e7b-4c15-a827-9d0c6bf4d275"
                        alt="book"
                        style={{
                          objectFit: 'cover', objectPosition: 'center', height: '200px', borderRadius: '5px', transition: 'transform .2s', ':hover': { transform: 'scale(0.9)' },
                        }}
                      />
                    )}
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{data.judul}</h5>
                      <div className="d-flex mt-auto">
                        <p className="fs-" style={{ fontSize: '12px' }}>
                          Tersedia:
                          <span className={`p-1 ${data.qty === 0 ? 'text-danger fw-bolder' : ''}`}>{data.qty === 0 ? 'Habis' : data.qty}</span>
                        </p>
                      </div>
                      <div className="d-grid gap-2">
                        <Link className="btn primary-bg btn-primary text-white mt-auto" to={`/user/detail-book/${data.uuid}`}>
                          Check Detail Book
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

              ))}

              {Showbook.length === 0 && (
                <div className="text-center">
                  <p>Books not Found</p>
                </div>
              )}
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
    );
  }
}

Dashboard.propTypes = {
  kategori: PropTypes.array,
  book: PropTypes.array,
};
export default Dashboard;
