/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import {
  ref, uploadBytes, getDownloadURL, deleteObject,
} from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import useInput from '../../hooks/useInput';
import { imageDB } from '../../config';

function EditBook({ book, kategori, editBook }) {
  if (book) {
    const { uuid } = useParams();
    const findBook = book.find((item) => item.uuid === uuid);
    const [judul, setJudul] = useInput(findBook.judul);
    const [cover, setCover] = useState(findBook.cover);
    const [qty, setQty] = useInput(findBook.qty);
    const [penulis, setPenulis] = useInput(findBook.penulis);
    const [penerbit, setPenerbit] = useInput(findBook.penerbit);
    const [sinopsis, setSinopsis] = useInput(findBook.sinopsis);
    const [tahun_terbit, setTahun_terbit] = useInput(findBook.tahun_terbit);
    const [kategoriId, setKategoriId] = useInput(findBook.kategoriId);

    const handleEditBook = async (e) => {
      e.preventDefault();
      const newBook = {
        judul, penulis, penerbit, cover, sinopsis, tahun_terbit, qty, kategoriId, uuid,
      };

      // Check if the cover is not the default image
      if (findBook.cover !== cover) {
        if (findBook.cover) {
          // Extract the path from the URL
          const imagePath = findBook.cover.split('/o/')[1].split('?')[0];

          // Decode the path
          const decodedPath = decodeURIComponent(imagePath);

          // Create a reference to the old image
          const oldImgRef = ref(imageDB, decodedPath);

          // Delete the old image
          await deleteObject(oldImgRef).catch((error) => {
            console.error('Error deleting old image: ', error);
          });
        }
        const imgRef = ref(imageDB, `images/${uuidv4()}`);
        await uploadBytes(imgRef, cover);
        const url = await getDownloadURL(imgRef);
        newBook.cover = url;
      }

      editBook(newBook);
    };
    return (
      <div className="row">
        <form onSubmit={handleEditBook}>
          <div className="col-12">
            <div className="card mb-4">
              <div className="card-header pb-0">
                <h6>Edit Book</h6>
              </div>

              <div className="card-body px-0 pt-0 pb-2" />
              <div className="row">
                <div className="col-lg-6">
                  <div className="p-2">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      ID Book
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      value={findBook.id}
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
                      Judul Book
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      value={judul}
                      onChange={setJudul}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="p-2">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Penulis
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      value={penulis}
                      onChange={setPenulis}
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="p-2">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Penerbit
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      value={penerbit}
                      onChange={setPenerbit}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="p-2">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Sinopsis
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      value={sinopsis}
                      onChange={setSinopsis}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="p-2">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Tahun Terbit
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleFormControlInput1"
                      value={tahun_terbit}
                      onChange={setTahun_terbit}
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="p-2">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Kategori
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={kategoriId}
                      onChange={setKategoriId}
                    >
                      {kategori && kategori.map((data) => (
                        <option key={data.id} value={data.id}>{data.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="p-2">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      QTY Buku
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleFormControlInput1"
                      value={qty}
                      onChange={setQty}
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">
                      Default file input example
                    </label>
                    <input className="form-control" type="file" id="formFile" onChange={(e) => setCover(e.target.files[0])} />
                    <img src={cover} alt="" style={{ width: '50px' }} className="mt-2" />
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
EditBook.propTypes = {
  book: PropTypes.array,
  kategori: PropTypes.array,
};

export default EditBook;
