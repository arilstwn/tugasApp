import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import Swal from "sweetalert2";

function DataMurid() {
  const [dataMurid, setDataMurid] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    nama: "",
    kelas: "",
    nik: "",
    gender: "",
  });

  useEffect(() => {
    getAllDataMurid();
  }, []);

  const getAllDataMurid = () => {
    axios
      .get("http://localhost:3030/data_murid")
      .then((res) => {
        setDataMurid(res.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };

  const handleFilter = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = dataMurid.filter((row) =>
    row.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleUpdateForm = (id, nama, kelas, nik, gender) => {
    setEditMode(true);
    setEditData({ id, nama, kelas, nik, gender });
  };

  const handleUpdateDataChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:3030/data_murid/${editData.id}`,
        editData
      );
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Data telah diperbarui.",
      });
      setEditMode(false);
      getAllDataMurid(); // Refresh data
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Terjadi kesalahan saat memperbarui data.");
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3030/data_murid/${id}`);
      // Tampilkan SweetAlert ketika berhasil
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Data telah dihapus.",
      });
      getAllDataMurid(); // Refresh data
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Terjadi kesalahan saat menghapus data.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-3">
        <a
          href="/tambah_data"
          className="btn btn-primary"
          style={{ borderRadius: "6px 8px" }}
        >
          Tambah Data
        </a>
        <div className="text-end">
          <span>Search: </span>
          <input type="text" onChange={handleFilter} placeholder="Cari..." />
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center">No</th>
            <th className="text-center">Nama</th>
            <th className="text-center">Kelas</th>
            <th className="text-center">NIK</th>
            <th className="text-center">Gender</th>
            <th className="text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((murid, index) => (
            <tr key={murid.id}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center">{murid.nama}</td>
              <td className="text-center">{murid.kelas}</td>
              <td className="text-center">{murid.nik}</td>
              <td className="text-center">{murid.gender}</td>
              <td className="text-center">
                <button
                  className="btn btn-primary mx-2"
                  onClick={() =>
                    toggleUpdateForm(
                      murid.id,
                      murid.nama,
                      murid.kelas,
                      murid.nik,
                      murid.gender
                    )
                  }
                >
                  Update
                </button>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => {
                    Swal.fire({
                      title: "Apakah Anda yakin?",
                      text: "Anda tidak akan bisa mengembalikan ini!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Ya, hapus saja!",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        deleteUser(murid.id);
                      }
                    });
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {editMode && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            backgroundColor: "#f9f9f9",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2>Edit Data Murid</h2>
          <form className="update-form">
            <div className="form-group">
              <label>Nama: </label>
              <input
                type="text"
                name="nama"
                value={editData.nama}
                onChange={handleUpdateDataChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Kelas: </label>
              <input
                type="text"
                name="kelas"
                value={editData.kelas}
                onChange={handleUpdateDataChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>NIK: </label>
              <input
                type="text"
                name="nik"
                value={editData.nik}
                onChange={handleUpdateDataChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Gender: </label>
              <input
                type="text"
                name="gender"
                value={editData.gender}
                onChange={handleUpdateDataChange}
                className="form-control"
              />
            </div>
            <button
              type="button"
              onClick={handleUpdate}
              className="btn btn-primary mt-4"
              style={{ margin: "5px" }}
            >
              Perbarui
            </button>
            <button
              type="button"
              onClick={() => setEditMode(false)}
              className="btn btn-danger mt-3"
            >
              Batal
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default DataMurid;
