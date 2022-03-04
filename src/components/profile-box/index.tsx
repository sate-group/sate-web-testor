import { dark } from "react-colorset";
import styled from "styled-components";
import { Profile, Status } from "../../App";
import {
  BookAltIcon,
  NotificationIcon,
  PlanetIcon,
  SettingsIcon,
  SignOutIcon,
  UserIcon,
} from "../icons";
import { withBox } from "../box";

type Props = {
  myProfile?: Profile;

  onSignOut: () => void;
};
function ProfileBox({ myProfile, onSignOut }: Props) {
  return (
    <Wrapper>
      {myProfile?.photoUrl || <PlanetIcon title="" size="70px" />}
      <div className="detail">
        Signed in as <span>{myProfile?.username}</span>
        <div className="features">
          <UserIcon
            active
            hover
            title="my profile"
            size="15px"
            onClick={() => console.log("")}
          />
          <BookAltIcon
            active
            hover
            title="guide"
            size="15px"
            onClick={() => console.log("")}
          />
          <NotificationIcon
            active
            hover
            title="notifications"
            size="15px"
            onClick={() => console.log("")}
          />
          <SettingsIcon
            active
            hover
            title="settings"
            size="15px"
            onClick={() => console.log("")}
          />
          <SignOutIcon
            active
            hover
            title="sign out"
            size="15px"
            onClick={onSignOut}
          />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  font-size: 14px;
  color: ${dark.foregroundDimmer};


  .detail {
    display: flex;
    flex-direction: column;
  }

  .features {
    width: 100%;
    display: flex;
    margin-top: 10px;

    position: relative;
    right: 5px;
  }

  span {
    font-size: 23px;
  }
`;
export default withBox(ProfileBox);
