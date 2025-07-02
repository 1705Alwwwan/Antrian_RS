import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import QueueApp from "./QueueApp";
import QueueList from "./QueueList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QueueApp />} />
        <Route path="/daftar-antrian" element={<QueueList />} />
      </Routes>
    </Router>
  );
}

export default App;
