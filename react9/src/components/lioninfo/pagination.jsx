import React from "react";
import styled from "styled-components";

const Pagination = (props) => {
  const { pageNum, clickPage } = props;
  return (
    <PaginationDom>
      {pageNum.map((i) => (
        <pageNum
          key={i.id}
          id={i.id}
          clicked={i.clicked}
          onClick={(e) => clickPage(e.target.id)}
        >
          {i.id}
        </pageNum>
      ))}
    </PaginationDom>
  );
};

export default Pagination;

const PaginationDom = styled.div`
  display: flex;
  gap: 20px;
`;

const PageNum = styled.div`
  color: ${(props) => (props.clicked ? "black" : "gray")};
  font-size: 25px;
  cursor: pointer;
`;
