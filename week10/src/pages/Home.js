import React from "react";
import { Link, Routes, Route } from "react-router-dom";

//링크를 설정해서 어떤 링크를 보여줄지 설정하기
//Link to=~~하면 ~~안에 설정한 링크를 넣어주면 url뒤에 그대로 붙음
//Link를 useNavigate로 바꿔서 만들어볼까!

const Home = () => {
  return (
    <div>
      <h2>홈 스윗 홈</h2>
      <ul>
        <li>
          <Link to="/gyu">규한이집</Link>
        </li>
        <li>
          <Link to="/gyupuppy">규한이네 개집</Link>
        </li>
        <li>
          <Link to="/books">규한이 책방</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
