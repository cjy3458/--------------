import React from "react";
import styled from "styled-components";
import cloud3 from "../../img/cloud3.png";
import duckduck from "../../img/duckduck.png";

const Randing3 = () => {
  return (
    <Wrapper3>
      <Image1 src={cloud3}></Image1>
      <Title>오리챗 후기</Title>
      <DuckWrap>
        <Image2 src={duckduck}></Image2>
      </DuckWrap>
      <Floor></Floor>
    </Wrapper3>
  );
};

export default Randing3;

const Wrapper3 = styled.div`
  width: 100%;
  height: 800px;
  background-color: #c5e5f6;
  position: relative;
`;

const Image1 = styled.img`
  width: 100%;
  margin-bottom: 3px;
`;

const Image2 = styled.img`
  width: 80%;
  position: absolute;
  bottom: 0;
  margin-bottom: 92px;
  z-index: 1;
`;

const DuckWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Floor = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 110px;
  background-color: #8fc48a;
`;

const Title = styled.div`
  margin-left: 6.3%;
  margin-top: 5%;
  color: #454545;
  font-family: SUITE;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 40px;
`;
