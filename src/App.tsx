import { useEffect, useMemo } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import ProfileBox from "./components/profile-box";
import SignInBox from "./components/sign-in-box";
import { useAuth } from "./features/auth/auth-hooks";
import { useUser } from "./features/user/user-hooks";
import Cookies from "js-cookie";
import { dark } from "react-colorset";

function App() {
  const [cookies, setCookies] = useCookies(["accessToken"]);
  const accessTokenCookie = useMemo(() => cookies.accessToken, [cookies]);

  const { signIn, authStatus, accessToken } = useAuth();
  const { myProfile, getMyProfile, userStatus, error } = useUser();

  useEffect(() => {
    if (!accessToken) return;
    getMyProfile(accessToken);
    setCookies("accessToken", accessToken, {
      maxAge: 86400, // 24h = 60 * 60 * 24 sec
      secure: true,
      path: "/",
      sameSite: true,
    });
  }, [accessToken]);

  useEffect(() => {
    console.timeLog("cookies.accessToken", cookies["accessToken"]);
  }, [cookies["accessToken"]]);

  return (
    <Wrapper>
      <ProfileBox status={userStatus} myProfile={myProfile} />
      <SignInBox
        onSubmit={(emailOrUsername, password) =>
          signIn(emailOrUsername, password)
        }
        status={authStatus}
      />
      {accessTokenCookie}
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
