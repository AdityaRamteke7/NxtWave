import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/home";
import AddResourcePage from "../src/pages/addResourcePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-resource" element={<AddResourcePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
