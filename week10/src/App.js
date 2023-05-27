import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Books from "./pages/Books";
import Book from "./pages/Book";

// import Thumbsup from "./Thumbsup";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:username" element={<Profile />}></Route>
        <Route path="/books" element={<Books />}>
          <Route path=":id" element={<Book />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
