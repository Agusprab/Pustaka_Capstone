/* eslint-disable no-alert */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../features/authSlice";
import {
  getAllKategori,
  addKategori,
  deleteKategoriById,
  updateKategoriById,
} from "../features/kategoriSlice";

import Aside from "../components/Dashboard/Aside";
import Navbar from "../components/Dashboard/Navbar";
import Dashboard from "../components/Dashboard/Dashboard";
import ListBook from "../components/Dashboard/ListBook";
import ListUser from "../components/Dashboard/ListUser";
import DetailProfile from "../components/Dashboard/DetailProfile";
import Footer from "../components/Dashboard/Footer";
import InputBook from "../components/Dashboard/InputBook";
import InputUser from "../components/Dashboard/InputUser";
import ListKategori from "../components/Dashboard/ListKategori";
import InputKategori from "../components/Dashboard/InputKategori";
import ListPeminjaman from "../components/Dashboard/ListPeminjaman";
import InputPeminjaman from "../components/Dashboard/InputPeminjaman";
import EditBook from "../components/Dashboard/EditBook";
import EditKategori from "../components/Dashboard/EditKategori";
import EditUser from "../components/Dashboard/EditUser";
import EditPeminjaman from "../components/Dashboard/EditPeminjaman";
import {
  getAllBook,
  addBook,
  deleteBookById,
  updateBookById,
} from "../features/bookSlice";
import {
  getAllUsers,
  addUser,
  deleteUserById,
  updateUserById,
} from "../features/userSlice";
import {
  getAllPeminjaman,
  addPeminjaman,
  deletePeminjamanById,
} from "../features/peminjamanSlice";

function AdminPage() {
  const [navbar, setNavbar] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);
  const { kategori, isLoadingKategori } = useSelector(
    (state) => state.kategori
  );
  const { book } = useSelector((state) => state.book);
  const { users, isLoading } = useSelector((state) => state.users);
  const { peminjaman } = useSelector((state) => state.peminjaman);

  useEffect(() => {
    dispatch(getMe());
    dispatch(getAllKategori());
    dispatch(getAllBook());
    dispatch(getAllUsers());
    dispatch(getAllPeminjaman());
  }, [dispatch]);
  // console.log(peminjaman);
  useEffect(() => {
    dispatch(getAllKategori());
  }, [kategori]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [users]);

  useEffect(() => {
    dispatch(getAllBook());
  }, [book]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);

  const isNavbarOpen = (navbarOpen) => {
    // fungsi ini untuk buka tutup navbar
    if (navbarOpen === true) {
      setNavbar("g-sidenav-pinned");
    } else {
      setNavbar("");
    }
  };

  const addNewBook = async (newBook) => {
    const data = await newBook;
    dispatch(addBook(data));
    navigate("/admin/list-book");
  };

  const addKategorihandle = (name) => {
    dispatch(addKategori(name));
    navigate("/admin/list-kategori");
  };

  const addUserhandle = (newUser) => {
    dispatch(addUser(newUser));
    navigate("/admin/list-user");
  };
  const addNewPeminjaman = (newInput) => {
    dispatch(addPeminjaman(newInput));
    navigate("/admin/list-peminjaman-buku");
  };
  // eslint-disable-next-line no-shadow
  const deleteKategori = (uuid) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      dispatch(deleteKategoriById(uuid));
    }
  };

  const deleteUser = (uuid) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUserById(uuid));
    }
  };

  const deleteBook = (uuid) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      dispatch(deleteBookById(uuid));
    }
  };

  const deletePeminjaman = (uuid) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      dispatch(deletePeminjamanById(uuid));
    }
  };

  const editKategori = (uuid, name) => {
    const input = {
      uuid,
      name,
    };
    dispatch(updateKategoriById(input));
    navigate("/admin/list-kategori");
  };

  const editUser = (newUser) => {
    dispatch(updateUserById(newUser));
    navigate("/admin/list-user");
  };

  const editPeminjaman = (newInput) => {
    dispatch(updateUserById(newInput));
    navigate("/admin/list-peminjaman-buku");
  };

  const editBook = (newBook) => {
    dispatch(updateBookById(newBook));
    navigate("/admin/list-book");
  };

  return (
    <div className={`g-sidenav-show bg-gray-100 ${navbar}`}>
      <div className="min-height-300 bg-primary position-absolute w-100" />
      <Aside user={user} />
      <main className="main-content position-relative border-radius-lg ">
        <Navbar isNavbarOpen={isNavbarOpen} user={user} />
        <div className="container-fluid py-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/list-book"
              element={<ListBook book={book} deleteBook={deleteBook} />}
            />
            <Route
              path="/list-user"
              element={
                <ListUser
                  users={users}
                  deleteUser={deleteUser}
                  isLoading={isLoading}
                />
              }
            />
            <Route
              path="/list-kategori"
              element={
                <ListKategori
                  kategori={kategori}
                  deleteKategori={deleteKategori}
                  isLoadingKategori={isLoadingKategori}
                />
              }
            />
            <Route
              path="/list-peminjaman-buku"
              element={
                <ListPeminjaman
                  peminjaman={peminjaman}
                  deletePeminjaman={deletePeminjaman}
                />
              }
            />

            <Route
              path="/detail-profile"
              element={<DetailProfile user={user} />}
            />
            <Route
              path="/add-book"
              element={
                <InputBook kategori={kategori} addNewBook={addNewBook} />
              }
            />
            <Route
              path="/edit-book/:uuid"
              element={
                <EditBook book={book} kategori={kategori} editBook={editBook} />
              }
            />
            <Route
              path="/add-user"
              element={<InputUser addUserhandle={addUserhandle} />}
            />
            <Route
              path="/edit-user/:uuid"
              element={<EditUser users={users} editUser={editUser} />}
            />
            <Route
              path="/add-kategori"
              element={<InputKategori addKategorihandle={addKategorihandle} />}
            />
            <Route
              path="/edit-kategori/:uuid"
              element={
                <EditKategori kategori={kategori} editKategori={editKategori} />
              }
            />
            <Route
              path="/add-peminjaman-buku"
              element={
                <InputPeminjaman
                  peminjaman={peminjaman}
                  addNewPeminjaman={addNewPeminjaman}
                />
              }
            />
            <Route
              path="/edit-peminjaman"
              element={
                <EditPeminjaman
                  peminjaman={peminjaman}
                  editPeminjaman={editPeminjaman}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default AdminPage;
