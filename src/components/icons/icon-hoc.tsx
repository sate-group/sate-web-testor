import React from "react";

function withIcon<T>(WrappedComponent: React.ComponentType<T>) {
  return class extends React.Component {
    componentWillReceiveProps(
      nextProps: React.ComponentProps<typeof WrappedComponent>
    ) {
      console.log("Current props: ", this.props);
      console.log("Next props: ", nextProps);
    }
    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return <WrappedComponent {...(this.props as T)} />;
    }
  };
}

export default withIcon;
