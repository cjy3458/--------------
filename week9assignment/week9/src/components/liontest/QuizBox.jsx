import React, { useState } from "react";
import styled from "styled-components";

const QuizBox = ({ data, handleNextButtonClick }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelect = (answerId) => {
    setSelectedAnswer(answerId);
  };

  const handleSubmit = () => {
    const answer = {
      id: data.id,
      selectedAnswer: selectedAnswer,
      correct: selectedAnswer === data.correctAnswer,
      title: data.title,
    };
    handleNextButtonClick(answer);
  };

  const isLastQuestion = data.id === data.length;

  return (
    <>
      <QuestionSection>
        {data.title}
        <AnswerSection>
          {data.answerList.map((answer) => (
            <Answer
              key={answer.aid}
              onClick={() => handleAnswerSelect(answer.aid)}
              isSelected={selectedAnswer === answer.aid}
            >
              {answer.content}
            </Answer>
          ))}
        </AnswerSection>
        {selectedAnswer !== null && (
          <Button onClick={handleSubmit}>
            {isLastQuestion ? "결과 보기" : "다음"}
          </Button>
        )}
      </QuestionSection>
    </>
  );
};

export default QuizBox;

const QuestionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 25px;
  align-items: center;
  font-size: 20px;
`;

const AnswerSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 15px;
`;

const Answer = styled.div`
  padding: 30px;
  border-radius: 20px;
  background-color: beige;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 30px;
  font-size: 20px;
  background-color: #ffa43c;
  color: white;
  cursor: pointer;
  width: 15%;
  border-radius: 20px;
`;
