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
import DetailBook from '../components/UserDashboard/DetailBook';
import { getAllPeminjaman } from '../features/peminjamanSlice';
import { getAllKategori } from '../features/kategoriSlice';
import { getAllBook } from '../features/bookSlice';
import { addPeminjaman } from '../features/peminjamanSlice';
import NotFoundPage from '../components/Dashboard/404Page';
import { updateUserById } from '../features/userSlice';

function UserPage() {
  const [navbar, setNavbar] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);
  const { peminjaman, isLoadingPmj, messagePeminjaman } = useSelector((state) => state.peminjaman);
  const { kategori } = useSelector((state) => state.kategori);
  const { book } = useSelector((state) => state.book);
  const { messageUser } = useSelector((state) => state.users);

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
    if (user && user.role === 'admin') {
      navigate('/admin');
    }
  }, [isError, user, navigate]);

  useEffect(() => {
    dispatch(getAllPeminjaman());
  }, [messagePeminjaman]);

  useEffect(() => {
    dispatch(getMe());
  }, [messageUser]);

  const isNavbarOpen = (navbarOpen) => {
    // fungsi ini untuk buka tutup navbar
    if (navbarOpen === true) {
      setNavbar('g-sidenav-pinned');
    } else {
      setNavbar('');
    }
  };
  const addNewPeminjaman = (newPeminjaman) => {
    if (window.confirm('Apakah anda ingin mengajukan peminjaman buku ini?')) {
      dispatch(addPeminjaman(newPeminjaman));
    }
    navigate('/user/list-peminjaman-buku');
  };
  const updateDetailProfile = (newUser) => {
    dispatch(updateUserById(newUser));
    alert('Profile Updated');
  };

  if (user) {
    return (
      <div className={`g-sidenav-show bg-gray-100 ${navbar}`}>
        <div className="min-height-300 bg-primary position-absolute w-100" />
        <Aside user={user} />
        <main className="main-content position-relative border-radius-lg ">
          <Navbar isNavbarOpen={isNavbarOpen} user={user} />
          <div className="container-fluid py-4">
            <Routes>
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/" element={<Dashboard kategori={kategori} book={book} />} />

              <Route path="/list-peminjaman-buku" element={<ListPeminjaman user={user} peminjaman={peminjaman} isLoadingPmj={isLoadingPmj} />} />
              <Route path="/detail-book/:uuid" element={<DetailBook book={book} user={user} addPeminjaman={addNewPeminjaman} />} />
              <Route
                path="/detail-profile"
                element={<DetailProfile user={user} updateUser={updateDetailProfile} />}
              />
            </Routes>
            <Footer />
          </div>
        </main>
      </div>
    );
  }

  if (!user) {
    return null;
  }
}

export default UserPage;
