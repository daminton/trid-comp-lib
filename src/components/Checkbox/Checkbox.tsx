import React from 'react';

const Checkbox = (props: any) => {
  const { label, value, disabled, variant, ...rest } = props;
  return (
    <label
      style={{
        display: variant === 'inline' ? 'inline' : 'block',
      }}
    >
      <span>{label}</span>
      <input
        type="checkbox"
        checked={value}
        disabled={variant === 'Disabled' ? true : false}
        {...rest}
      />
    </label>
  );
};

export default Checkbox;
