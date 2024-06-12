/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/react-in-jsx-scope */
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { convertToIndonesianDate } from "../../utils";

function ListPeminjaman({ peminjaman }) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h6>Peminjaman table</h6>
            <Link className="btn btn-primary" to="/admin/add-peminjaman-buku">
              <i className="fa fa-plus" aria-hidden="true" />
              &nbsp; Tambah Peminjaman
            </Link>
          </div>

          <div className="card-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Nama User
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Judul Buku
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
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Action
                    </th>
                    <th className="text-secondary opacity-7" />
                  </tr>
                </thead>
                <tbody>
                  {peminjaman &&
                    peminjaman.map((peminjaman) => (
                      <tr key={peminjaman.uuid}>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold">
                            {peminjaman.user.name}
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold">
                            {peminjaman.book.judul}
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold">
                            {convertToIndonesianDate(peminjaman.tanggal_pinjam)}
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold">
                            {convertToIndonesianDate(
                              peminjaman.tanggal_kembali
                            )}
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold">
                            {peminjaman.status}
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <Link
                            to="/admin/edit-peminjaman"
                            className="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit Peminjaman"
                          >
                            Edit
                          </Link>
                          |
                          <a
                            href=""
                            className="text-danger font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Delete Peminjaman"
                          >
                            Delete
                          </a>
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
ListPeminjaman.propTypes = { peminjaman: propTypes.array };
export default ListPeminjaman;
