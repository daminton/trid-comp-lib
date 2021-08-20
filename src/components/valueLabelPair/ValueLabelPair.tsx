import React from 'react';

export interface ValueLabelPairProps {
  className: string;
  label: string;
  value: any;
}

const ValueLabelPair = ({ className, label, value }: ValueLabelPairProps) => {
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
