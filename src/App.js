import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QueueApp from "./QueueApp";
import QueueList from "./QueueList";
import { HashRouter as Router, Route, Routes } from "react-router-dom";


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
