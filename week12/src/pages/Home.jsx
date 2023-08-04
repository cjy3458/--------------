import React from "react";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../apis/login";
import { useForm } from "../hooks/useForm";

const Home = () => {
  const [id, onChangeId] = useForm();
  const [pw, onChangePw] = useForm();

  const router = useNavigate(); // 라우터를 통해서 다른 페이지로 돌아가는 코드

  const onClick = async () => {
    try {
      //로그인 api를 넣어주기
      const result = await login(id, pw); // state들을 넘겨주기
      console.log(result);
      const { accessToken, refreshToken } = result;
      localStorage.setItem("access", accessToken);
      localStorage.setItem("refresh", refreshToken);
      router("/mypage");
    } catch (error) {
      alert("아이디나 패스워드를 확인하세요");
    }
  };
  return (
    <>
      <ImageWrap>
        <Image1 src="img/duck.png" />
        <Image2 src="img/talk.png" />
      </ImageWrap>
      <Wrapper>
        <Title>로그인</Title>
        <Form>
          <Inputs>
            <Text>아이디</Text>
            <Input value={id} onChange={onChangeId}></Input>
            <Text>패스워드</Text>
            <Input type="password" value={pw} onChange={onChangePw}></Input>
          </Inputs>
          <TextWrap>
            <Text>아이디 찾기</Text>
            <Text> | </Text>
            <Text>비밀번호 찾기</Text>
          </TextWrap>
        </Form>
        <Wrapper2>
          <CustomLink to="/signup">계정 만들기</CustomLink>
          <LoginBtn onClick={onClick}>로그인</LoginBtn>
        </Wrapper2>
      </Wrapper>
    </>
  );
};

export default Home;

const TextWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3%;
`;

const Image1 = styled.img`
  height: 100px;
`;

const Image2 = styled.img`
  margin-left: 20px;
  width: 200px;
`;

const Text = styled.div`
  font-size: 14px;
  color: grey;
`;

const Wrapper2 = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
`;

const LoginBtn = styled.button`
  font-weight: 800;
  background-color: #89cdf6;
  color: white;
  padding: 19px;
  border-radius: 10px;
  border: none;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
`;

const CustomLink = styled(Link)`
  color: var(--m-skyblue, #89cdf6);
  font-family: SUITE;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  /* &:visited {
    color: black;
    text-decoration: none;
  } */
`;

const Wrapper = styled.div`
  width: 350px;
  height: 380px;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 30px;
  border: 3px solid var(--m-skyblue, #89cdf6);
  background: #fafffa;
  padding: 30px;
  margin-bottom: 5%;
  z-index: 1;
`;

export const Inputs = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 8px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 30px;
  color: #585858;
  font-family: SUITE;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const Input = styled.input`
  font-size: 20px;
  height: 20px;
  width: 290px;
  border-radius: 10px;
  border: 1px solid #888;
  padding: 10px;
  margin-bottom: 1rem;
  &::placeholder {
    color: darkgray;
    font-size: 20px;
    font-weight: 500;
    font-family: "OTWelcomeRA";
  }
`;
