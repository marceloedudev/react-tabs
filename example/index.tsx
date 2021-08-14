import 'react-app-polyfill/ie11';
import '../dist/ReactTabs.css';
import './styles.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Tab, TabGroup } from '../.';

const App = () => {
  const [selected, setSelected] = React.useState<number>(0);

  React.useEffect(() => {
    console.log('selected: ', selected);
  }, [selected]);

  return (
    <div>
      <TabGroup
        widthTab={150}
        selected={selected}
        onSelect={setSelected}
        name="teste"
        colorIndicator="blue"
      >
        <Tab label="Home">Home</Tab>
        <Tab label="Info">Info</Tab>
        <Tab label="Settings">Settings</Tab>
        <Tab label="Disabled" disabled>
          Config
        </Tab>
      </TabGroup>

      <button type="button" onClick={() => setSelected(1)}>
        OnClick
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
