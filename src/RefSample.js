import React, { Component } from "react";

export default class RedfSample extends Component {
  input = React.createRef();
  handleFocus = () => {
    this.input.current.focus();
  };
  render() {
    return (
      <div>
        <input
          ref={this.input}
          //   ref={(ref) => {
          //     this.input = ref;
          //   }}
        />
        <button
          onClick={() => {
            this.handleFocus();
          }}
        >
          Focus
        </button>
      </div>
    );
  }
}
