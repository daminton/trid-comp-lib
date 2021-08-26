import React from 'react';

export interface Props {
  variant: any;
}

const Icon = ({ variant }: Props) => {
  return <div>{variant}</div>;
};

export { Icon };
