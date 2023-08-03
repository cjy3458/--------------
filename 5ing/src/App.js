import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Randing from "./pages/randing/Randing";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Randing />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
