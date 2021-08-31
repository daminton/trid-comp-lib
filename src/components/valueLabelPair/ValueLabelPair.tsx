import React from 'react';
import './ValueLabelPair.css';

export interface ValueLabelPairProps {
  variant: any;
  label: string;
  value: any;
}

const STYLES = [
  'VLP--stacked--Light',
  'VLP--stacked--Light',
  'VLP--stacked--dark',
  'VLP--inline--dark',
];

const ValueLabelPair = ({ variant, label, value }: ValueLabelPairProps) => {
  const checkVariant = STYLES.includes(variant) ? variant : STYLES[0];
  return (
    <div>
      <div className={`vlp ${checkVariant}`}>
        <label
          style={
            checkVariant === 'VLP--stacked--Light' || 'VLP--stacked--Light'
              ? { color: 'lightgray' }
              : { color: 'black' }
          }
        >
          {label}
        </label>
        <div>{value}</div>
      </div>
    </div>
  );
};

export { ValueLabelPair };
