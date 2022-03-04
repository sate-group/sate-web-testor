import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import styled from "styled-components";
import ProfileBox from "./components/profile-box";
import SignInBox from "./components/sign-in-box";
import { dark } from "react-colorset";
import axios from "axios";
import { useCookies } from "react-cookie";
import { convertStatus } from "./components/box";

export type Status = "success" | "error" | "loading" | "idle";
export type Profile = {
  id: string;
  email: string;
  username: string;
  hashedPassword: string;
  isEmailVerified: boolean;
  mention?: string;
  photoUrl?: string;
};
function useAuth() {
  const URL = "http://localhost:3000/auth";
  const [status, setStatus] = useState<Status>("idle");
  const [accessToken, setAccessToken] = useState<string>();
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

  // when refresh, get a cookie in token if it exist
  useLayoutEffect(() => {
    if (!cookies.accessToken) return;
    setAuth(cookies.accessToken);
  }, []);

  const fetchSignIn = (emailOrUsername: string, password: string) => {
    setStatus("loading");
    return axios
      .post(URL + "/signin", {
        emailOrUsername,
        password,
      })
      .then((response) => {
        const accessToken = response.data.accessToken;
        setAuth(accessToken);
      })
      .catch((err) => {
        setStatus("error");
      });
  };

  const signOut = () => {
    resetAuth();
  };
  const fetchCheckAuth = (accessToken: string) => {
    setStatus("loading");
    return axios
      .post(URL + "/check", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(() => {})
      .catch((err) => {
        setStatus("error");
        resetAuth();
      });
  };

  const setAuth = (accessToken: string) => {
    setStatus("success");
    setAccessToken(accessToken);
    setCookie("accessToken", accessToken, {
      maxAge: 86400, // 24h = 60 * 60 * 24 sec
      secure: true,
      path: "/",
      sameSite: true,
    });
  };

  const resetAuth = () => {
    setAccessToken(undefined);
    removeCookie("accessToken");
    setStatus("idle");
  };

  return {
    authStatus: status,
    accessToken,
    signIn: fetchSignIn,
    signOut: signOut,
  };
}

function useUser(accessToken?: string) {
  const [status, setStatus] = useState<Status>("idle");
  const [myProfile, setMyProfile] = useState<Profile>();

  // get a user profile when accessToken is valid
  useEffect(() => {
    if (!accessToken) return;
    fetchGetMyProfile(accessToken);
  }, [accessToken]);

  // when reset auth, reset user
  useEffect(() => {
    if (accessToken) return;

    setMyProfile(undefined);
    setStatus("idle");
  }, [accessToken]);

  const fetchGetMyProfile = (accessToken: string) => {
    setStatus("loading");
    return axios
      .get("http://localhost:3000/user/myprofile", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        setStatus("success");
        const myProfile = response.data;
        setMyProfile(myProfile);
      })
      .catch((err) => {
        setStatus("error");
      });
  };

  return {
    userStatus: status,
    myProfile,
  };
}

function App() {
  const { authStatus, accessToken, signIn, signOut } = useAuth();
  const { userStatus, myProfile } = useUser(accessToken);

  return (
    <Wrapper>
      <ProfileBox
        status={convertStatus(
          userStatus === "success",
          userStatus === "loading",
          userStatus === "idle"
        )}
        myProfile={myProfile}
        onSignOut={signOut}
      />
      <SignInBox
        status={convertStatus(
          authStatus === "idle",
          authStatus === "loading",
          authStatus === "success"
        )}
        onSubmit={signIn}
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

  color: ${dark.foregroundDimmer};
`;

export default App;
