/* eslint-disable camelcase */
/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function DetailBook({ book, user, addPeminjaman }) {
  if (book) {
    const { uuid } = useParams();
    const findBook = book.find((item) => item.uuid === uuid);
    const now = new Date().toISOString().substring(0, 10);
    const handlePeminjaman = () => {
      const tanggal_pinjam = now;
      const tanggal_kembali = null;
      const status = 'Diajukan';
      const bookId = findBook.id;
      const userId = user.id;

      const newPeminjaman = {
        tanggal_pinjam, tanggal_kembali, status, userId, bookId,
      };
      addPeminjaman(newPeminjaman);
    };
    return (
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <h6>Detail Book</h6>
            </div>
            <div className="card-body px-0 pt-0 pb-2 ">
              <div className="row p-3">
                <div className="col-lg-4 col-12 text-center">
                  <img src={findBook.cover} alt={findBook.judul} className="img-fluid" style={{ width: '300px' }} />
                </div>
                <div className="col-lg-6 col-12 mt-5 mt-lg-0 mt-xl-0 mt">

                  <h4>{findBook.judul}</h4>
                  <p className="text-justify">{findBook.sinopsis}</p>
                  <p>
                    Penulis :&nbsp;
                    {findBook.penulis}
                    {' '}
                    <br />
                    Penerbit :&nbsp;
                    {' '}
                    {findBook.penerbit}
                    <br />
                    Tahun :&nbsp;
                    {' '}
                    {findBook.tahun_terbit}
                  </p>
                  <div className="d-flex flex-row">

                    <div className="p-2">
                      {findBook.qty > 0 ? (
                        <button className="btn btn-primary " onClick={handlePeminjaman}>
                          <i className="fa fa-plus" aria-hidden="true" />
                          {' '}
                          Ajukan Peminjaman
                        </button>
                      ) : (
                        <button className="btn btn-danger">
                          Stock Habis
                        </button>
                      )}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
DetailBook.propTypes = {
  book: PropTypes.array,
  user: PropTypes.object,
  addPeminjaman: PropTypes.func,
};

export default DetailBook;
