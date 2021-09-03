import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Panel } from 'trid-comp-lib';

const App = () => {
  return (
    <div>
      <Panel></Panel>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
