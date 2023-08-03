import React from "react";
import { styled } from "styled-components";
import halfduck from "../../img/halfduck.png";
import cloud1 from "../../img/cloud1.png";
import cloud2 from "../../img/cloud2.png";
import logo from "../../img/logo.png";
import plane from "../../img/plane.png";

const Randing1 = () => {
  return (
    <Wrapper>
      <Rand1>
        <Image1 src={cloud2} />
        <Image5 src={plane} />
        <Image2 src={halfduck} />
        <Image3 src={cloud1} />
        <Image4 src={logo} />
      </Rand1>
    </Wrapper>
  );
};

export default Randing1;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  background-color: #89cdf6;
`;

const Rand1 = styled.div`
  width: 100%;
  height: 100%;
`;

const Image1 = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  margin-bottom: 2%;
`;

const Image2 = styled.img`
  position: absolute;
  right: 0;
  margin-right: 11%;
  margin-top: 8%;
  height: 70%;
`;

const Image3 = styled.img`
  position: absolute;
  bottom: 0;
  margin-bottom: 1%;
  width: 100%;
`;

const Image4 = styled.img`
  position: absolute;
  top: 0;
  margin-top: 14%;
  width: 25%;
  margin-left: 10%;
`;

const Image5 = styled.img`
  position: absolute;
  top: 0;
  margin-top: 8%;
  margin-left: 48%;
  width: 30%;
`;
