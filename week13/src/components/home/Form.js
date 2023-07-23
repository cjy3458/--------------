import React from "react";
import { useRecoilState } from "recoil";

import { userNameAtom, pwAtom, idAtom } from "../../recoil/atoms";
import { Input } from "../layout/common";

// Recoil을 사용할 파일
// 인풋타입에 따라서 상태 지정?

const Form = ({ type, inputType }) => {
  const [userName, setUserName] = useRecoilState(userNameAtom);
  const [id, setId] = useRecoilState(idAtom);
  const [password, setPassword] = useRecoilState(pwAtom);

  // 분기처리가 되서 해당 값으로 RECOIL 값 변경

  const onChange = (e) => {
    const data = e.target.value;

    if (inputType === "이름") {
      setUserName(data);
      console.log(userName);
    } else if (inputType === "아이디") {
      setId(data);
      console.log(id);
    } else if (inputType === "비밀번호") {
      setPassword(data);
      console.log(password);
    }
  };

  return <Input type={type} onChange={onChange} placeholder={inputType} />;
};

export default Form;
