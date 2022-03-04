import { dark } from "react-colorset";
import styled from "styled-components";
import { Box } from "../box";
import ReactLoading from "react-loading";
import { useState } from "react";
import { Profile, Status } from "../../App";
import { BookAltIcon, PlanetIcon, SettingsIcon, SignOutIcon } from "../icons";

type Props = {
  myProfile?: Profile;
  status: Status;
  onSignOut: () => void;
};
function ProfileBox({ myProfile, status, onSignOut }: Props) {
  const [showDetail, setShowDetail] = useState<boolean>(false);

  switch (status) {
    case "success":
      return (
        <Wrapper>
          {myProfile?.photoUrl || <PlanetIcon size="70px" />}
          <div className="detail">
            Signed in as <span>{myProfile?.username}</span>
            <div className="features">
              <BookAltIcon
                size="17px"
                color={dark.foregroundDimmer}
                onClick={() => console.log("")}
              />
              <SettingsIcon
                size="17px"
                color={dark.foregroundDimmer}
                onClick={() => console.log("")}
              />
              <SignOutIcon
                size="17px"
                color={dark.foregroundDimmer}
                onClick={onSignOut}
              />
            </div>
          </div>
        </Wrapper>
      );
    case "loading":
      return (
        <Wrapper>
          <ReactLoading
            width="30px"
            height="30px"
            type="spin"
            color={dark.foregroundDimmer}
          />
        </Wrapper>
      );
    default:
      return <></>;
  }
}

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  font-size: 14px;
  color: ${dark.foregroundDimmer};

  padding: 20px;

  .detail {
    display: flex;
    flex-direction: column;
  }

  .features {
    width: 100%;
    display: flex;
    margin-top: 10px;
    gap: 10px;
  }

  span {
    font-size: 23px;
  }
`;
export default ProfileBox;
