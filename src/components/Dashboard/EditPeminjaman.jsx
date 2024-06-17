/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function EditPeminjaman({ editPeminjaman, peminjaman, editQtyBook }) {
  if (peminjaman) {
    const { uuid } = useParams();
    const findPeminjaman = (peminjaman && peminjaman.length > 0) ? peminjaman.find((item) => item.uuid === uuid) : null;
    const formattedDate = (findPeminjaman && findPeminjaman.tanggal_kembali) ? findPeminjaman.tanggal_kembali.split('T')[0] : '';
    const [userId] = useInput(findPeminjaman.user.name);
    const [status, setStatus] = useInput(findPeminjaman.status);
    const [tanggal_kembali, setTanggal_Kembali] = useInput(formattedDate);

    const editHandler = (e) => {
      e.preventDefault();
      let newInput;
      if (!tanggal_kembali || tanggal_kembali === null) {
        newInput = {
          uuid,
          userId,
          status,
          tanggal_kembali: null,
        };
      } else {
        newInput = {
          uuid,
          userId,
          status,
          tanggal_kembali,
        };
      }
      editPeminjaman(newInput);
      editQtyBook(findPeminjaman.book, status);
    };
    return (
      <div className="row">
        <form className="col-12" onSubmit={editHandler}>
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
                    Name USER
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    value={userId}
                    disabled
                  />
                </div>
              </div>

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
                    <option value="">
                      --
                      {status}
                      --
                    </option>
                    <option value="" hidden>--Select--</option>
                    <option value="Diajukan">Diajukan</option>
                    <option value="Dipinjamkan">Dipinjamkan</option>
                    <option value="Selesai">Selesai</option>
                    <option value="Ditolak">Ditolak</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-2">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  TANGGAL KEMBALI
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleFormControlInput1"
                  value={tanggal_kembali}
                  onChange={setTanggal_Kembali}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 p-4">
                <button className="btn btn-primary">Simpan</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
EditPeminjaman.propTypes = {
  editPeminjaman: PropTypes.func,
  peminjaman: PropTypes.array,
  editQtyBook: PropTypes.func,
};
export default EditPeminjaman;
