/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/label-has-associated-control */
function InputPeminjaman() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h6>Form Add Peminjaman</h6>
          </div>

          <div className="card-body px-0 pt-0 pb-2" />
          <div className="row">
            <div className="col-lg-6">
              <div className="p-2">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  ID Book
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-2">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Judul Book
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
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
                  Penulis
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-2">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Penerbit
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="p-2">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Sinopsis
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
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
                  Tahun Terbit
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-2">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Kategori
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>--Select--</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
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
                  QTY Buku
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Default file input example
                </label>
                <input className="form-control" type="file" id="formFile" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-4">
              <button type="button" className="btn bg-gradient-primary">
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputPeminjaman;
