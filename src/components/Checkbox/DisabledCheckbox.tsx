import React from 'react';

const Checkbox = (props: any) => {
  const { label, value, ...rest } = props;
  return (
    <label>
      <span>{label}</span>
      <input type="checkbox" checked={value} disabled {...rest} />
    </label>
  );
};

export default Checkbox;
