function InputUser() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h5>Form Add User</h5>
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
                  placeholder="name@example.com"
                ></input>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-1">
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
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="p-2">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    USERNAME
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
                    JENIS KELAMIN
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>--Select--</option>
                    <option value="1">Laki - Laki</option>
                    <option value="2">Perempuan</option>
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
                    EMAIL
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
                    PASSWORD
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="password"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="p-2">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      ALAMAT
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="email"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="p-2">
                    <label>NO.TELEPON</label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="08********"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="p-2">
                    <label>ROLE</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>--Select--</option>
                      <option value="1">User</option>
                      <option value="2">Admin</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 p-4">
                  <button className="btn btn-primary">Kirim</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputUser;
