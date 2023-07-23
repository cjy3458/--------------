import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Button } from "./common";
import { ThemeContext } from "../../context/context";
import { isSubmitedAtom, idAtom, userNameAtom } from "../../recoil/atoms";
import { useRecoilValue } from "recoil";

// childeren으로 하위 컴포넌트를 받아왔기 때문에 children 안에 하위 컴포넌트가 다 들어감
// 위 아래 헤더와 풋터는 기본으로 적용되고 그 안에 내용이 바뀌는 것
// 헤더안에 버튼 3개 만들어서 테마 바꾸기 적용할거

// 생성한 컨텍스트 객체 사용을 위해 Provider, Consumer 사용 필수

//useContext 와 useState를 통해 상태 관리중

const Layout = ({ children }) => {
  const context = useContext(ThemeContext);

  const [mode, setMode] = useState(context.blueTheme);

  //클릭 이벤트
  // 버튼의 value 값에 따라 mode를 어떤 테마로 바꿔줄지 설정하는 코드
  const handleClick = (e) => {
    const color = e.target.value;
    if (color === "blue") {
      setMode(context.blueTheme);
    } else if (color === "green") {
      setMode(context.greenTheme);
    } else if (color === "pink") {
      setMode(context.pinkTheme);
    }
  };
  // mode의 main 컬러를 props로 받아옴

  const userName = useRecoilValue(userNameAtom);
  const id = useRecoilValue(idAtom);
  const isSubmited = useRecoilValue(isSubmitedAtom);

  return (
    <ThemeContext.Provider value={mode}>
      <Wrapper>
        <Header mode={mode.main}>
          <Button value="blue" onClick={handleClick}>
            Blue theme
          </Button>
          <Button value="green" onClick={handleClick}>
            Green theme
          </Button>
          <Button value="pink" onClick={handleClick}>
            Pink theme
          </Button>
        </Header>
        <div>{children}</div>
        <Footer mode={mode.main}>
          {!isSubmited ? "" : `${userName}의 공간 || 이메일 주소 ${id}`}
        </Footer>
      </Wrapper>
    </ThemeContext.Provider>
  );
};

export default Layout;

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${(props) => props.mode};
`;

const Footer = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${(props) => props.mode};
`;
