import styled from "styled-components";
import { Profile } from "../../features/user/user-slice";
import { Box } from "../box";
import PlanetIcon from "../icons/planet-icon";

type Props = {
  profile?: Profile;
  status: "idle" | "pending" | "succeeded" | "failed";
};
function ProfileBox({}: Props) {
  return (
    <Wrapper>
      <PlanetIcon size="30px" />
    </Wrapper>
  );
}

const Wrapper = styled(Box)``;

export default ProfileBox;
