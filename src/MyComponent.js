import PropTypes from "prop-types";
import { Component } from "react";

class MyComponent extends Component {
  render() {
    this.props.name = "new name";
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        안녕하세요 제 이름은 {name}입니다. children 값은 {children}입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

// const MyComponent = (props) => {
//   const { name, children, favoriteNumber } = props;
//   return (
//     <div>
//       안녕하세요 제 이름은 {name}입니다. children 값은 {children}입니다. 제가
//       좋아하는 숫자는 {favoriteNumber} 입니다.
//     </div>
//   );
// };

MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
