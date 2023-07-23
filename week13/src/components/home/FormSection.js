import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BtnDiv, Button } from "../layout/common";
import Form from "./Form";
import { ThemeContext } from "../../context/context";
import { isSubmitedAtom } from "../../recoil/atoms";
import { useSetRecoilState } from "recoil";
import { login } from "../../apis/login";
import { useForm } from "../../hooks/useForm";

// mode는 저장소 역할.? 뭐라는지 못들음
// Form에서는 타입과 인풋타입 2개를 props로 받아오고 있습니당

const FormSection = () => {
  const mode = useContext(ThemeContext);
  const navigate = useNavigate();

  const isSubmited = useSetRecoilState(isSubmitedAtom);
  const [email, onChangeEmail] = useForm();
  const [pw, onChangePw] = useForm();

  const handleClick = async () => {
    try {
      //로그인 api를 넣어주기
      const result = await login(email, pw); // state들을 넘겨주기
      console.log(result);
      const { accessToken, refreshToken } = result;
      localStorage.setItem("access", accessToken);
      localStorage.setItem("refresh", refreshToken);
      navigate("/mypage");
      isSubmited(true);
    } catch (error) {
      alert("ID나 PW를 확인하세요");
    }
  };

  return (
    <>
      <Form type="text" inputType="이름" placeholder="이름" />
      <Form
        type="email"
        inputType="이메일"
        placeholder="이메일"
        value={email}
        onChange={onChangeEmail}
      />
      <Form
        type="password"
        inputType="비밀번호"
        placeholder="비밀번호"
        value={pw}
        onChange={onChangePw}
      />
      <BtnDiv>
        <Button mode={mode.main} onClick={handleClick}>
          제출
        </Button>
      </BtnDiv>
    </>
  );
};

export default FormSection;
