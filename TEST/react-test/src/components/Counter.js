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
      <h2>COUNT</h2>
      <p>{count}</p>
      <Button onClick={handleIncrement}>+</Button>
      <Button onClick={handleDecrement}>-</Button>
    </Wrapper>
  );
};

export default Counter;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  border: 3px solid black;
  border-radius: 3%;
  padding: 30px;
`;

const Button = styled.button`
  width: 30%;
  border: none;
  position: relative;
  display: inline-block;
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
