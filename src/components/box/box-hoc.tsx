import React from "react";
import { accent, dark } from "react-colorset";
import styled from "styled-components";

interface WithIconProps {}

const withBox = <P extends object>(Component: React.ComponentType<P>) => {
  return class extends React.Component<P & WithIconProps> {
    render() {
      const {} = this.props;
      return (
        <Wrapper {...this.props}>
          <Component {...(this.props as P)} />
        </Wrapper>
      );
    }
  };
};

const Wrapper = styled.div<WithIconProps>`
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

export default withBox;
