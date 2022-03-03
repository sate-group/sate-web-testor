import { dark } from "react-colorset";
import styled from "styled-components";
import { Box } from "../box";
import PlanetIcon from "../icons/planet-icon";
import ReactLoading from "react-loading";
import AngleDownIcon from "../icons/angle-down-icon";
import { useState } from "react";
import AngleUpIcon from "../icons/angle-up-icon";

type Props = {
  myProfile?: any;
  status: "idle" | "pending" | "succeeded" | "failed";
};
function ProfileBox({ myProfile, status }: Props) {
  const [showDetail, setShowDetail] = useState<boolean>(false);

  switch (status) {
    case "succeeded":
      return (
        <Wrapper>
          <Header>
            {myProfile?.photoUrl || <PlanetIcon size="30px" />}
            <span>{myProfile?.username}</span>
            {showDetail ? (
              <AngleUpIcon
                size="17px"
                color={dark.foregroundDimmer}
                onClick={() => setShowDetail(!showDetail)}
              />
            ) : (
              <AngleDownIcon
                size="17px"
                color={dark.foregroundDimmer}
                onClick={() => setShowDetail(!showDetail)}
              />
            )}
          </Header>
          <div className="detail" hidden={!showDetail}>
            <span>{myProfile?.email}</span>
            <span>{myProfile?.mention}</span>
          </div>
        </Wrapper>
      );
    case "pending":
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
  gap: 20px;

  .detail {
    display: flex;
    flex-direction: column;

    color: ${dark.foregroundDimmer};
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  color: ${dark.foregroundDimmer};

  span {
    flex-grow: 1;
    text-align: left;
    position: relative;
    bottom: 3px;
  }
`;
export default ProfileBox;
