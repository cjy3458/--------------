import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../layout/common";
import Form from "./Form";
import { ThemeContext } from "../../context/context";
import { isSubmitedAtom } from "../../recoil/atoms";
import { useSetRecoilState } from "recoil";

// mode는 저장소 역할.? 뭐라는지 못들음
// Form에서는 타입과 인풋타입 2개를 props로 받아오고 있습니당

const FormSection = () => {
  const mode = useContext(ThemeContext);
  const navigate = useNavigate();

  const isSubmited = useSetRecoilState(isSubmitedAtom);

  const handleClick = () => {
    isSubmited(true);

    navigate("/mypage");
  };

  return (
    <>
      <Form type="text" inputType="이름" />
      <Form type="email" inputType="이메일" />
      <Button mode={mode.button} onClick={handleClick}>
        제출
      </Button>
    </>
  );
};

export default FormSection;
