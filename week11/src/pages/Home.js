import React, { useState } from "react";
import { Wrapper } from "../components/Common";
import { styled } from "styled-components";

const Home = () => {
  const { id, setId } = useState("");
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const { pw, setPw } = useState("");
  const onCahngePw = (e) => {
    setPw(e.target.value);
  };

  const router = useNavigate();

  const onClick = async () => {
    //로그인 api를 넣어주기
    const result = await login(id, pw); // state들을 넘겨주기
    const { accessToken, refreshToken } = result;
    localStorage.setItem("access", accessToken);
    localStorage.setItem("refresh", refreshToken);
    router("/mypage");
  };
  return (
    <Wrapper>
      <Title>로그인</Title>
      <Form>
        <Inputs>
          <Input placeholder="ID입력" value={id} onChange={onChangeId}></Input>
          <Input
            placeholder="PW입력"
            type="password"
            value={pw}
            onChange={onCahngePw}
          ></Input>
        </Inputs>
        <Button>LogIn</Button>
      </Form>
      <CustomLink to="/signup">회원가입</CustomLink>
    </Wrapper>
  );
};

export default Home;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 10px;
`;

const CustomLink = styled(Link)`
  margin-top: 20px;
  color: black;
  text-decoration: none;
  &:visited {
    color: black;
    text-decoration: none;
  }
`;
