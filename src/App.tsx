import { useEffect } from "react";
import styled from "styled-components";
import SignInBox from "./components/sign-in-box";
import { useAccount, useSignIn } from "./features/account/account-hooks";

function App() {
  const { signIn } = useSignIn();
  const { profile, accessToken, status, getUserProfile } = useAccount();
  useEffect(() => {
    if (!accessToken) return;
    console.log("accessToken is", accessToken);
    getUserProfile(accessToken);
  }, [accessToken]);

  useEffect(() => {
    console.log(profile);
  }, [profile]);
  return (
    <Wrapper>
      <SignInBox
        onSubmit={(emailOrUsername, password) =>
          signIn(emailOrUsername, password)
        }
        status={status}
      />
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
