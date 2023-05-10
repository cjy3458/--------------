import React from "react";
import PropTypes from "prop-types";

const ComponentWithFunction = ({ name, child, favorite }) => {
  return (
    <div>
      안녕하세요 {name}입니당. <br />내 딸은 {child}이구요, <br />
      좋아하는 것은 {favorite}이에요!
    </div>
  );
};

ComponentWithFunction.defaultProps = {
  name: "이길동",
};

ComponentWithFunction.propTypes = {
  name: PropTypes.string,
  favorite: PropTypes.string.isRequired,
};

export default ComponentWithFunction;
