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
  ...rest
}) => {
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border",
    {
      "border-blue-600 bg-blue-500": primary,
      "border-gray-900 bg-gray-900": secondary,
      "border-green-600 bg-green-500": success,
      "border-yellow-500 bg-yellow-400": warning,
      "border-red-600 bg-red-500": danger,
      "bg-white": outline,
      "text-white":
        !outline && (primary || secondary || success || warning || danger),
      "text-blue-500": outline && primary,
      "text-black": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-500": outline && danger,
      "rounded-full": rounded,
    }
  );

  return (
    <button {...rest} className={classes}>
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
