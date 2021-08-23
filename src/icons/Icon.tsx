import React from 'react';

export interface Props {
  variant: any;
}
const searchIcon = (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
  >
    <defs></defs>
    <path
      id="Path_1253"
      data-name="Path 1253"
      className="cls-1"
      d="M19.37,0A19.38,19.38,0,0,0,4.16,7.34a19.68,19.68,0,0,0,.22,24.43,19.4,19.4,0,0,0,15,7.05,19.71,19.71,0,0,0,10.39-3l.34-.22L43.26,48.87a3.91,3.91,0,0,0,5.5,0,4,4,0,0,0,.12-5.59v0L35.66,30.05l.22-.34A19.43,19.43,0,0,0,19.38,0m9.77,29.22a13.81,13.81,0,1,1,4.06-9.78,13.8,13.8,0,0,1-4.06,9.78"
    />
  </svg>
);

const caret = (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
  >
    <defs></defs>
    <g id="Path_10214" data-name="Path 10214">
      <path d="M25,41.27,1.56,17.83A5.33,5.33,0,0,1,9.1,10.29L25,26.19l15.9-15.9a5.33,5.33,0,1,1,7.54,7.54Z" />
    </g>
  </svg>
);

const STYLES = [searchIcon, caret];

const Icon = ({ variant }: Props) => {
  const checkIconStyle = STYLES.includes(variant) ? variant : STYLES[0];
  return <div className={`Icon ${checkIconStyle}`}>{variant}</div>;
};

export { Icon };
