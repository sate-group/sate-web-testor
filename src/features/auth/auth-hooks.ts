import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { fetchSignIn } from "./auth-fetchs";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { accessToken, status, error } = useSelector(
    (state: RootState) => state.auth
  );

  return {
    accessToken,
    status,
    error,
    signIn: (emailOrUsername: string, password: string) =>
      dispatch(fetchSignIn({ emailOrUsername, password })),
  };
};
