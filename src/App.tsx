import React, { useState } from "react";
import styled from "styled-components";
import ConnectionPopup from "./components/connection-popup";

function App() {
  const [connectionCode, setConnectionCode] = useState<string>();
  return (
    <Wrapper>
      <ConnectionPopup open={!connectionCode} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default App;
