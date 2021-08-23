import React from 'react';

export interface Props {
  variant: any;
}

const STYLES = ['searchIcon', 'caret'];

const Icon = ({ variant }: Props) => {
  const checkIconStyle = STYLES.includes(variant) ? variant : STYLES[0];
  return <div className={`Icon ${checkIconStyle}`}>{variant}</div>;
};

export { Icon };
