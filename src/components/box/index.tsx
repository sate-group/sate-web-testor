import { accent, dark } from "react-colorset";
import styled from "styled-components";

export const Box = styled.div`
  width: 280px;
  user-select: none;
  animation: pulse 1s;

  border-radius: 5px;

  background-color: ${dark.backgroundDefault};
  color: ${dark.foregroundDefault};

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 ${accent.accentPrimaryDefault};
    }
    70% {
      box-shadow: 0 0 0 5px ${dark.backgroundRoot};
    }
    100% {
      box-shadow: 0 0 0 0 ${dark.backgroundRoot};
    }
  }
`;
