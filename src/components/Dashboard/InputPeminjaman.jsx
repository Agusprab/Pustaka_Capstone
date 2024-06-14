/* eslint-disable react/require-default-props */
/* eslint-disable camelcase */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function InputPeminjaman({ addPeminjaman }) {
  const [userId, setUserId] = useInput();
  const [bookId, setBookId] = useInput();
  const [tanggal_pinjam, setTanggal_pinjam] = useInput();
  const [tanggal_kembali, setTanggal_kembali] = useInput(null);
  const [status, setStatus] = useInput();

  const handleInputPeminjamaan = (e) => {
    e.preventDefault();
    const newPeminjaman = {
      tanggal_pinjam, tanggal_kembali, status, userId, bookId,
    };
    addPeminjaman(newPeminjaman);
  };
  return (
    <div className="row">
      <form onSubmit={handleInputPeminjamaan}>
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <h5>Edit Peminjaman</h5>
            </div>

            <div className="card-body px-0 pt-0 pb-2" />
            <div className="row">
              <div className="col-lg-6">
                <div className="p-2">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    ID USER
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    value={userId}
                    onChange={setUserId}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="p-2">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    ID BUKU
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    value={bookId}
                    onChange={setBookId}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="p-2">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    TANGGAL PINJAM
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="password"
                    value={tanggal_pinjam}
                    onChange={setTanggal_pinjam}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="p-2">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    TANGGAL KEMBALI
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="password"
                    value={tanggal_kembali}
                    onChange={setTanggal_kembali}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="p-2">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    STATUS
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={status}
                    onChange={setStatus}
                  >
                    <option value="" hidden>--Select--</option>
                    <option value="Diajukan">Diajukan</option>
                    <option value="Dipinjamkan">Dipinjamkan</option>
                    <option value="Selesai">Selesai</option>
                    <option value="Ditolak">Ditolak</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 p-4">
                <button type="submit" className="btn btn-primary">Simpan</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

InputPeminjaman.propTypes = {
  addPeminjaman: PropTypes.func,
};

export default InputPeminjaman;
