import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Panel } from '../node_modules/trid-comp-lib/dist/components/panel/Panel';
import { ValueLabelPair } from '../node_modules/trid-comp-lib/dist/components/valueLabelPair/ValueLabelPair';
import { Checkbox } from '../node_modules/trid-comp-lib/dist/components/checkbox/Checkbox';
import '../node_modules/trid-comp-lib/dist/components/styles.css';

const App = () => {
  return (
    <div>
      <Panel panelStyle="pnl--radius">
        <ValueLabelPair label="X" value="Y" variant="vlp--stacked--dark" />
        <Checkbox checkboxStyle="chk--light" label="" />
      </Panel>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
