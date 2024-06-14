/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { imageDB } from '../../config';
import useInput from '../../hooks/useInput';

function InputBook({ kategori, addNewBook }) {
  if (kategori) {
    const { book, isError, message } = useSelector((state) => state.book);
    const getLastId = book && book.length > 0 ? book[book.length - 1].id + 1 : 0;
    const [judul, setJudul] = useInput('');
    const [cover, setCover] = useState('');
    const [qty, setQty] = useInput();
    const [penulis, setPenulis] = useInput();
    const [penerbit, setPenerbit] = useInput();
    const [sinopsis, setSinopsis] = useInput();
    const [tahun_terbit, setTahun_terbit] = useInput();
    const [kategoriId, setKategoriId] = useInput();
    const inputBookHandler = async (e) => {
      e.preventDefault();
      const newBook = {
        judul, penulis, penerbit, cover, sinopsis, tahun_terbit, qty, kategoriId,
      };

      if (cover) {
        const imgRef = ref(imageDB, `images/${uuidv4()}`);
        await uploadBytes(imgRef, cover);
        const url = await getDownloadURL(imgRef);
        newBook.cover = url;
      }

      addNewBook(newBook);
    };

    return (
      <div className="row">
        <form onSubmit={inputBookHandler}>
          <div className="col-12">
            <div className="card mb-4">
              <div className="card-header pb-0">
                <h6>Form Add Book</h6>
              </div>
              { isError && (
              <p className="text-left text-danger">

                { message }
              </p>
              )}
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
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
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
                      Judul Book
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      value={judul}
                      onChange={setJudul}
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                      <option value="" hidden>--Select--</option>
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
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">
                      Default file input example
                    </label>
                    <input className="form-control" type="file" id="formFile" onChange={(e) => setCover(e.target.files[0])} />

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
}

export default InputBook;
