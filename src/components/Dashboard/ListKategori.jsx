/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/react-in-jsx-scope */
import { Link } from "react-router-dom";

function ListKategori() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h6>Authors table</h6>
            <Link className="btn btn-primary" to="/admin/add-kategori">
              <i className="fa fa-plus" aria-hidden="true" />
              &nbsp; Tambah Kategori
            </Link>
          </div>

          <div className="card-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      ID Kategori
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Nama Kategori
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Employed
                    </th>
                    <th className="text-secondary opacity-7" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">
                        KTG123
                      </span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">
                        PELAJARAN
                      </span>
                    </td>
                    <td className="align-middle text-center">
                      <a
                        href=""
                        className="text-secondary font-weight-bold text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Edit
                      </a>
                      |
                      <a
                        href=""
                        className="text-secondary font-weight-bold text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">
                        KTG123
                      </span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">
                        NOVEL
                      </span>
                    </td>
                    <td className="align-middle text-center">
                      <a
                        href=""
                        className="text-secondary font-weight-bold text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Edit
                      </a>
                      |
                      <a
                        href=""
                        className="text-secondary font-weight-bold text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">
                        KTG123
                      </span>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs font-weight-bold">
                        NOVEL
                      </span>
                    </td>
                    <td className="align-middle text-center">
                      <a
                        href=""
                        className="text-secondary font-weight-bold text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Edit
                      </a>
                      |
                      <a
                        href=""
                        className="text-secondary font-weight-bold text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
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

export default ListKategori;
