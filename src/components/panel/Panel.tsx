import React from 'react';
import '../styles.css';

export interface PanelProps {
  panelStyle: any;
  children: any;
}

const STYLES = ['pnl--default', 'pnl--radius', 'pnl--small'];

const Panel = ({ panelStyle, children }: PanelProps) => {
  const checkPanelStyle = STYLES.includes(panelStyle) ? panelStyle : STYLES[0];
  return <div className={`panel ${checkPanelStyle}`}>{children}</div>;
};

export { Panel };
