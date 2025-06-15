// QueueListPage.jsx
import React, { useEffect, useState } from "react";
import QueueList from "./QueueList";

const QueueListPage = () => {
  const [list, setList] = useState({ A: [], B: [], C: [] });

  useEffect(() => {
    const saved = localStorage.getItem("queueList");
    if (saved) {
      setList(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">📋 Daftar Nomor Antrian</h2>
      <QueueList list={list} />
    </div>
  );
};

export default QueueListPage;
