import React, { Component } from "react";

export default class RedfSample extends Component {
  handleFocus = () => {
    this.input.focus();
  };
  render() {
    return (
      <div>
        <input
          ref={(ref) => {
            this.input = ref;
          }}
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
