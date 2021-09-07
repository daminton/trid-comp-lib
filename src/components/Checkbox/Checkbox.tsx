import React, { useState } from 'react';
import '../styles.css';

export interface CheckboxProps {
  label: any;
  checkboxStyle: any;
}

const STYLES = ['chk--light', 'chk--disabled', 'chk--dark'];

const Checkbox = ({ label, checkboxStyle }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);

  const checkCheckboxStyle = STYLES.includes(checkboxStyle)
    ? checkboxStyle
    : STYLES[0];

  return (
    <React.Fragment>
      <span
        style={
          checkboxStyle === 'chk--dark'
            ? { color: 'lightgray' }
            : { color: 'black' }
        }
      >
        {label}
      </span>
      <input
        className={`chk ${checkCheckboxStyle}`}
        type="checkbox"
        onChange={handleClick}
        disabled={checkboxStyle === 'chk--disabled' ? true : false}
      />
    </React.Fragment>
  );
};

export { Checkbox };
