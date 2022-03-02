import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { fetchGetMyProfile } from "./user-fetchs";

export const useUser = () => {
  const dispatch = useDispatch();
  const { myProfile, status, error } = useSelector(
    (state: RootState) => state.user
  );
  return {
    myProfile,
    getMyProfile: (accessToken: string) =>
      dispatch(fetchGetMyProfile({ accessToken })),
    userStatus: status,
    error,
  };
};
