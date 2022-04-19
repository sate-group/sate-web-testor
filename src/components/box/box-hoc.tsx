import React, { useLayoutEffect, useRef } from "react";
import { accent, dark } from "react-colorset";
import styled from "styled-components";
import ReactLoading from "react-loading";
import { HighlightSpanKind } from "typescript";

export type BoxStatus = "show" | "loading" | "hide";
export function convertStatus(
  showCondition: boolean,
  loadingCondition: boolean,
  hideCondition: boolean
): BoxStatus {
  if (showCondition) return "show";
  if (loadingCondition) return "loading";

  return "hide";
}
interface WithIconProps {
  componentId: string;
  status: BoxStatus;
}

export function withBox<P extends object>(Component: React.ComponentType<P>) {
  return class WithBox extends React.Component<P & WithIconProps> {
    state = {
      top: "",
      left: "",
      width: "",
      height: "",
    };

    componentRef: React.RefObject<HTMLDivElement>;

    constructor(props: P & WithIconProps) {
      super(props);
      this.componentRef = React.createRef<HTMLDivElement>();
    }
    componentDidMount() {
      const rect = this.componentRef.current?.getBoundingClientRect();
      if (!rect) return;

      this.setState((s) => ({
        ...s,
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      }));
    }

    componentDidUpdate() {
      console.log(this.state.width, this.state.height);
    }

    render() {
      const { status } = this.props;
      return (
        <Wrapper ref={this.componentRef}>
          <Component {...(this.props as P)} />
          <Loading
            style={{
              display: status !== "loading" ? "none" : "flex",
              width: this.state.width,
              height: this.state.height,
              top: this.state.top,
              left: this.state.left,
            }}
          >
            <ReactLoading width="30px" height="30px" type="spin" />
          </Loading>
        </Wrapper>
      );
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

const Loading = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  color: ${dark.foregroundDefault};
  background-color: ${dark.backgroundDefault};
`;
