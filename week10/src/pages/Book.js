import React from "react";
import { useParams } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "박규한, <너무 오래한 연애>",
    text: '“오늘도 사랑하죠. 내일도."',
  },
  {
    id: 2,
    title: "나일강, <해일이 온다>",
    text: "네가 죽은 뒤 장례식을 치르지 못해, 내 삶이 장례식이 되었다.",
  },
  {
    id: 3,
    title: "엽, <우리가 빛의 속도로 갈 수 없다면>",
    text: "“우리는 점점 더 우주에 존재하는 외로움의 총합을 늘려갈 뿐인 게 아닌가”",
  },
];

const Book = () => {
  const { id } = useParams();
  const book = data[id - 1];

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.text}</p>
    </div>
  );
};

export default Book;
