import React, { useState } from "react";
import styled from "styled-components";
import ConnectionModal from "./components/connection-modal";

function App() {
  const [connectionCode, setConnectionCode] = useState<string>();

  return (
    <Wrapper>
      <ConnectionModal open={!connectionCode} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default App;
