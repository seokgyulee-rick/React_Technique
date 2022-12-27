import { Component } from "react";

class Counter extends Component {
  //   constructor(props) {
  //     super(props);
  //     // state 초기값 세팅
  //     this.state = {
  //       number: 0,
  //       fixedNumber: 10,
  //     };
  //   }
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>{fixedNumber}</h2>
        <button
          //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("방금 setState가 호출되었습니다.");
                console.log(this.state);
              }
            );

            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            // this.setState((prevState) => {
            //   return { number: prevState.number + 1 };
            // });
            // this.setState((prevState) => ({
            //   number: prevState.number + 1,
            // }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
