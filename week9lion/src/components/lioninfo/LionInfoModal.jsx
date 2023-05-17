import styled from "styled-components";
import React from "react";
import FilterButton from "./FilterButton";

// rafce를 사용해서 component화를 미리 해줘야함!
// 버튼의 이름은 props로 내려줄거지만 로직이 버튼마다 다 다르다
const LionInfoModal = () => {
  const category = [
    {
      type: "page",
      title: "All",
    },
    {
      type: "gender",
      title: "male",
    },
    {
      type: "gender",
      title: "female",
    },
    {
      type: "stack",
      title: "hurongt",
    },
    {
      type: "stack",
      title: "backend",
    },
    {
      type: "stack",
      title: "design",
    },
    {
      type: "stack",
      title: "PM",
    },
  ];

  return (
    <Dom>
      <Title>🦁LikeLion 11th🦁</Title>
      <ButtonDom>
        {category.map((c, i) => (
          <FilterButton key={i} title={c.title} type={c.type} />
        ))}
      </ButtonDom>
    </Dom>
  );
};

export default LionInfoModal;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const ButtonDom = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Dom = styled.div`
  gap: 30px;
  background-color: #ffd9b6;
  width: 90vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  border-radius: 20px;
  box-shadow: 5px 5px 5px lightgray;
`;
