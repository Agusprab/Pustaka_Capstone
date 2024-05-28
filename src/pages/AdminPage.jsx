/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Aside from '../components/Dashboard/Aside';
import Navbar from '../components/Dashboard/Navbar';
import Dashboard from '../components/Dashboard/Dashboard';
import ListBook from '../components/Dashboard/ListBook';
import ListUser from '../components/Dashboard/ListUser';
import DetailProfile from '../components/Dashboard/DetailProfile';
import Footer from '../components/Dashboard/Footer';
import InputBook from '../components/Dashboard/InputBook';
import InputUser from '../components/Dashboard/InputUser';

import ListKategori from '../components/Dashboard/ListKategori';
import InputKategori from '../components/Dashboard/InputKategori';

import ListPeminjaman from '../components/Dashboard/ListPeminjaman';
import InputPeminjaman from '../components/Dashboard/InputPeminjaman';

function AdminPage() {
  const [navbar, setNavbar] = useState('');
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
      <Aside />
      <main className="main-content position-relative border-radius-lg ">
        <Navbar isNavbarOpen={isNavbarOpen} />
        <div className="container-fluid py-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/list-book" element={<ListBook />} />
            <Route path="/list-user" element={<ListUser />} />
            <Route path="/list-kategori" element={<ListKategori />} />
            <Route path="/list-peminjaman-buku" element={<ListPeminjaman />} />

            <Route path="/detail-profile" element={<DetailProfile />} />
            <Route path="/add-book" element={<InputBook />} />
            <Route path="/add-user" element={<InputUser />} />
            <Route path="/add-kategori" element={<InputKategori />} />
            <Route path="/add-peminjaman-buku" element={<InputPeminjaman />} />

          </Routes>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default AdminPage;
