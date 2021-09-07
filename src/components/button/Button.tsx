import React from 'react';
import { Icon } from '../..';
import '../styles.css';

export interface ButtonProps {
  buttonName: any;
  onClick: any;
  buttonStyle: any;
  buttonSize: any;
  buttonIcon: any;
}

const STYLES = [
  'btn--dark',
  'btn--light',
  'btn--disabled',
  'btn--orchestrate',
  'btn--icon--dark',
  'btn--icon--light',
];

const SIZES = ['btn--small', 'btn--medium', 'btn--large'];

const Button = ({
  buttonName,
  onClick,
  buttonStyle,
  buttonSize,
  buttonIcon,
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
      disabled={checkButtonStyle === 'btn--disabled' ? true : false}
    >
      <Icon variant={buttonIcon} />
      {buttonName}
    </button>
  );
};

export { Button };
