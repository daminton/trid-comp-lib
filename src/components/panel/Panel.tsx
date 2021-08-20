import React from 'react';

export interface PanelProps {
  className: string;
  style: any;
}

const Panel = ({ className, style }: PanelProps) => {
  return <div className={className} style={style}></div>;
};

export { Panel };
