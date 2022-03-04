import React from "react";
import { accent, dark } from "react-colorset";
import styled from "styled-components";
import ReactLoading from "react-loading";

export type BoxStatus = "show" | "loading" | "hide" | undefined;
export function convertStatus(
  showCondition: boolean,
  loadingCondition: boolean,
  hideCondition: boolean
): BoxStatus {
  if (showCondition) return "show";
  else if (loadingCondition) return "loading";
  else if (hideCondition) return "hide";

  return;
}
interface WithIconProps {
  status: BoxStatus;
}

export function withBox<P extends object>(Component: React.ComponentType<P>) {
  return class extends React.Component<P & WithIconProps> {
    render() {
      const { status } = this.props;
      
      switch (status) {
        case "show":
          return (
            <Wrapper>
              <Component {...(this.props as P)} />
            </Wrapper>
          );
        case "loading":
          return (
            <Wrapper>
              <ReactLoading width="30px" height="30px" type="spin" />
            </Wrapper>
          );
        case "hide":
          return <></>;
        default:
          return <></>;
      }
    }
  };
}

const Wrapper = styled.div`
  width: 280px;
  user-select: none;
  animation: pulse 1s;

  border-radius: 5px;

  background-color: ${dark.backgroundDefault};
  color: ${dark.foregroundDefault};

  padding: 20px;

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
