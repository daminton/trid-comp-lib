import React from 'react';

export interface DropdownProps {
  tabs: Array<any>;
}

const Dropdown = ({ tabs }: DropdownProps) => {
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
