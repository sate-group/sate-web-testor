import { Button, TextField } from "@mui/material";
import { dark } from "react-colorset";
import Popup from "reactjs-popup";
import styled from "styled-components";
import SatelliteIcon from "./satellite-icon";

type Props = {
  open: boolean;
};
function ConnectionModal(props: Props) {
  return (
    <Wrapper modal open={props.open} closeOnDocumentClick={false}>
      <div className="cover">
        <SatelliteIcon size="50%" />
        <span>Connection </span>
      </div>
      <form>
        <TextField
          id="filled-basic"
          label="Device Serial Code"
          variant="filled"
          type="text"
        />
        <TextField
          id="filled-basic"
          label="Password"
          variant="filled"
          type="password"
        />
        <Button type="submit" variant="contained">
          CONFIRM
        </Button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled(Popup)`
  &-overlay {
    background-color: ${dark.backgroundOverlay};
  }
  &-content {
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 300px;
    padding: 40px 20px;

    border-radius: 5px;

    background-color: ${dark.backgroundRoot};
    color: ${dark.foregroundDefault};

    user-select: none;

    .cover {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      font-size: 30px;

      margin: 20px 0;
    }

    form {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default ConnectionModal;
