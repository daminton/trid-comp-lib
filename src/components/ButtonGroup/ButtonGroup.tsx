import React from 'react';
import '../styles.css';
export interface ButtonGroupProps {
  buttons: Array<any>;
}

const ButtonGroup = ({ buttons }: ButtonGroupProps) => {
  return (
    <div>
      {buttons.map((button) => (
        <div>{button}</div>
      ))}
    </div>
  );
};

export { ButtonGroup };
