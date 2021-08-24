import React from 'react';
require('./Panel.css');

export interface PanelProps {
  panelStyle: any;
}

const STYLES = ['default', 'radius'];

const Panel = ({ panelStyle }: PanelProps) => {
  const checkPanelStyle = STYLES.includes(panelStyle) ? panelStyle : STYLES[0];
  return <div className={`panel ${checkPanelStyle}`} />;
};

export { Panel };
