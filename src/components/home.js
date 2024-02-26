import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import ApexCharts from "apexcharts";
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
    renderChart(); // Initialize ApexCharts
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

  const renderChart = () => {
    const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'];
  
    var options = {
      series: [{
        data: [21, 22, 10, 28, 16, 21, 13, 30]
      }],
      chart: {
        height: 350,
        type: 'bar',
        events: {
          click: function(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: colors,
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        labels: {
          style: {
            colors: colors,
            fontSize: '12px'
          }
        }
      }
    };
  
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  };
  

  return (
    <div className="container mt-5">
      <div id="chart"></div> {/* Graph goes here */}
      <div className="d-flex justify-content-between mb-3">
        <div className="text-end">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleFilter}
          />
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
          </tr>
        </thead>
        <tbody>
          {dataMurid
            .filter((row) =>
              row.nama.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((murid, index) => (
              <tr key={murid.id}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{murid.nama}</td>
                <td className="text-center">{murid.kelas}</td>
                <td className="text-center">{murid.nik}</td>
                <td className="text-center">{murid.gender}</td>
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
            <button onClick={handleUpdate}>Update</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default DataMurid;
