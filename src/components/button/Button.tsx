import React from 'react';
import './Button.css';

export interface Props {
  buttonName: any;
  onClick: any;
  buttonStyle: any;
  buttonSize: any;
}

const STYLES = ['btn--primary', 'btn--secondary', 'btn--disabled'];

const SIZES = ['btn--medium', 'btn--large'];

const Button = ({ buttonName, onClick, buttonStyle, buttonSize }: Props) => {
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
