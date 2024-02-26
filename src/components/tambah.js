import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import Form from 'react-bootstrap/Form'; // Import Form from react-bootstrap
import Swal from 'sweetalert2'; // Import SweetAlert2

function Tambah() {
    const history = useHistory();
    const [nama, setNama] = useState("");
    const [kelas, setKelas] = useState("");
    const [nik, setNik] = useState("");
    const [gender, setGender] = useState("");

    const tambah = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:3030/data_murid", {
                nama,
                kelas,
                nik,
                gender,
            });

            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: 'Data telah ditambahkan.',
            });

            // Arahkan pengguna kembali ke halaman beranda setelah berhasil menambahkan data
            history.push("/table");
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Gagal!',
                text: 'Terjadi kesalahan saat menambahkan data.',
            });
        }
    };

    const handleCancel = () => {
        history.push("/table");
    };

    return (
        <div style={{ padding: "5px" }}>
            <h1 style={{ display: "flex", flexDirection: "column", padding: "20px", backgroundColor: "#2485b9", borderRadius: "30px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}>Form Tambah Data</h1>

            <br />
            <Form onSubmit={tambah} style={{ display: "flex", flexDirection: "column", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "50px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }} >
                <Form.Group className="mb-3">
                    <Form.Label style={{ color: "black" }}>Nama Murid</Form.Label>
                    <Form.Control 
                        name="nama"
                        id="nama"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        type="text"
                        placeholder="Nama Siswa"
                        style={{ marginBottom: "10px", padding: "8px", border: "1px solid #ccc", borderRadius: "10px", transition: "border-color 0.3s", borderColor: "#4070f4", outline: "none" }}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{ color: "black" }}>Kelas</Form.Label>
                    <Form.Control 
                        name="kelas"
                        id="kelas"
                        value={kelas}
                        onChange={(e) => setKelas(e.target.value)}
                        type="text"
                        placeholder="Kelas"
                        style={{ marginBottom: "10px", padding: "8px", border: "1px solid #ccc", borderRadius: "10px", transition: "border-color 0.3s", borderColor: "#4070f4", outline: "none" }}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{ color: "black" }}>NIK</Form.Label>
                    <Form.Control 
                        name="nik"
                        id="nik"
                        value={nik}
                        onChange={(e) => setNik(e.target.value)}
                        type="text"
                        placeholder="NIK" 
                        style={{ marginBottom: "10px", padding: "8px", border: "1px solid #ccc", borderRadius: "10px", transition: "border-color 0.3s", borderColor: "#4070f4", outline: "none" }}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{ color: "black" }}>Gender</Form.Label>
                    <Form.Control 
                        name="gender"
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        type="text"
                        placeholder="Gender" 
                        style={{ marginBottom: "10px", padding: "8px", border: "1px solid #ccc", borderRadius: "10px", transition: "border-color 0.3s", borderColor: "#4070f4", outline: "none" }}
                        required
                    />
                </Form.Group>
                <div>
                    <button type="submit" style={{ backgroundColor: "#4070f4", borderBlock: "8px", paddingBlock: "5px", padding: "5px 5px", border: "none", color: "white", borderRadius: "10px" }}>Submit</button>
                    <button type="button" onClick={handleCancel} style={{ backgroundColor: "#e52121", borderBlock: "8px", paddingBlock: "5px", padding: "5px 5px", border: "none", color: "white", borderRadius: "10px", margin: "50px", marginRight: "15px", marginLeft: "50px" }}>Cancel</button>
                </div>
            </Form>
        </div>

    );
}

export default Tambah;
