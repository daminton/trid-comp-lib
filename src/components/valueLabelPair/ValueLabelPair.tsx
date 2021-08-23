import React from 'react';
import './ValueLabelPair.css';

export interface ValueLabelPairProps {
  variant: any;
  label: string;
  value: any;
}

const STYLES = ['stacked', 'inline'];

const ValueLabelPair = ({ variant, label, value }: ValueLabelPairProps) => {
  const checkVariant = STYLES.includes(variant) ? variant : STYLES[0];
  return (
    <div>
      <div className={`vlp ${checkVariant}`}>
        <label>{label} </label>
        <div>{value}</div>
      </div>
    </div>
  );
};

export { ValueLabelPair };
