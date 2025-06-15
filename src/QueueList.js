import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ⬅️ Tambahkan ini
import "bootstrap/dist/css/bootstrap.min.css"; // Jika belum diimpor

const QueueList = () => {
  const [list, setList] = useState({ A: [], B: [], C: [] });

  useEffect(() => {
    const data = localStorage.getItem("queueList");
    if (data) {
      try {
        setList(JSON.parse(data));
      } catch (error) {
        console.error("Gagal parse data dari localStorage", error);
      }
    }
  }, []);

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Daftar Antrian</h2>
      <div className="row">
        {["A", "B", "C"].map((category) => (
          <div className="col-md-4" key={category}>
            <h4 className="text-center">
              {category === "A" ? "BPJS" : category === "B" ? "Asuransi" : "Mandiri"}
            </h4>
            <ul className="list-group">
              {list[category]?.map((nomor, idx) => (
                <li className="list-group-item" key={idx}>
                  {nomor}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Tombol kembali */}
      <div className="text-center mt-5">
        <Link to="/" className="btn btn-outline-primary">
          ⬅️ Kembali ke Halaman Utama
        </Link>
      </div>
    </div>
  );
};

export default QueueList;
