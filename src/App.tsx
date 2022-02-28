import styled from "styled-components";
import SignInBox from "./components/sign-in-box";

function App() {
  return (
    <Wrapper>
      <SignInBox />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export default App;
