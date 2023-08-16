import { useState } from "react";
import "./App.css";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import CvEngine from "./pages/CvEngine";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/cv-engine"
          element={<CvEngine />}
        />
      </Routes>
    </>
  );
}

export default App;
