import { Component } from "react";
import Counter from "./Counter";
import { EventPractice } from "./EventPractice";
import RedfSample from "./RefSample";
import { Say } from "./Say";
import ScrollBox from "./ScrollBox";
import ValidationSample from "./ValidationSample";
import { IterationSample } from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
class App extends Component {
  js = "javascript";
  state = {
    color: "#000000",
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

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
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
