import "./App.css";
import Btn from "./Button";
import Input from "./Input";

function App() {
  return (
    <>
      <Input></Input>
      <Btn title="aaa"></Btn>
    </>
  );
}

export default App;

const Dom = styled.div`
  height: 150px;
  gap: 30px;
  background-color: black;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 0;
  border-radius: 20px;
  box-shadow: 5px 5px 5px lightgray;
`;
