import React from "react";
import styled from "styled-components";

const Pagination = (props) => {
  const { pageNum, clickPage } = props;
  return (
    <Page>
      {pageNum.map((i) => (
        <Number
          key={i.id}
          id={i.id}
          clicked={i.clicked}
          onClick={(e) => clickPage(e.target.id)}
        >
          {i.id}
        </Number>
      ))}
    </Page>
  );
};

export default Pagination;

const Page = styled.div`
  display: flex;
  gap: 20px;
`;

const Number = styled.div`
  color: white;
  font-size: 14px;
  cursor: pointer;
`;
