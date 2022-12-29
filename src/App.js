import { Component } from "react";
import Counter from "./Counter";
import { EventPractice } from "./EventPractice";
import RedfSample from "./RefSample";
import { Say } from "./Say";
import ScrollBox from "./ScrollBox";
import ValidationSample from "./ValidationSample";
import { IterationSample } from "./IterationSample";

class App extends Component {
  js = "javascript";
  render() {
    return (
      <>
        <Counter></Counter>
        <Say></Say>
        <EventPractice />
        <ValidationSample></ValidationSample>
        <RedfSample />
        <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        <IterationSample />
      </>
    );
  }
}

export default App;
