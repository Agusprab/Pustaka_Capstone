/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
function DetailProfile() {
  return (
    <div className="row">
      <div className="col-lg-4 col-12 d-block d-lg-none">
        <div className="card card-profile">
          <img src="../../public/img/bg-profile.jpg" alt="Image placeholder" className="card-img-top" />
          <div className="row justify-content-center">
            <div className="col-4 col-lg-4 order-lg-2">
              <div className="mt-n4 mt-lg-n6 mb-4 mb-lg-0">

                <img src="../../public/img/team-2.jpg" className="rounded-circle img-fluid border border-2 border-white" />

              </div>
            </div>
          </div>
          <div className="card-header text-center border-0 pt-0 pt-lg-2 pb-4 pb-lg-3" />
          <div className="card-body pt-0">

            <div className="text-center mt-4">
              <h5>
                Mark Davis
                <span className="font-weight-light">, 35</span>
              </h5>
              <div className="h6 font-weight-300">
                <i className="ni location_pin mr-2" />
                Bucharest, Romania
              </div>
              <div className="h6 mt-4">
                <i className="ni business_briefcase-24 mr-2" />
                Solution Manager - Creative Tim Officer
              </div>
              <div>
                <i className="ni education_hat mr-2" />
                University of Computer Science
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-8 col-12">
        <div className="card">
          <div className="card-header pb-0">
            <div className="d-flex align-items-center">
              <p className="mb-0">Edit Profile</p>
              <button className="btn btn-primary btn-sm ms-auto">Settings</button>
            </div>
          </div>
          <div className="card-body">
            <p className="text-uppercase text-sm">User Information</p>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="example-text-input" className="form-control-label">Username</label>
                  <input className="form-control" type="text" value="lucky.jesse" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="example-text-input" className="form-control-label">Email address</label>
                  <input className="form-control" type="email" value="jesse@example.com" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="example-text-input" className="form-control-label">First name</label>
                  <input className="form-control" type="text" value="Jesse" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="example-text-input" className="form-control-label">Last name</label>
                  <input className="form-control" type="text" value="Lucky" />
                </div>
              </div>
            </div>
            <hr className="horizontal dark" />
            <p className="text-uppercase text-sm">Contact Information</p>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="example-text-input" className="form-control-label">Address</label>
                  <input className="form-control" type="text" value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="example-text-input" className="form-control-label">City</label>
                  <input className="form-control" type="text" value="New York" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="example-text-input" className="form-control-label">Country</label>
                  <input className="form-control" type="text" value="United States" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="example-text-input" className="form-control-label">Postal code</label>
                  <input className="form-control" type="text" value="437300" />
                </div>
              </div>
            </div>
            <hr className="horizontal dark" />
            <p className="text-uppercase text-sm">About me</p>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="example-text-input" className="form-control-label">About me</label>
                  <input className="form-control" type="text" value="A beautiful Dashboard for Bootstrap 5. It is Free and Open Source." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 d-none d-lg-block">
        <div className="card card-profile">
          <img src="../../public/img/bg-profile.jpg" alt="Image placeholder" className="card-img-top" />
          <div className="row justify-content-center">
            <div className="col-4 col-lg-4 order-lg-2">
              <div className="mt-n4 mt-lg-n6 mb-4 mb-lg-0">

                <img src="../../public/img/team-2.jpg" className="rounded-circle img-fluid border border-2 border-white" />

              </div>
            </div>
          </div>
          <div className="card-header text-center border-0 pt-0 pt-lg-2 pb-4 pb-lg-3" />
          <div className="card-body pt-0">

            <div className="text-center mt-4">
              <h5>
                Mark Davis
                <span className="font-weight-light">, 35</span>
              </h5>
              <div className="h6 font-weight-300">
                <i className="ni location_pin mr-2" />
                Bucharest, Romania
              </div>
              <div className="h6 mt-4">
                <i className="ni business_briefcase-24 mr-2" />
                Solution Manager - Creative Tim Officer
              </div>
              <div>
                <i className="ni education_hat mr-2" />
                University of Computer Science
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProfile;
