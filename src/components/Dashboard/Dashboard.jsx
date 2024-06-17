/* eslint-disable no-plusplus */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function Dashboard({
  totalUser, totalBuku, totalKategori, peminjaman,
}) {
  const filterPeminjam = peminjaman && peminjaman.filter((item) => item.status === 'Dipinjamkan');
  const peminjamanPerHari = new Array(7).fill(0);

  filterPeminjam?.forEach((item) => {
    const dayOfWeek = new Date(item.tanggal_pinjam).getDay();
    peminjamanPerHari[dayOfWeek]++;
  });
  const dataPeminjaman = {
    labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
    datasets: [
      {
        label: 'Peminjaman per Hari',
        data: peminjamanPerHari,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  if (totalBuku) {
    return (
      <>
        <div className="row">
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-uppercase font-weight-bold">Total Buku</p>
                      <h5 className="font-weight-bolder mb-3">
                        {totalBuku}
                      </h5>

                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                      <i className="ni ni-books text-lg opacity-10" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-uppercase font-weight-bold">Total User</p>
                      <h5 className="font-weight-bolder mb-3">
                        {totalUser}
                      </h5>

                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                      <i className="ni ni-single-02 text-lg opacity-10" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-uppercase font-weight-bold">Total Peminjam</p>
                      <h5 className="font-weight-bolder mb-3">
                        {peminjaman && peminjaman.filter((item) => item.status === 'Dipinjamkan').length}
                      </h5>

                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                      <i className="ni ni-calendar-grid-58  text-lg opacity-10" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-uppercase font-weight-bold">Total Kategori</p>
                      <h5 className="font-weight-bolder mb-3">
                        {totalKategori}
                      </h5>
                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                      <i className="ni ni-tag text-lg opacity-10" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-12 mb-lg-0 mb-4">
            <div className="card ">
              <div className="card-header pb-0 p-3">
                <div className="d-flex justify-content-between">
                  <h6 className="mb-2">Peminjaman</h6>
                </div>
              </div>
              <div className="table-responsive p-2">
                <div className="chart-container" style={{ width: '100%', height: 'auto' }}>
                  <Line data={dataPeminjaman} options={options} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </>
    );
  }
}

Dashboard.propTypes = {
  totalUser: PropTypes.number,
  totalBuku: PropTypes.number,
  peminjaman: PropTypes.array,
  totalKategori: PropTypes.number,
};

export default Dashboard;
