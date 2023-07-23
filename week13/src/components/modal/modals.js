import React, { useContext } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { BtnWrap } from "../layout/common";
import { ThemeContext } from "../../context/context";

const Modals = ({ isOpen, onClose, onConfirm }) => {
  const mode = useContext(ThemeContext);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <ModalContent mode={mode.sub}>
        <h2>제출하시겠습니까?</h2>
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
`;

const ModalButton = styled.button`
  all: unset;
  background-color: ${(props) => props.mode};
  color: white;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
`;
