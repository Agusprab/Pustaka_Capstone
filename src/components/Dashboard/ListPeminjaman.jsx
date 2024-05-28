/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';

function ListPeminjaman() {
  return (
    <div className="row">

      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h6>Authors table</h6>
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
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Created At</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">ID Peminjaman</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">ID User</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">ID Book</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">tanggal pinjam</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">tanggal kembali</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employed</th>
                    <th className="text-secondary opacity-7" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">23/04/24</span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">PMJ123456</span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">USR123</span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">BKU123</span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">23/04/24</span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">23/04/24</span>
                    </td>
                    <td className="align-middle text-center text-sm">
                      <span className="badge badge-sm bg-gradient-success">Online</span>
                    </td>
                    <td className="align-middle">
                      <a href="" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">23/04/24</span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">PMJ123456</span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">USR123</span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">BKU123</span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">23/04/24</span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">23/04/24</span>
                    </td>
                    <td className="align-middle text-center text-sm">
                      <span className="badge badge-sm bg-gradient-success">Online</span>
                    </td>
                    <td className="align-middle">
                      <a href="" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">23/04/24</span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">PMJ123456</span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">USR123</span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">BKU123</span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">23/04/24</span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">23/04/24</span>
                    </td>
                    <td className="align-middle text-center text-sm">
                      <span className="badge badge-sm bg-gradient-success">Online</span>
                    </td>
                    <td className="align-middle">
                      <a href="" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                        Edit
                      </a>
                    </td>
                  </tr>
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
