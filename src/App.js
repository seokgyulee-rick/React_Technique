import { Component } from "react";
import Counter from "./Counter";
import { EventPractice } from "./EventPractice";
import RedfSample from "./RefSample";
import { Say } from "./Say";
import ValidationSample from "./ValidationSample";

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
      </>
    );
  }
}

export default App;
