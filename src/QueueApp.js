import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const QueueApp = () => {
  const [queues, setQueues] = useState({ A: 0, B: 0, C: 0 });
  const [list, setList] = useState({ A: [], B: [], C: [] });
  const [lastReset, setLastReset] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      if (now - lastReset > 24 * 60 * 60 * 1000) {
        setQueues({ A: 0, B: 0, C: 0 });
        setList({ A: [], B: [], C: [] });
        setLastReset(now);
      }
    }, 60000);
    return () => clearInterval(interval);
  }, [lastReset]);

  useEffect(() => {
    localStorage.setItem("queueList", JSON.stringify(list));
  }, [list]);

  const handleTakeNumber = (category) => {
    setQueues((prev) => {
      const newNumber = prev[category] + 1;
      const nomor = category + String(newNumber).padStart(3, '0');
      setList((prevList) => ({
        ...prevList,
        [category]: [...prevList[category], nomor],
      }));
      return { ...prev, [category]: newNumber };
    });
  };

  const getCurrentNumber = () => {
    const entries = Object.entries(queues).map(
      ([key, value]) => `${key}${String(value).padStart(3, '0')}`
    );
    return entries.join(" | ");
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Aplikasi Antrian</h1>
        <p className="lead">Silakan pilih kategori dan ambil nomor antrian Anda</p>
      </div>

      <div className="row justify-content-center mb-4">
        <div className="col-md-8 text-center">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Nomor Saat Ini</h5>
              <h1 className="display-5 fw-bold text-primary">{getCurrentNumber()}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mb-4">
        <div className="col-md-8 text-center">
          <button
            className="btn btn-primary mx-2"
            onClick={() => handleTakeNumber('A')}
          >
            Ambil BPJS (A)
          </button>
          <button
            className="btn btn-warning mx-2"
            onClick={() => handleTakeNumber('B')}
          >
            Ambil Asuransi (B)
          </button>
          <button
            className="btn btn-success mx-2"
            onClick={() => handleTakeNumber('C')}
          >
            Ambil Mandiri (C)
          </button>
        </div>
      </div>

      <div className="text-center">
        <Link to="/daftar-antrian" className="btn btn-outline-secondary mt-3">
          Lihat Daftar Antrian
        </Link>
      </div>
    </div>
  );
};

export default QueueApp;
