import React, { useState } from "react";
import styled from "styled-components";
import { getLionTest, testResult } from "../../apis/liontest";
import QuizBox from "./Quizbox";
import Result from "./Result";

const LionTestModal = () => {
  const [start, setStart] = useState(false);
  const [question, setQuestion] = useState({});
  const [resultAnswer, setResultAnswer] = useState([]);
  const [finalResult, setFinalResult] = useState({});

  const getData = async (id) => {
    const data = await getLionTest();
    const question = data.data.data;
    if (!question[id]) {
      setStart(false);
    } else {
      setQuestion(question[id]);
      setStart(true);
    }
  };

  const handleClickQuestion = (id) => {
    setQuestion({
      ...question,
      answerList: question.answerList.map((data) =>
        data.aid === id
          ? {
              ...data,
              clicked: true,
            }
          : {
              ...data,
              clicked: false,
            }
      ),
    });
  };

  const StartBtn = ({ getData }) => {
    return (
      <ContentBox>
        <Button onClick={() => getData(0)}>시작하기</Button>
      </ContentBox>
    );
  };

  const handleResultAnswer = (nowAnswer) => {
    setResultAnswer([...resultAnswer, nowAnswer]);
  };

  // result : 맞은 개수 / incorrect:Array[]; incorrect.title: 틀린문제제목, incorrect.answer:틀린문제답
  const handleClickGetResult = async () => {
    const response = await testResult(resultAnswer);
    const resultData = response.data.data;
    setFinalResult(resultData);
  };

  return (
    <>
      <Dom>
        <Title>🐝멋사 테스트🐝</Title>
        {start ? (
          <QuizBox
            question={question}
            getData={getData}
            handleResultAnswer={handleResultAnswer}
            handleClickQuestion={handleClickQuestion}
          />
        ) : resultAnswer.length > 0 ? (
          <Result
            handleClickGetResult={handleClickGetResult}
            finalResult={finalResult}
          />
        ) : (
          <StartBtn getData={(id) => getData(id)} />
        )}
      </Dom>
    </>
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
  min-height: 600px;
  border-radius: 20px;
  box-shadow: 5px 5px 5px lightgray;
`;
