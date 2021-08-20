import React from 'react';

export interface Props {
  tabs: Array<any>;
}

const Dropdown = ({ tabs }: Props) => {
  return (
    <div>
      <select>
        {tabs.map((element) => (
          <option>{element}</option>
        ))}
      </select>
    </div>
  );
};

export { Dropdown };
