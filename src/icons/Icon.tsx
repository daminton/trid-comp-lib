import React from 'react';

export interface Props {
  variant: Array<any>;
}

const Icon = ({ variant }: Props) => {
  return <div>{variant}</div>;
};

export default Icon;
