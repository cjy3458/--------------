import React, { useContext } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { BtnWrap, Title } from "../layout/common";
import { ThemeContext } from "../../context/context";
import { userNameAtom, emailAtom, dateAtom } from "../../recoil/atoms";
import { useRecoilValue } from "recoil";

const Modals = ({ isOpen, onClose, onConfirm }) => {
  const mode = useContext(ThemeContext);
  const userName = useRecoilValue(userNameAtom);
  const email = useRecoilValue(emailAtom);
  const date = useRecoilValue(dateAtom);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <ModalBack onClick={onClose} />
      <ModalContent mode={mode.main}>
        <h3>제출하시겠습니까?</h3>
        <div>이름: {userName}</div>
        <div>이메일: {email}</div>
        <div>날짜: {date}</div>
        <BtnWrap>
          <ModalButton mode={mode.button} onClick={onConfirm}>
            확인
          </ModalButton>
          <ModalButton mode={mode.button} onClick={onClose}>
            취소
          </ModalButton>
        </BtnWrap>
      </ModalContent>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modals;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
  color: white;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.mode};
  padding: 20px;
  border-radius: 8px;
  z-index: 100;
`;

const ModalButton = styled.button`
  all: unset;
  background-color: ${(props) => props.mode};
  color: white;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
`;

const ModalBack = styled.div`
  display: block;
  position: fixed;
  width: 50%;
  height: 50%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
