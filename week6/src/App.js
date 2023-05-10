import React from "react";
import Like from "./Like";
// import ComponentWithClass from "./ComponentWithClass";
// 함수형 컴포넌트는 일단 주석처리
// import ComponentWithFunction from "./ComponentWithFunction";

const App = () => {
  return (
    <div>
      {/* <ComponentWithFunction
        name="재영이"
        child="2살"
        favorite="비밀"
      ></ComponentWithFunction> */}
      {/* <ComponentWithClass
        name="길동"
        child="16살"
        favorite="개발"
      ></ComponentWithClass> */}
      <Like />
    </div>
  );
};

export default App;
