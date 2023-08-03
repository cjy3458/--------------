import React from "react";
import styled from "styled-components";

const Randing2 = () => {
  return (
    <Wrapper>
      <Title>서비스 소개</Title>
      <Text>
        오리챗(ALL-IT Chat)은 ~~...(내용은 아직입니당)... 우선 빼고 만들어주세요
      </Text>
    </Wrapper>
  );
};

export default Randing2;

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  background-color: white;
  /* border: 3px solid black; */
  margin-top: 3%;
`;

const Title = styled.div`
  margin-left: 6.2%;
  margin-top: 7%;
  color: #454545;
  font-family: SUITE;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 40px;
`;

const Text = styled.div`
  color: #454545;
  font-family: SUITE;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 40px;
  margin-top: 3%;
  margin-left: 6.2%;
`;
