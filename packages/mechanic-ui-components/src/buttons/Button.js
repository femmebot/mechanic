import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { uid } from "../uid.js";
import * as commonCss from "../common.module.css";
import * as css from "./Button.module.css";

export const Button = props => {
  const _id = useRef(uid("button"));
  const {
    children,
    id = _id.current,
    className,
    variant,
    disabled,
    onClick,
    onFocus,
    onBlur
  } = props;
  const [focus, setFocus] = useState(false);
  const classes = classnames(css.root, commonCss.root, commonCss.button, {
    [className]: className,
    [commonCss.focus]: focus,
    [commonCss.disabled]: disabled
  });

  const handleOnFocus = event => {
    onFocus && onFocus(event);
    setFocus(true);
  };

  const handleOnBlur = event => {
    onBlur && onBlur(event);
    setFocus(false);
  };

  return (
    <button
      id={id}
      className={classes}
      onClick={onClick}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      disabled={disabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  onFocus: () => {},
  onBlur: () => {}
};

Button.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};
