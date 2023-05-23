import React, { useState } from "react";
import styled from "styled-components";
import { getLionTest, testResult } from "../../apis/liontest";
import QuizBox from "./QuizBox";
import Result from "./Result";

const LionTestModal = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleNextButtonClick = (answer) => {
    setSelectedAnswers((prevSelectedAnswers) => [
      ...prevSelectedAnswers,
      answer,
    ]);

    if (page === data.length) {
      setShowResult(true);
    } else {
      setPage(page + 1);
    }
  };

  const handleTestComplete = async () => {
    // Prepare the answer payload
    const answerPayload = selectedAnswers.map((selectedAnswer, index) => ({
      id: data[index].id,
      answer: selectedAnswer.selectedAnswer,
    }));

    // Send test result to the server
    const response = await testResult({ answer: answerPayload });

    // Display the test result
    if (response.data.message === "success") {
      const { result, incorrect } = response.data.data;
      setCorrectAnswers(result);
      setIncorrectAnswers(incorrect);
    }

    setShowResult(true);
  };

  const handleStartTest = async () => {
    // Fetch lion test data from the server
    const response = await getLionTest();
    if (response.data.message === "success") {
      const lionTestData = response.data.data;
      setData(lionTestData);
      setPage(1); // Start from the first question
      setSelectedAnswers([]); // Reset selected answers
      setCorrectAnswers(0); // Reset correct answers count
      setIncorrectAnswers([]); // Reset incorrect answers
      setShowResult(false); // Hide result
    }
  };

  console.log(data.length);
  console.log(page);

  return (
    <Dom>
      <Title>🐝멋사인 테스트🐝</Title>
      <ContentBox>
        {page === 0 ? (
          <Button onClick={handleStartTest}>시작하기</Button>
        ) : page !== data.length ? (
          <QuizBox
            data={data[page - 1]}
            handleNextButtonClick={handleNextButtonClick}
          />
        ) : (
          <>
            {showResult ? (
              <Result
                correctAnswers={correctAnswers}
                incorrectAnswers={incorrectAnswers}
              />
            ) : (
              <Button onClick={handleTestComplete}>결과 보기</Button>
            )}
          </>
        )}
      </ContentBox>
    </Dom>
  );
};

export default LionTestModal;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  font-size: 25px;
  color: gray;
  background-color: beige;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
`;

const Dom = styled.div`
  gap: 30px;
  background-color: #ffd9b6;
  width: 90vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
`;
