import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/context";
import Form from "./Form";
import { Button } from "../layout/common";

import { isSubmitedAtom } from "../../recoil/atoms";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import Modals from "../modal/modals";

const FormSection = () => {
  const mode = useContext(ThemeContext);

  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage the modal visibility
  const isSubmited = useSetRecoilState(isSubmitedAtom);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsModalOpen(true); // Open the modal when the submit button is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal when [취소] button is clicked
  };

  const handleConfirm = () => {
    isSubmited(true);
    setIsModalOpen(false); // Close the modal when [확인] button is clicked
    navigate("/mypage"); // Navigate to "/mypage" after clicking [확인]
  };

  return (
    <>
      <Form type="text" inputType="이름" />
      <Form type="email" inputType="이메일" />
      <Form type="date" inputType="날짜" />
      <Button mode={mode.button} onClick={handleClick}>
        제출
      </Button>
      <Modals
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default FormSection;
