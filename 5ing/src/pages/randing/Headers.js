import React from "react";
import styled from "styled-components";
import logo2 from "../../img/logo2.png";

const Headers = () => {
  return (
    <>
      <Header>
        <LogoWrap>
          <Logo src={logo2} />
        </LogoWrap>
        <BtnWrapp>
          <LoginBtn>로그인</LoginBtn>
          <SignupBtn>회원가입</SignupBtn>
        </BtnWrapp>
      </Header>
    </>
  );
};

export default Headers;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background-color: #fff;
`;

const LogoWrap = styled.div`
  margin: 80px;
`;

const Logo = styled.img`
  width: 120px;
  height: 33px;
`;

export const LoginBtn = styled.button`
  all: unset;
  background-color: white;
  color: black;
  width: 88px;
  height: 32px;
  padding: 5px;
  border-radius: 30px;
  border: 1px solid #353535;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignupBtn = styled.button`
  all: unset;
  background-color: #353535;
  color: white;
  width: 88px;
  height: 32px;
  padding: 5px;
  margin-left: 5px;
  border-radius: 30px;
  border: 1px solid #353535;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BtnWrapp = styled.div`
  display: flex;
  margin: 80px;
`;
