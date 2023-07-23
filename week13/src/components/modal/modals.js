import React, { useContext } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Button } from "../layout/common";
import { ThemeContext } from "../../context/context";

const Modals = ({ isOpen, onClose, onConfirm }) => {
  const mode = useContext(ThemeContext);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <ModalContent mode={mode.main}>
        <h2>제출하시겠습니까?</h2>
        <h2>제출하시겠습니까?</h2>
        <ModalButton onClick={onConfirm}>확인</ModalButton>
        <ModalButton onClick={onClose}>취소</ModalButton>
      </ModalContent>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modals;

const ModalContent = styled.div`
  position: fixed;
  height: 50%;
  top: 50%;
  left: 50%;
  color: white;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.mode};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const ModalButton = styled.span`
  all: unset;
  background-color: ${(props) => props.mode};
  color: white;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
`;
