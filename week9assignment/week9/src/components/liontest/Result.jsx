import React from "react";
import styled from "styled-components";

const Result = ({ correctAnswers, incorrectAnswers }) => {
  return (
    <Dom>
      <ContentBox>
        <Total>총 맞은 개수: {correctAnswers}</Total>
        <Incorrect>
          <Title>틀린 문제</Title>
          {incorrectAnswers.map((item, index) => (
            <Question key={index}>
              <Title>{item.title}</Title>
              <Answer>정답: {item.answer}</Answer>
            </Question>
          ))}
        </Incorrect>
      </ContentBox>
    </Dom>
  );
};

const Dom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 25px;
  align-items: center;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
`;

const Total = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

const Question = styled.div`
  width: 100%;
`;

const Answer = styled.div`
  font-size: 15px;
`;

const Incorrect = styled.div`
  width: 100%;
  font-size: 26px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export default Result;
