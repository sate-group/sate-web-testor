import { useEffect } from "react";
import styled from "styled-components";
import ProfileBox from "./components/profile-box";
import SignInBox from "./components/sign-in-box";
import { useAuth } from "./features/auth/auth-hooks";

function App() {
  const { signIn, status, accessToken } = useAuth();

  useEffect(() => {
    if(!accessToken) return;

    
  }, [accessToken]);

  return (
    <Wrapper>
      <ProfileBox status={status} />
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
