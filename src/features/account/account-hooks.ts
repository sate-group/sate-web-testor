import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { fetchGetUserProfile, fetchSignIn } from "./account-fetchs";

export const useAccount = () => {
  const dispatch = useDispatch();
  const {
    status,
    value: { profile, accessToken },
  } = useSelector((state: RootState) => state.account);

  return {
    profile,
    accessToken,
    status,
    getUserProfile: (accessToken: string) => {
      dispatch(fetchGetUserProfile({ accessToken }));
    },
  };
};

export const useSignIn = () => {
  const dispatch = useDispatch();

  return {
    signIn: (emailOrUsername: string, password: string) =>
      dispatch(fetchSignIn({ emailOrUsername, password })),
  };
};
