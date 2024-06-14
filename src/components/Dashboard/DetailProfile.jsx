/* eslint-disable react/require-default-props */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function DetailProfile({ user, updateUser }) {
  if (user) {
    const [name, setName] = useInput(user.name);
    const [email, setEmail] = useInput(user.email);
    const [jenisKelamin, setJenisKelamin] = useInput(user.jenisKelamin);
    const [alamat, setAlamat] = useInput(user.alamat);
    const [noTlp, setNoTlp] = useInput(user.noTlp);

    const updateProfile = (e) => {
      e.preventDefault();
      const newProfile = {
        uuid: user.uuid,
        name,
        email,
        jenisKelamin,
        alamat,
        noTlp,
        password: '',
        confPassword: '',
        role: user.role,
      };
      updateUser(newProfile);
    };
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
                  {name}

                </h5>
                <div className="h6 font-weight-300">
                  <i className="ni location_pin mr-2" />
                  {user.role}
                </div>
                <div className="h6 mt-4">
                  <i className="ni business_briefcase-24 mr-2" />
                  {noTlp}
                </div>
                <div>
                  <i className="ni education_hat mr-2" />
                  {alamat}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-12">
          <form onSubmit={updateProfile}>
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex align-items-center">
                  <p className="mb-0">Edit Profile</p>
                  <button className="btn btn-primary btn-sm ms-auto">Update Data</button>
                </div>
              </div>
              <div className="card-body">
                <p className="text-uppercase text-sm">User Information</p>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="example-text-input" className="form-control-label">Email address</label>
                      <input className="form-control" type="email" value={email} onChange={setEmail} disabled />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="example-text-input" className="form-control-label">Name</label>
                      <input className="form-control" type="text" value={name} onChange={setName} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="example-text-input" className="form-control-label">Role</label>
                      <input className="form-control" type="text" value={user.role} disabled />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">

                      <label htmlFor="jenisKelaminInput" className="form-label">
                        JENIS KELAMIN
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        value={jenisKelamin}
                        onChange={setJenisKelamin}
                      >
                        <option value="Laki-Laki">Laki-Laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>

                    </div>
                  </div>
                </div>
                <hr className="horizontal dark" />
                <p className="text-uppercase text-sm">Contact Information</p>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="example-text-input" className="form-control-label">Alamat</label>
                      <input className="form-control" type="text" value={alamat} onChange={setAlamat} />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="example-text-input" className="form-control-label">No Tlp </label>
                      <input className="form-control" type="text" value={noTlp} onChange={setNoTlp} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-4 d-none d-lg-block">
          <div className="card card-profile">
            <img src="../../public/img/bg-profile.jpg" alt="Image placeholder" className="card-img-top" />
            <div className="row justify-content-center">
              <div className="col-4 col-lg-4 order-lg-2">
                <div className="mt-n4 mt-lg-n6 mb-4 mb-lg-0">

                  <img src="https://firebasestorage.googleapis.com/v0/b/capstoneprojek.appspot.com/o/images%2Fvecteezy_profile-user-icon-isolated-on-white-background-vector-eps10_.jpg?alt=media&token=d8d3d4bf-0c2f-430e-a5af-2701a8540b65" className="rounded-circle img-fluid border border-2 border-white" />

                </div>
              </div>
            </div>
            <div className="card-header text-center border-0 pt-0 pt-lg-2 pb-4 pb-lg-3" />
            <div className="card-body pt-0">

              <div className="text-center mt-4">
                <h5>
                  {name}
                </h5>
                <div className="h6 font-weight-300">
                  <i className="ni location_pin mr-2" />
                  {user.role}
                </div>
                <div className="h6 mt-4">
                  <i className="ni business_briefcase-24 mr-2" />
                  {noTlp}
                </div>
                <div>
                  <i className="ni education_hat mr-2" />
                  {alamat}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DetailProfile.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  user: PropTypes.object,
  updateUser: PropTypes.func,
};

export default DetailProfile;
