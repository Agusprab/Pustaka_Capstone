/* eslint-disable react/require-default-props */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function EditKategori({ kategori, editKategori }) {
  if (kategori) {
    const { uuid } = useParams();
    const findKategori = kategori.find((item) => item.uuid === uuid);
    const [cathegory, setCathegory] = useInput(findKategori.name);

    const editHandler = (e) => {
      e.preventDefault();
      editKategori(uuid, cathegory);
    };
    return (
      <div className="row">
        <form onSubmit={editHandler}>
          <div className="col-12">
            <div className="card mb-4">
              <div className="card-header pb-0">
                <h6>Edit Cathegory</h6>
              </div>

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
                      value={findKategori.id}
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
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
EditKategori.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  kategori: PropTypes.array,
  editKategori: PropTypes.func,
};

export default EditKategori;
