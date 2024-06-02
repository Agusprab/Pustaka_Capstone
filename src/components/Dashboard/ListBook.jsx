/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';

function ListBook() {
  return (
    <div className="row">

      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h6>Authors table</h6>
            <Link className="btn btn-primary" to="/admin/add-book">
              <i className="fa fa-plus" aria-hidden="true" />
                  &nbsp; Tambah Buku
            </Link>
          </div>

          <div className="card-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">ID Book</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Judul</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Cover</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Kategori</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Qty</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Action</th>
                    <th className="text-secondary opacity-7" />
                  </tr>
                </thead>
                <tbody>

                  <tr>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">ASDASDAS</span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">BUKU-1-PP</span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">Geografi</span>
                    </td>

                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">Geografi</span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">982</span>
                    </td>
                    <td className="align-middle text-center">
                      <Link to="/admin/edit-book" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                        Edit
                      </Link>
                      |
                      <a href="" className="text-danger font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                        Delete
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

export default ListBook;
