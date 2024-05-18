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
          <div className="col-md-7">
            <div className="row h-100">
              <div className="col-md-12 d-flex flex-column justify-content-center">
                <div className="px-5">
                  <h1 className="text-5xl font-bold text-indigo">
                    Selamat Datang di{" "}
                    <span className="text-indigo">PUSTAKA</span>!
                  </h1>
                  <p className="mt-4 text-4xl text-black">
                    Mari Jelajahi Dunia Pengetahuan di Pustaka Kami!
                  </p>
                  <div className="mt-5">
                    <button className="btn btn-lg btn-primary me-2">
                      Let's Start
                    </button>
                    <button className="btn btn-lg btn-outline-primary">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <img loading="lazy" src={logo} className="img-fluid" />
          </div>
        </div>
      </div>
      <div
        className="bg-primary text-white py-5 rounded-5"
        style={{ height: "700px" }}
      >
        <div className="container h-100 ">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-md-5 d-flex justify-content-center align-items-center">
              <img loading="lazy" src={logo2} className="img-fluid" />
            </div>
            <div className="col-md-7">
              <div className="row h-100 justify-content-center align-items-center">
                <div className="col-md-12">
                  <div className="px-5">
                    <h1 className="text-5xl font-bold text-indigo">
                      Apa itu PUSTAKA?
                    </h1>
                    <div className="mt-4 text-4xl">
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

      <div className="container mt-5 text-center" style={{ height: "700px" }}>
        <div className="row justify-content-center align-items-center h-100">
          <div>
            <h1 className="text-center"> Keunggulan Pustaka</h1>
            <div className="row  justify-content-center align-items-center mt-5 gap-5 pb-5">
              <div className="col-md-3 ">
                <div
                  className="shadow rounded-4 border-0 mt-5 row align-items-center"
                  style={{ width: "340px", height: "340px" }}
                >
                  <div>
                    <img loading="lazy" src={fitur1} className="img-fluid" />
                    <p>Kemudahan Peminjaman dan Pengembalian</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div
                  className="shadow rounded-4 border-0 row align-items-center"
                  style={{ width: "340px", height: "340px" }}
                >
                  <div>
                    <img loading="lazy" src={fitur2} className="img-fluid" />

                    <p> Pencarian Mudah</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div
                  className="shadow rounded-4 border-0 mt-5 row align-items-center"
                  style={{ width: "340px", height: "340px" }}
                >
                  <img loading="lazy" src={fitur3} className="img-fluid" />
                  <p> Peminjaman Tanpa Batas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 " style={{ height: "700px" }}>
        <div className="row justify-content-center align-items-center h-100">
          <div>
            <h1 className="mb-3"> Mudah dan Cepat dalam Peminjaman</h1>
            <div className="row justify-content-center h-100">
              <div className="col-md-1">
                <img src={list} style={{ height: "363px" }} />
              </div>
              <div className="col-md-6">
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
              <div className="col-md-5 d-flex justify-content-center align-items-center">
                <img loading="lazy" src={logo3} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
