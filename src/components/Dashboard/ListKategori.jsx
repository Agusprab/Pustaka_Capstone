/* eslint-disable react/require-default-props */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ListKategori({ kategori, deleteKategori }) {
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
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ">
                      Nama Kategori
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Employed
                    </th>
                    <th className="text-secondary opacity-7" />
                  </tr>
                </thead>
                <tbody>
                  {kategori && kategori.map((kategori) => (
                    <tr key={kategori.uuid}>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">
                          {kategori.id}
                        </span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">
                          {kategori.name}
                        </span>
                      </td>
                      <td className="align-middle text-center">
                        <Link
                          to={`/admin/edit-kategori/${kategori.uuid}`}
                          className="text-secondary font-weight-bold text-xs"
                        >
                          Edit
                        </Link>
                        |
                        <Link
                          className="text-danger font-weight-bold text-xs"
                          onClick={() => deleteKategori(kategori.uuid)}
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}
                  {!kategori && (
                    <tr>
                      <td colSpan="4" className="text-center">
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </td>
                    </tr>

                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ListKategori.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  kategori: PropTypes.array,
  deleteKategori: PropTypes.func,
};

export default ListKategori;
