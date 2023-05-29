import React from "react";
import styled from "styled-components";
import {
  getUserPerGender,
  getUserPerPage,
  getUserPerStack,
  getAllPage,
} from "../../apis/lioninfo";

const FilterButton = ({ title, type, setUserData, clickPage, setPage }) => {
  const handleClickButton = async () => {
    if (type === "page") setPage(true);
    else setPage(false);

    // type 에 따라서 어떤 api를 호출할건지를 결정해주는 함수
    if (type === "page") {
      const response = await getUserPerPage(1);
      clickPage(1);
      setUserData(response.data.data);
    } else if (type === "stack") {
      const response = await getUserPerStack(title);
      setUserData(response.data.data);
    } else if (type === "gender") {
      const response = await getUserPerGender(title);
      setUserData(response.data.data);
    }
  };

  return <Button onClick={handleClickButton}>{title}</Button>;
};

export default FilterButton;

const Button = styled.div`
  flex-basis: 13%;
  height: 70px;
  background-color: whitesmoke;
  color: gray;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
`;
