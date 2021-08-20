import React from 'react';

export interface Props {
  className: string;
  label: string;
  value: any;
}

const ValueLabelPair = ({ className, label, value }: Props) => {
  return (
    <div className={className}>
      <div
        style={{ display: className === 'Stacked' ? 'inline-block' : 'flex' }}
      >
        <label>{label} </label>
        <div>{value}</div>
      </div>
    </div>
  );
};

export { ValueLabelPair };
