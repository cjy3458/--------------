import React from "react";
import styled from "styled-components";
import Headers from "./Headers";
import Randing1 from "./Randing1";
import Randing2 from "./Randing2";
import Randing3 from "./Randing3";

const Randing = () => {
  return (
    <Wrapper>
      <Headers></Headers>
      <Randing1></Randing1>
      <Randing2></Randing2>
      <Randing3></Randing3>
    </Wrapper>
  );
};

export default Randing;

const Wrapper = styled.div`
  width: 100%;
`;
