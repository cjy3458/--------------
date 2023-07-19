import React, { useContext } from "react";
import { Button, Title, Wrapper } from "../components/layout/common";
import { ThemeContext } from "../context/context";
import { userNameAtom, emailAtom, isSubmitedAtom } from "../recoil/atoms";
import { useResetRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

// 리셋 버튼을 누르면 3개의 아톰값을 모두 디폴트 값으로 변경

const MyPage = () => {
  const mode = useContext(ThemeContext);

  // 아톰값을 리셋하는 훅을 사용할 수 있는 변수
  const navigate = useNavigate();

  const resetName = useResetRecoilState(userNameAtom);
  const resetEmail = useResetRecoilState(emailAtom);
  const reset = useResetRecoilState(isSubmitedAtom);

  const userName = useRecoilValue(userNameAtom);

  const handleDelete = () => {
    reset();
    resetEmail();
    resetName();

    navigate("/");
  };

  return (
    <Wrapper>
      <Title>Welcome {userName}</Title>
      <Button mode={mode.button} onClick={handleDelete}>
        리셋
      </Button>
    </Wrapper>
  );
};

export default MyPage;
