/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/Navbar";
import logo from "../asset/img/landing-page-1.png";
import logo2 from "../asset/img/landing-page-2.png";
import logo3 from "../asset/img/landing-page-3.png";
import fitur1 from "../asset/img/fitur-1.png";
import fitur2 from "../asset/img/fitur-2.png";
import fitur3 from "../asset/img/fitur-3.png";
import list from "../asset/img/list.png";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ height: "625px" }}>
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-lg-7 col-12">
            <div className="row h-100">
              <div className="col-md-12 d-flex flex-column justify-content-center">
                <div className="px-5">
                  <h1 className="text-5xl font-bold text-indigo mt-lg-0 mt-5">
                    Welcome Datang di{" "}
                    <span className="text-indigo">PUSTAKA</span>!
                  </h1>
                  <p className="mt-4 text-4xl text-black">
                    Mari Jelajahi Dunia Pengetahuan di Pustaka Kami!
                  </p>
                  <div className="mt-5">
                    <button className="btn btn-lg btn-primary me-2">
                      Let's Start Now!
                    </button>
                    <button className="btn btn-lg btn-outline-primary">
                      Learn and Explore More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-12 d-none d-lg-block d-flex justify-content-center align-items-center">
            <img loading="lazy" src={logo} className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="bg-primary text-white py-5 mt-5">
        <div className="container h-100 ">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-5 col-12 d-flex justify-content-center align-items-center">
              <img loading="lazy" src={logo2} className="img-fluid" />
            </div>
            <div className="col-md-7">
              <div className="row h-100 justify-content-center align-items-center">
                <div className="col-md-12">
                  <div className="px-5">
                    <h1
                      className="font-bold text-indigo text-lg-start text-center"
                      style={{ fontSize: "2.5rem" }}
                    >
                      Apa itu PUSTAKA?
                    </h1>
                    <div
                      className="mt-4 mb-5 text-lg-start text-lg-left text-"
                      style={{ fontSize: "1.5rem" }}
                    >
                      Pustaka merupakan platform peminjaman buku berbasis
                      website yang dirancang khusus untuk meningkatkan
                      pengalaman belajar dan membaca di perpustakaan sekolah.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 pt-5 text-center">
        <div className="row justify-content-center align-items-center h-100">
          <div>
            <h1 className="text-center"> Keunggulan Pustaka</h1>
            <div className="row  justify-content-center align-items-center mt-5 gap-5 pb-5">
              <div className="col-md-3 ">
                <div className="shadow rounded-4 border-0 mt-5 row align-items-center">
                  <div>
                    <img loading="lazy" src={fitur1} className="img-fluid" />
                    <p>Kemudahan Peminjaman dan Pengembalian</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="shadow rounded-4 border-0 row align-items-center">
                  <div>
                    <img loading="lazy" src={fitur2} className="img-fluid" />

                    <p> Pencarian Mudah</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="shadow rounded-4 border-0 mt-5 row align-items-center">
                  <img loading="lazy" src={fitur3} className="img-fluid" />
                  <p> Peminjaman Tanpa Batas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-5 mb-5  ">
        <div className="row justify-content-center align-items-center h-100">
          <div>
            <h1 className="mb-5"> Mudah dan Cepat dalam Peminjaman</h1>
            <div className="row justify-content-center h-100 ">
              <div className="col-lg-1 col-1">
                <img src={list} style={{ height: "363px" }} />
              </div>
              <div className="col-lg-6 col-11">
                <h3>Daftar Menjadi Anggota</h3>
                <p className="mb-4">
                  Proses pendaftaran cepat dan mudah, Sehingga kamu bisa segera
                  meminjam buku
                </p>
                <h3 className="m">Cari dan Pesan Buku</h3>
                <p>
                  Gunakan katalog online kami untuk mencari dan memesan buku
                  yang ingin kamu pinjam
                </p>
                <h3>Ambil dan Kembalikan</h3>
                <p>
                  Kunjungi cabang kami untuk mengambil buku dan mengembalikannya
                  tepat waktu
                </p>
              </div>
              <div className="col-lg-5 col-12 d-flex justify-content-center align-items-center">
                <img loading="lazy" src={logo3} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary text-white py-5">
        <div className="container h-100 ">
          <div className="row justify-content-center align-items-center h-100">
            <div className="row">
              <div className="col-lg-3 col-6">
                <h3>Our Location</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.956952493728!2d107.63128067475678!3d-6.895752593103439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7a55a715555%3A0xb8bb411d2516aad6!2sDicoding%20Academy!5e0!3m2!1sid!2sid!4v1716209934514!5m2!1sid!2sid"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="col-lg-3 col-6">
                <h3>Useful Links</h3>
                <p>Home</p>
                <p>About Us</p>
                <p>Superiority</p>
                <p>Tutorial</p>
                <p>Contact</p>
              </div>
              <div className="col-lg-3 mt-lg-0 mt-4 col-6">
                <h3>Our Services</h3>
                <p>Peminjaman Buku</p>
                <p>Perpustakaan Online</p>
              </div>
              <div className="col-lg-3 mt-lg-0 mt-4 col-6">
                <h3>Contact Us</h3>
                <p>Jl. Capstone Dicoding No.6</p>
                <p>Contact : +6281100025001</p>
                <p>Email : pustaka@gmail.com</p>
              </div>
            </div>
            <div>
              <hr className="mt-5" style={{ border: "1px solid white" }} />
            </div>
            <p className="text-center">
              @Copyright PUSTAKA. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
