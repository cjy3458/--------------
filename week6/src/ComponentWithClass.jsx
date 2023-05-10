import React, { Component } from "react";
import PropTypes from "prop-types";

class ComponentWithClass extends Component {
  render() {
    const { name, child, favorite } = this.props;

    return (
      <div>
        안녕하세요 {name}입니당. <br />내 딸은 {child}이구요, <br />
        좋아하는 것은 {favorite}이에요! <br />
      </div>
    );
  }
}

ComponentWithClass.defaultProps = {
  name: "이길동",
};

ComponentWithClass.propTypes = {
  name: PropTypes.string,
  favorite: PropTypes.string.isRequired,
};

export default ComponentWithClass;
