import React from 'react';

const ValueLabelPair = (props: any) => {
  const { className, labelText, valueText } = props;
  return (
    <div className={className}>
      <div>
        <label>{labelText}</label>
        <div>{valueText}</div>
      </div>
    </div>
  );
};

export default ValueLabelPair;
