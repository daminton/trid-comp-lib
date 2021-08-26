import React from 'react';
import './Button.css';

export interface ButtonProps {
  buttonName: any;
  onClick: any;
  buttonStyle: any;
  buttonSize: any;
}

const STYLES = ['btn--dark', 'btn--light', 'btn--disabled', 'btn--orchestrate'];

const SIZES = ['btn--small', 'btn--medium', 'btn--large'];

const Button = ({
  buttonName,
  onClick,
  buttonStyle,
  buttonSize,
}: ButtonProps) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type="button"
    >
      {buttonName}
    </button>
  );
};

export { Button };
