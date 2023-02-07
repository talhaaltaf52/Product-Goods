import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { RingLoader } from "react-spinners";
import './App.css'
import CatalogPage from "./Pages/CatalogPage";
import HomePage from "./Pages/HomePage";


const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loading">
          <RingLoader color="#f47f16" />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Routes>
      )}
    </>
  );
};

export default App;
