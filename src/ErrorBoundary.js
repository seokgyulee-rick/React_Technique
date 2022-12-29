import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, info) {
    console.log("componenetDidCatch");
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }
  render() {
    console.log("!!!!!!");
    if (this.state.error) {
      console.log("에러 부분");
      return <div>에러가 발생했습니다!</div>;
    }
    return this.props.children;
  }
}
