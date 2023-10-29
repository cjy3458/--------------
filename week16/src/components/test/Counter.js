import React, { useState } from "react";
import styled from "styled-components";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <Wrapper>
      <Number>COUNT {count}</Number>
      <Button onClick={handleIncrement}>+</Button>
      <Button onClick={handleDecrement}>-</Button>
    </Wrapper>
  );
};

export default Counter;

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  border: 5px solid black;
  border-radius: 3%;
  padding: 30px;
`;

const Number = styled.div`
  font-size: 48px;
  font-weight: bold;
`;

const Button = styled.button`
  width: 10%;
  /* border: none; */
  /* position: relative; */
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  padding: 20px 60px;
  color: white;
  margin: 20px 10px 10px;
  border-radius: 6px;
  text-align: center;
  transition: top 0.01s linear;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  margin-top: 3%;
  font-family: "Delicious Handrawn";
  font-size: 25px;
  background-color: black;
  box-shadow: 0 0 0 1px black inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 8px 0 0 black, 0 8px 0 1px rgba(0, 0, 0, 0.4),
    0 8px 8px 1px rgba(0, 0, 0, 0.5);

  &:active {
    box-shadow: 0 0 0 1px black inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
      0 0 0 1px rgba(0, 0, 0, 0.4);
  }
  &:hover {
    background-color: black;
  }
`;
