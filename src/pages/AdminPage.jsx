/* eslint-disable react/no-unescaped-entities */
import Aside from "../components/Dashboard/Aside";
import Navbar from "../components/Dashboard/Navbar";
import Dashboard from "../components/Dashboard/Dashboard";
import ListBook from "../components/Dashboard/ListBook";
import ListUser from "../components/Dashboard/ListUser";
import Footer from "../components/Dashboard/Footer";
import { Routes, Route } from 'react-router-dom';
function AdminPage() {
  return(
    <div className="g-sidenav-show   bg-gray-100">
        <div className="min-height-300 bg-primary position-absolute w-100"></div>
        <Aside/>
        <main className="main-content position-relative border-radius-lg ">
            <Navbar/>
            <div className="container-fluid py-4">
                <Routes>                
                    <Route path="/" element={<Dashboard />}></Route>
                    <Route path="/list-book" element={<ListBook />}></Route>
                    <Route path="/list-user" element={<ListUser />}></Route>
                </Routes>
            <Footer/>
            </div>
         </main>
    </div>
  )
}

export default AdminPage;