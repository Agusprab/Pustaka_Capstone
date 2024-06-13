/* eslint-disable array-callback-return */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';

function Dashboard({ kategori, book }) {
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
                    <input type="text" className="form-control" placeholder="Type here..." />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-2" />
              <div className="col-lg-3 col-4">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  {kategori && kategori.map((data) => (
                    <option key={data.id} value={data.id}>{data.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="card-body pb-2 d-flex flex-wrap justify-content-between row shadow">
            {book && book.map((data) => (
              <div key={data.id} className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="card h-100" key={data.id}>
                  <img src={data.cover} className="card-img-top img-fluid" alt="book" style={{ objectFit: 'cover', objectPosition: 'center', height: '200px', borderRadius: '5px', transition: 'transform .2s', ':hover': { transform: 'scale(0.9)' } }} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fs-3">{data.judul}</h5>
                    <div className="d-flex mt-auto">
                      <p className="fs-6" style={{ fontSize: '12px' }}>{data.qty}</p>
                    </div>
                    <div className="d-grid gap-2">
                      <button type="submit" className="btn primary-bg btn-primary text-white mt-auto">
                        Check Detail Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  kategori: PropTypes.array,
  book: PropTypes.array,
};
export default Dashboard;
