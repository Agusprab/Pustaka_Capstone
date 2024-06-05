/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-unknown-property */

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, reset } from '../../features/authSlice';

function Navbar({ isNavbarOpen, user }) {
  const [navbarOpen, setNavbarOpen] = useState(true);
  const location = useLocation();
  const sidebarHandler = (e) => {
    // fungsi ini akan mengirim boolean ke admin page ketika user click tombol sidebar
    e.preventDefault();
    isNavbarOpen(navbarOpen);
    setNavbarOpen(!navbarOpen);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate('/');
  };

  // eslint-disable-next-line consistent-return
  const namePagesHandler = () => {
    // Fungsi ini digunakan untuk menentukan page mana yang sedang aktif
    const filterLocation = location.pathname.split('/admin/')[1];
    if (!filterLocation) {
      return 'Dashboard';
    }
    if (filterLocation === 'list-book') {
      return 'List Book';
    }
    if (filterLocation === 'list-user') {
      return 'List User';
    }
    if (filterLocation === 'list-kategori') {
      return 'List Kategori';
    }
    if (filterLocation === 'list-peminjaman-buku') {
      return 'List Peminjaman Buku';
    }
    if (filterLocation === 'detail-profile') {
      return 'Detail Profile';
    }

    if (filterLocation === 'add-book') {
      return 'Add Book';
    }
    if (filterLocation === 'add-user') {
      return 'Add User';
    }
    if (filterLocation === 'add-book') {
      return 'Add Book';
    }
    if (filterLocation === 'add-kategori') {
      return 'Add Kategori';
    }
    if (filterLocation === 'add-peminjaman-buku') {
      return 'Add Peminjaman Buku';
    }
  };

  return (
    <>
      {/* <!-- Navbar --> */}
      <nav
        className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl "
        id="navbarBlur"
        data-scroll="false"
      >
        <div className="container-fluid py-1 px-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
              <li className="breadcrumb-item text-sm">
                <a className="opacity-5 text-white" href="">
                  Pages
                </a>
              </li>
              <li
                className="breadcrumb-item text-sm text-white active"
                aria-current="page"
              >
                {namePagesHandler()}
              </li>
            </ol>
            <h6 className="font-weight-bolder text-white mb-0">
              {namePagesHandler()}
            </h6>
          </nav>
          <div
            className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
            id="navbar"
          >
            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
              {/* <div className="input-group">
                <span className="input-group-text text-body"><i className="fas fa-search" aria-hidden="true" /></span>
                <input type="text" className="form-control" placeholder="Type here..." />
              </div> */}
            </div>
            <ul className="navbar-nav  justify-content-end">
              <li className="nav-item d-xl-none ps-3 px-3 d-flex align-items-center">
                <Link
                  className="nav-link text-white p-0"
                  id="iconNavbarSidenav"
                  onClick={sidebarHandler}
                >
                  <div className="sidenav-toggler-inner">
                    <i className="sidenav-toggler-line bg-white" />
                    <i className="sidenav-toggler-line bg-white" />
                    <i className="sidenav-toggler-line bg-white" />
                  </div>
                </Link>
              </li>
              <li className="nav-item dropdown pe-2 d-flex align-items-center">
                <a
                  href=""
                  className="nav-link text-white p-0"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-user me-sm-1" />
                  <span className="d-sm-inline d-none">{user && user.name } </span>
                </a>
                <ul
                  className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li className="mb-2">
                    <Link
                      className="dropdown-item border-radius-md"
                      to="/admin/detail-profile"
                    >
                      <div className="icon icon-shape icon-sm">
                        <i className="ni ni-single-02 text-dark text-sm opacity-10" />
                      </div>
                      <span className="nav-link-text ms-1">Profile</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <button
                      className="dropdown-item border-radius-md"
                      onClick={logout}
                    >
                      <div className="icon icon-shape icon-sm">
                        <i
                          className="fa fa-sign-out text-dark fs-5"
                          aria-hidden="true"
                        />
                      </div>
                      <span className="nav-link-text ms-1">Sign Out</span>
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- End Navbar --> */}
    </>
  );
}

Navbar.propTypes = {
  isNavbarOpen: PropTypes.func.isRequired,
};

export default Navbar;
