import React from "react";
import { Link, Outlet } from "react-router-dom";

const Books = () => {
  return (
    <div>
      <h1>올해의 책</h1>
      <Outlet />
      <ul>
        <li>
          <Link to="/books/1">하나의 책</Link>
        </li>
        <li>
          <Link to="/books/2">둘의 책</Link>
        </li>
        <li>
          <Link to="/books/3">마이크 책</Link>
        </li>
      </ul>
    </div>
  );
};

export default Books;
