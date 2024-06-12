/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../asset/img/logo-pustaka-biru.png';

function Aside({ user }) {
  const location = useLocation();
  const filterLocationAdmin = location.pathname.split('/admin/')[1];// digunakan untuk memfilter url yang aktif
  const filterLocationUser = location.pathname.split('/user/')[1];// digunakan untuk memfilter url yang aktif
  if (user) {
    return (
      <aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
        <div className="sidenav-header">
          <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav" />
          <Link className="navbar-brand m-0" to="/admin">
            <img src={logo} className="sidebar-logo-admin mx-2 img-fluid" alt="main_logo" />
            <span className="ms-1 font-weight-bold">Pustaka</span>
          </Link>
        </div>
        <hr className="horizontal dark mt-0" />
        <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main" style={{ height: '80%' }}>
          {user.role === 'user' && (
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link className={filterLocationUser === undefined ? 'nav-link active' : 'nav-link'} to="/user">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-zoom-split-in text-primary text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1">Cari Buku</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className={filterLocationUser === 'list-peminjaman-buku' ? 'nav-link active' : 'nav-link'} to="/user/list-peminjaman-buku">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1">List Peminjaman Buku</span>
              </Link>
            </li>

          </ul>
          )}

          {user.role === 'admin' && (
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link className={filterLocationAdmin === undefined ? 'nav-link active' : 'nav-link'} to="/admin">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-tv-2 text-primary text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className={filterLocationAdmin === 'list-book' ? 'nav-link active' : 'nav-link'} to="/admin/list-book">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1">List Buku</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className={filterLocationAdmin === 'list-kategori' ? 'nav-link active' : 'nav-link'} to="/admin/list-kategori">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1">List Kategori</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className={filterLocationAdmin === 'list-peminjaman-buku' ? 'nav-link active' : 'nav-link'} to="/admin/list-peminjaman-buku">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1">List Peminjaman Buku</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className={filterLocationAdmin === 'list-user' ? 'nav-link active' : 'nav-link'} to="/admin/list-user">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-single-02 text-dark text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1">List User</span>
              </Link>
            </li>

          </ul>
          )}
        </div>

      </aside>
    );
  }
}

Aside.propTypes = {
  user: PropTypes.object,
};
export default Aside;
