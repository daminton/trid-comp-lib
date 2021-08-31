import React from 'react';
import { Button } from '../button';

export interface ButtonGroupProps {
  buttons: Array<any>;
}

const ButtonGroup = ({ buttons }: ButtonGroupProps) => {
  return (
    <>
      {buttons.map((buttonLabel, i) => (
        <Button
          key={i}
          buttonName={buttonLabel}
          buttonSize={buttonSize}
          buttonStyle={buttonStyle}
          onClick={onClick}
        />
      ))}
    </>
  );
};

export { ButtonGroup };
