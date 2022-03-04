import React from "react";
import { dark } from "react-colorset";
import styled from "styled-components";

interface WithIconProps {
  size: string;
  title: string;

  padding?: string;
  margin?: string;

  hover?: boolean;
  active?: boolean;

  onClick?: () => void;
}

const widhIcon = <P extends object>(Component: React.ComponentType<P>) => {
  return class extends React.Component<P & WithIconProps> {
    render() {
      const { title, onClick } = this.props;
      return (
        <Wrapper {...this.props} onClick={onClick} title={title}>
          <Component {...(this.props as P)} />
        </Wrapper>
      );
    }
  };
};

const Wrapper = styled.div<WithIconProps>`
  width: ${(p) => p.size};
  heigth: ${(p) => p.size};
  cursor: ${(p) => (!p.onClick ? "" : "pointer")};

  border-radius: 5px;
  padding: ${(p) => p.padding || "5px"};
  margin: ${(p) => p.margin};
  background-color: translate;

  fill: ${dark.foregroundDimmer};

  &:hover {
    background-color: ${(p) => (p.hover ? dark.backgroundHigher : undefined)};
  }
  &:active {
    background-color: ${(p) => (p.active ? dark.backgroundHighest : undefined)};
  }
`;

export default widhIcon;
