import React, { useState } from "react";
import styled from "styled-components";
import { getLionTest, testResult } from "../../apis/liontest";
import QuizBox from "./QuizBox";
import Result from "./Result";

const LionTestModal = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [showResultButton, setShowResultButton] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getLionTest();
      setData(response.data.data);
    };

    fetchData();
  }, []);

  const handleNextButtonClick = (answer) => {
    if (page === data.length) {
      setShowResultButton(true);
      setShowResult(true);
      const correctCount = data.filter(
        (question) => question.correctAnswer === answer.answer
      ).length;
      const incorrectList = data.filter(
        (question) => question.correctAnswer !== answer.answer
      );
      setCorrectAnswers(correctCount);
      setIncorrectAnswers(incorrectList);
    } else {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleResultButtonClick = () => {
    setShowResult(true);
  };

  return (
    <Dom>
      <Title>🐝멋사인 테스트🐝</Title>
      <ContentBox>
        {page === 0 ? (
          <Button onClick={handleNextButtonClick}>시작하기</Button>
        ) : page <= data.length ? (
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
              <>
                <Title>테스트가 종료되었습니다.</Title>
                {showResultButton && (
                  <Button onClick={handleResultButtonClick}>결과 보기</Button>
                )}
              </>
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
