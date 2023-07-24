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

  if (isOpen === false) return null;
  else
    return ReactDOM.createPortal(
      <>
        <ModalBack onClick={onClose} />
        <ModalContent mode={mode.main}>
          <ModalTitle>제출하시겠습니까?</ModalTitle>
          <ModalDiv>이름: {userName}</ModalDiv>
          <ModalDiv>이메일: {email}</ModalDiv>
          <ModalDiv>날짜: {date}</ModalDiv>
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
      document.body
    );
};

export default Modals;

const ModalTitle = styled.h3`
  text-align: center;
`;

const ModalDiv = styled.div`
  font-size: 17px;
  padding-bottom: 5px;
  border-bottom: 1px solid white;
  font-weight: 900;
`;

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
  font-weight: 900;
  border-radius: 20px;

  cursor: pointer;
`;

const ModalBack = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
