import { dark } from "react-colorset";
import styled from "styled-components";
import { Box } from "../box";
import PlanetIcon from "../icons/planet-icon";
import ReactLoading from "react-loading";
import AngleDownIcon from "../icons/angle-down-icon";
import { useState } from "react";
import AngleUpIcon from "../icons/angle-up-icon";
import { Status } from "../../App";

type Props = {
  myProfile?: any;
  status: Status;
  onSignOut: () => void;
};
function ProfileBox({ myProfile, status }: Props) {
  const [showDetail, setShowDetail] = useState<boolean>(false);

  switch (status) {
    case "success":
      return (
        <Wrapper>
          <Header>
            {myProfile?.photoUrl || <PlanetIcon size="30px" />}
            <span>{myProfile?.username}</span>
            {showDetail ? (
              <AngleUpIcon
                size="15px"
                color={dark.foregroundDimmer}
                onClick={() => setShowDetail(!showDetail)}
              />
            ) : (
              <AngleDownIcon
                size="15px"
                color={dark.foregroundDimmer}
                onClick={() => setShowDetail(!showDetail)}
              />
            )}
          </Header>
          <Detail hidden={!showDetail}>
            <span>{myProfile?.email}</span>
            <span>{myProfile?.mention}</span>
          </Detail>
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
  color: ${dark.foregroundDimmer};
  gap: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 20px;

  span {
    flex-grow: 1;
    text-align: left;
    position: relative;
  }
`;

const Detail = styled.div`
  font-size: 15px;
`;
export default ProfileBox;
