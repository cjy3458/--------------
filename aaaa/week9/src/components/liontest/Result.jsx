import React, { useState } from "react";
import styled from "styled-components";

const Result = ({ finalResult, handleClickGetResult }) => {
  const ResultBtn = ({ handleClickGetResult }) => {
    return (
      <ContentBox>
        <Button onClick={handleClickGetResult}>결과보기</Button>
      </ContentBox>
    );
  };

  return (
    <Dom>
      {Object.keys(finalResult).length === 0 ? (
        <ResultBtn handleClickGetResult={handleClickGetResult} />
      ) : (
        <>
          <Total>점수: {finalResult.result} / 9</Total>
          <Title>틀린 문제</Title>
          {finalResult.incorrect.map((data, idx) => (
            <Dom key={idx}>
              <Incorrect>{data.title}</Incorrect>
              <Answer>정답 : {data.answer}</Answer>
            </Dom>
          ))}
        </>
      )}
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

export default Result;
