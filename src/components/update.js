import React, { useState } from "react"; // Import useState
import axios from "axios";
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

function DataMurid() {
    const [updateData, setUpdateData] = useState({
        id: "",
        nama: "",
        kelas: "",
        nik: "",
        gender: ""
    });

    const handleUpdateDataChange = (e) => {
        const { name, value } = e.target;
        setUpdateData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdate = (id) => {
        axios.put(`http://localhost:3030/data_murid/${id}`, updateData)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil!',
                    text: 'Data telah diperbarui.',
                });
            })
            .catch((error) => {
                console.error("Error updating user:", error);
                alert("Terjadi kesalahan saat memperbarui data.");
            });
    };

    return (
        <div className="container mt-5">
            {/* Update Form */}
            <Form>
                <Form.Group className="mb-3" controlId="formNama">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Masukkan Nama"
                        name="nama"
                        value={updateData.nama}
                        onChange={handleUpdateDataChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formKelas">
                    <Form.Label>Kelas</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Masukkan Kelas"
                        name="kelas"
                        value={updateData.kelas}
                        onChange={handleUpdateDataChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNik">
                    <Form.Label>NIK</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Masukkan NIK"
                        name="nik"
                        value={updateData.nik}
                        onChange={handleUpdateDataChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Masukkan Gender"
                        name="gender"
                        value={updateData.gender}
                        onChange={handleUpdateDataChange}
                    />
                </Form.Group>
                <Button variant="primary" onClick={() => handleUpdate(updateData.id)}>
                    Simpan Perubahan
                </Button>
            </Form>
        </div>
    );
}

export default DataMurid;
