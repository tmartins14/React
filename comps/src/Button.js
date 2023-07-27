import React from "react";
import PropTypes from "prop-types";
import className from "classnames";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  // const finalClassName = className({
  //     'bg-blue-500':primary
  //     'bg-blue-500':primary
  // })

  return (
    <button className="px-3 py-1.5 border border-blue-600 bg-blue-500 text-white">
      {children}
    </button>
  );
};

Button.propTypes = {
  checkPurpose: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error("Too many button purposes provided");
    }
  },
};

export default Button;
