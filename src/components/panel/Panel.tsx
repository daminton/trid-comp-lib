import React from 'react';

export interface Props {
  className: string;
  style: any;
}

const Panel = ({ className, style }: Props) => {
  return <div className={className} style={style}></div>;
};

export default Panel;
