/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";
function EditPeminjaman({ editPeminjaman }) {
  const { uuid } = useParams();
  const [userId, setUserId] = useInput("");
  const [status, setStatus] = useInput("");
  const [tanggal_kembali, setTanggal_Kembali] = useInput("");

  const editHandler = (e) => {
    e.preventDefault();
    const newInput = {
      uuid,
      userId,
      status,
      tanggal_kembali,
    };
    console.log(newInput);
    editPeminjaman(newInput);
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
                  ID USER
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
                  <option value="">--Select--</option>
                  <option value="1">Diajukan</option>
                  <option value="2">Dipinjamkan</option>
                  <option value="3">Selesai</option>
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
                placeholder="password"
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
EditPeminjaman.propTypes = {
  editPeminjaman: PropTypes.func,
};
export default EditPeminjaman;
