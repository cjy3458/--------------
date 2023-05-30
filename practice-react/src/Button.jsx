import React from "react";

const plusOne = () => {
  const [count, setCount] = useState(0);
  const btnClick = () => {
    setCount(count + 1);
  };

  return <button onClick={plusOne}> {count} </button>;
};

export default Button;

const Button = styled.div`
  &:hover {
    background-color: rgb(149, 101, 220);
    color: white;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 30px;
  font-size: 20px;
  background-color: white;
  border: 2px solid white;
  color: black;
  cursor: pointer;
  width: 12%;
  border-radius: 20px;
`;
