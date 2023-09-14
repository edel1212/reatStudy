// 👉 props-type     사용
import PropTypes from "prop-types";
import styled from "./Button.module.css";
function Button({ text }) {
  return <button className={styled.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

// Export 시켜줌
export default Button;
