import React, { useState } from 'react';

export interface CheckboxProps {
  label: any;
  checkboxStyle: any;
}

const STYLES = ['chk--primary', 'chk--disabled'];

const Checkbox = ({ label, checkboxStyle }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);

  const checkCheckboxStyle = STYLES.includes(checkboxStyle)
    ? checkboxStyle
    : STYLES[0];

  return (
    <label
      style={{
        display: checkboxStyle === 'inline' ? 'inline' : 'block',
      }}
    >
      <span>{label}</span>
      <input
        className={`chk ${checkCheckboxStyle}`}
        type="checkbox"
        onChange={handleClick}
        disabled={checkboxStyle === 'chk--disabled' ? true : false}
      />
    </label>
  );
};

export { Checkbox };
