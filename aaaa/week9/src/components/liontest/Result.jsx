import React from "react";
import styled from "styled-components";

const Result = ({ resultData, handleResult }) => {
  const ResultBtn = () => {
    return (
      <ContentBox>
        <Button onClick={handleResult}>결과보기</Button>
      </ContentBox>
    );
  };

  return (
    <Dom>
      {resultData && Object.keys(resultData).length === 0 ? (
        <ResultBtn />
      ) : (
        <>
          <Score>
            내 점수는 ={">"} {resultData.result} / 9
          </Score>
          <Title>틀린 문제</Title>
          {resultData.incorrect.length > 0 &&
            resultData.incorrect.map((data, idx) => (
              <A key={idx}>
                <AnswerTitle>{data.title}</AnswerTitle>
                <Answer>정답은? {data.answer}입니다~</Answer>
              </A>
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

const A = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 25px;
  align-items: center;
  width: 100%;
`;

const Score = styled.div`
  font-size: 30px;
  font-weight: 500;
  border: 1px solid white;
  width: 50%;
  heigth: 50%;
  text-align: center;
  background-color: whitesmoke;
`;

const Answer = styled.div`
  width: 70%;
  font-size: 15px;
  color: black;
`;

const AnswerTitle = styled.div`
  width: 70%;
  font-size: 18px;
  color: white;
`;

const Button = styled.div`
  &:hover {
    background-color: rgb(149, 101, 220);
    color: white;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  font-size: 25px;
  color: black;
  background-color: white;
  border: 2px solid white;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%;
`;

const Title = styled.div`
  font-size: 30px;
  color: white;
  font-weight: 700;
`;

export default Result;
