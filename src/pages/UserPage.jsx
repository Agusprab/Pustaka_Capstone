/* eslint-disable no-alert */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from '../features/authSlice';

import Aside from '../components/Dashboard/Aside';
import Navbar from '../components/Dashboard/Navbar';
import Dashboard from '../components/UserDashboard/Dashboard';
import DetailProfile from '../components/Dashboard/DetailProfile';
import Footer from '../components/Dashboard/Footer';
import ListPeminjaman from '../components/UserDashboard/ListPeminjaman';
import { getAllPeminjaman } from '../features/peminjamanSlice';
import { getAllKategori} from '../features/kategoriSlice';
import { getAllBook } from '../features/bookSlice';

function UserPage() {
  const [navbar, setNavbar] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);
  const { peminjaman } = useSelector((state) => state.peminjaman);
  const { kategori } = useSelector((state) => state.kategori);
  const { book } = useSelector((state) => state.book);
  
  useEffect(() => {
    dispatch(getMe());
    dispatch(getAllPeminjaman());
    dispatch(getAllKategori());
    dispatch(getAllBook());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate('/login');
    }
  }, [isError, navigate]);

  const isNavbarOpen = (navbarOpen) => {
    // fungsi ini untuk buka tutup navbar
    if (navbarOpen === true) {
      setNavbar('g-sidenav-pinned');
    } else {
      setNavbar('');
    }
  };

  return (
    <div className={`g-sidenav-show bg-gray-100 ${navbar}`}>
      <div className="min-height-300 bg-primary position-absolute w-100" />
      <Aside user={user} />
      <main className="main-content position-relative border-radius-lg ">
        <Navbar isNavbarOpen={isNavbarOpen} user={user} />
        <div className="container-fluid py-4">
          <Routes>
            <Route path="/" element={<Dashboard kategori={kategori} book={book} />} />

            <Route path="/list-peminjaman-buku" element={<ListPeminjaman user={user} peminjaman={peminjaman} />} />

            <Route
              path="/detail-profile"
              element={<DetailProfile user={user} />}
            />
          </Routes>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default UserPage;
