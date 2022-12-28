import { useState } from "react";

export const EventPractice = () => {
  //   const [username, setUsername] = useState("");
  //   const [message, setMesssage] = useState("");
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  //   const onChangeUsername = (e) => setUsername(e.target.value);
  //   const onChangeMessage = (e) => setMesssage(e.target.value);

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = (e) => {
    alert(username + " : " + message);
    // setMesssage("");
    // setUsername("");
    setForm({
      username: "",
      message: "",
    });
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        value={username}
        name="username"
        placeholder="사용자명"
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <input
        type="text"
        value={message}
        name="message"
        placeholder="아무거나 입력해 보세요"
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={onClick}>delete</button>
    </div>
  );
};

// 컴포넌트 방식
// import { Component } from "react";

// class EventPractice extends Component {
//   state = {
//     username: "",
//     message: "",
//   };
//   //   constructor(props) {
//   //     super(props);
//   //     this.handleChange = this.handleChange.bind(this);
//   //     this.handleClick = this.handleClick.bind(this);
//   //   }

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleClick = () => {
//     alert(this.state.message);
//     this.setState({
//       message: "",
//     });
//   };

//   handleUsernameClick = () => {
//     alert(this.state.username);
//     this.setState({
//       username: "",
//     });
//   };

//   handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       this.handleClick();
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           value={this.state.username}
//           name="username"
//           placeholder="사용자명"
//           onChange={this.handleChange}
//         />

//         <button onClick={this.handleUsernameClick}>delete</button>
//         <input
//           type="text"
//           value={this.state.message}
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <button onClick={this.handleClick}>delete</button>
//       </div>
//     );
//   }
// }
// export default EventPractice;
