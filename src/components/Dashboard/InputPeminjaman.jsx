/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/label-has-associated-control */

function InputPeminjaman() {
  return (
    <div className="row">
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
                  NAMA USER
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="User"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-2">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  JUDUL BUKU
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Judul"
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
                >
                  <option selected>--Select--</option>
                  <option value="1">Diajukan</option>
                  <option value="2">Dipinjamkan</option>
                  <option value="3">Selesai</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-4">
              <button className="btn btn-primary">Simpan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputPeminjaman;
