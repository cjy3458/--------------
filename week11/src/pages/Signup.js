import React from "react";
import { Title, Wrapper, Inputs, Input } from "../components/Common";

const Signup = () => {
  return (
    <Wrapper>
      <Title></Title>
      <Inputs>
        <Input placeholder="아이디" />
        <Input placeholder="비밀번호" type="password" />
        <Input placeholder="성함" />
        <Input placeholder="나이" />
      </Inputs>
    </Wrapper>
  );
};

export default Signup;
