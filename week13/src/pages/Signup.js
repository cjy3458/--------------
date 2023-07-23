import React, { useContext } from "react";
import { Input, Wrapper, Title, Button } from "../components/layout/common";
import { useForm } from "../hooks/useForm";
import { signUp } from "../apis/signUp";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/context";

const Signup = () => {
  const mode = useContext(ThemeContext);
  const [id, onChangeId] = useForm();
  const [pw, onChangePw] = useForm();
  const [name, onChangeName] = useForm();
  const [age, onChangeAge] = useForm();

  const router = useNavigate();

  const onClick = async () => {
    await signUp(id, pw, name, age);
    router("/");
    console.log(id, pw);
  };

  return (
    <Wrapper>
      <Title>회원가입</Title>
      <Input placeholder="아이디" value={id} onChange={onChangeId} />
      <Input
        placeholder="비밀번호"
        type="password"
        value={pw}
        onChange={onChangePw}
      />
      <Input placeholder="성함" value={name} onChange={onChangeName} />
      <Input placeholder="나이" value={age} onChange={onChangeAge} />
      <Button mode={mode.main} onClick={onClick}>
        가입하기
      </Button>
    </Wrapper>
  );
};

export default Signup;
