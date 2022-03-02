import { useEffect } from "react";
import styled from "styled-components";
import ProfileBox from "./components/profile-box";
import SignInBox from "./components/sign-in-box";
import { useAuth } from "./features/auth/auth-hooks";
import { useUser } from "./features/user/user-hooks";

function App() {
  const { signIn, authStatus, accessToken } = useAuth();
  const { myProfile, getMyProfile, userStatus, error } = useUser();
  useEffect(() => {
    if (!accessToken) return;
    getMyProfile(accessToken);
  }, [accessToken]);

  return (
    <Wrapper>
      <ProfileBox status={userStatus} myProfile={myProfile} />
      <SignInBox
        onSubmit={(emailOrUsername, password) =>
          signIn(emailOrUsername, password)
        }
        status={authStatus}
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
