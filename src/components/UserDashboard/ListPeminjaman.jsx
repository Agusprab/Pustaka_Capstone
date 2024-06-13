/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { convertToIndonesianDate } from '../../utils';

function ListPeminjaman({ user, peminjaman }) {
  console.log(peminjaman);
  console.log(user);
  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h6>Riwayat Peminjaman</h6>
          </div>
          <div className="card-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr>
                    
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Book
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Kategori
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Tanggal Pinjam
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Tanggal Kembali
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Status
                    </th>
                  
                    <th className="text-secondary opacity-7" />
                  </tr>
                </thead>
                <tbody>
                  {peminjaman && peminjaman
                    .filter((pjm) => user.uuid === pjm.user.uuid)
                    .map((pjm) => (
                      <tr key={pjm.uuid}>

                        
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold">
                            {pjm.book.judul}
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold">
                            {pjm.book.kategori.name}
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold">
                            {convertToIndonesianDate(pjm.tanggal_pinjam)}
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold">
                            {convertToIndonesianDate(pjm.tanggal_kembali)}
                          </span>
                        </td>
                        <td className="align-middle text-center text-sm">
                          <span className="badge badge-sm bg-gradient-success">
                            {pjm.status}
                          </span>
                        </td>
                        
                      </tr>
                    ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListPeminjaman;
