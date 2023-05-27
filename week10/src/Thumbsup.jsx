import React, { useState, useEffect } from "react";

const Thumbsup = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  const changeName = (e) => {
    setName(e.target.value);
  };

  const countUp = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("렌더링");
    console.log({ count, name });
  }, [count, name]); // 렌더링 될 때마다 실행이 되는건데, 글자 하나를 입력할 때마다 렌더링이 되기 때문에 최재영을 치면 ㅊ ㅗ ㅣ ㅈ ㅐ ㅇ ㅕㅇ순서대로 칠 때마다 렌더링

  return (
    <div>
      <p>이름 : </p>
      <input type={"text"} value={name} onChange={changeName} />

      <p>👍🏻 {count}</p>
      <button onClick={countUp}>따봉</button>
    </div>
  );
};

export default Thumbsup;
