/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/label-has-associated-control */
function InputKategori() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h6>Form Add Cathegory</h6>
          </div>

          <div className="card-body px-0 pt-0 pb-2" />
          <div className="row">
            <div className="col-lg-6">
              <div className="p-2">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  ID Cathegory
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="ex: 012"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-2">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Cathegory Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="kategori"
                />
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

export default InputKategori;
