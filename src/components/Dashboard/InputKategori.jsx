/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/order */
/* eslint-disable import/named */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import PropTypes from 'prop-types';

function InputKategori({ addKategorihandle }) {
  const { kategori, message, isError } = useSelector((state) => state.kategori);
  const getLastId = kategori && kategori.length > 0 ? kategori[kategori.length - 1].id + 1 : 0;
  const [cathegory, setCathegory] = useInput('');

  const handeleSubmit = (e) => {
    e.preventDefault();
    addKategorihandle(cathegory);
  };

  return (
    <div className="row">
      <form onSubmit={handeleSubmit}>
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <h6>Form Add Cathegory</h6>
            </div>
            { isError && <p className="text-center text-danger">{message} </p>}
            <div className="card-body px-0 pt-0 pb-2" />
            <div className="row">
              <div className="col-lg-6">
                <div className="p-2">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    ID Cathegory
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="ex: 012"
                    value={getLastId}
                    disabled
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="p-2">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Cathegory Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="kategori"
                    value={cathegory}
                    onChange={setCathegory}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 p-4">
                <button type="submit" className="btn bg-gradient-primary">
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

InputKategori.propTypes = {
  addKategorihandle: PropTypes.func.isRequired,
};

export default InputKategori;
