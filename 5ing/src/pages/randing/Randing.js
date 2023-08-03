import React from "react";
import styled from "styled-components";
import Headers from "./Headers";
import Randing1 from "./Randing1";

const Randing = () => {
  return (
    <Wrapper>
      <Headers></Headers>
      <Randing1></Randing1>
    </Wrapper>
  );
};

export default Randing;

const Wrapper = styled.div`
  width: 100%;
`;
