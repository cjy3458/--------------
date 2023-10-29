import Counter from "./components/test/Counter";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Counter />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
