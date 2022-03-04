import React, { useLayoutEffect, useRef } from "react";
import { accent, dark } from "react-colorset";
import styled from "styled-components";
import ReactLoading from "react-loading";
import { HighlightSpanKind } from "typescript";

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
  componentId: string;
  status: BoxStatus;
}

export function withBox<P extends object>(Component: React.ComponentType<P>) {
  return class WithBox extends React.Component<P & WithIconProps> {
    state = {
      width: "",
      heigth: "",
    };

    componentRef: React.RefObject<HTMLDivElement>;

    constructor(props: P & WithIconProps) {
      super(props);
      this.componentRef = React.createRef<HTMLDivElement>();
    }
    componentDidMount() {
      const element = document.getElementById(this.props.componentId);
      // console.log(this.props.componentId, element?.getBoundingClientRect());
      console.log(this.componentRef);
    }

    componentDidUpdate() {
      console.log(this.componentRef, "when updated");
    }

    render() {
      const { status } = this.props;
      switch (status) {
        case "show":
          return (
            <Wrapper ref={this.componentRef}>
              <Component {...(this.props as P)} />
            </Wrapper>
          );
        case "loading":
          return (
            <Wrapper ref={this.componentRef}>
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
