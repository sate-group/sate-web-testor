import React, { Component } from "react";

interface WithIconProps {
  size: string;
  color?: string;
  padding?: string;
  margin?: string;
  onClick?: () => void;
}

const widhIcon = <P extends object>(Component: React.ComponentType<P>) => {
  return class extends React.Component<P & WithIconProps> {
    render() {
      const { ...props } = this.props;
      return (
        <div
          style={{
            width: props.size,
            height: props.size,
            padding: props.padding,
            margin: props.margin,
            fill: props.color,
            cursor: props.onClick !== undefined ? "pointer" : "",
          }}
          onClick={props.onClick}
        >
          <Component {...(props as P)} />
        </div>
      );
    }
  };
};

export default widhIcon;
