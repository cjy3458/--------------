import React, { useContext } from "react";
import { Input, Wrapper, Title, Button } from "../components/layout/common";
import { useForm } from "../hooks/useForm";
import { signUp } from "../apis/signup";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/context";

const Signup = () => {
  const mode = useContext(ThemeContext);
  const [email, onChangeEmail] = useForm();
  const [pw, onChangePw] = useForm();
  const [name, onChangeName] = useForm();

  const router = useNavigate();

  const onClick = async () => {
    await signUp(email, pw, name);
    router("/");
  };

  return (
    <Wrapper>
      <Title>회원가입</Title>
      <Input>
        <input placeholder="아이디" value={email} onChange={onChangeEmail} />
        <input
          placeholder="비밀번호"
          type="password"
          value={pw}
          onChange={onChangePw}
        />
        <input placeholder="성함" value={name} onChange={onChangeName} />
      </Input>
      <Button mode={mode.main} onClick={onClick}>
        가입하기
      </Button>
    </Wrapper>
  );
};

export default Signup;
