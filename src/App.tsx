import React, { useEffect, useLayoutEffect, useMemo } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import ProfileBox from "./components/profile-box";
import SignInBox from "./components/sign-in-box";
import { dark } from "react-colorset";

function App() {
  const [cookies, setCookies] = useCookies(["accessToken"]);

  return (
    <Wrapper>
      <ProfileBox status={"idle"} />
      <SignInBox onSubmit={(emailOrUsername, password) => {}} status={"idle"} />
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

  color: ${dark.foregroundDimmer};
`;

export default App;
