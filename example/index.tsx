import 'react-app-polyfill/ie11';
import '../dist/ReactTabs.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Tab, TabGroup } from '../.';

const App = () => {
  const [selected, setSelected] = React.useState<number>(0);

  const [items, setItems] = React.useState(['A', 'B']);

  const [stateInput, setStateInput] = React.useState<any>({
    name: '',
  });

  const [selected2, setSelected2] = React.useState<number>(0);

  React.useEffect(() => {
    console.log('selected: ', selected);
  }, [selected]);

  return (
    <>
      <div>
        <TabGroup
          widthTab={150}
          selected={selected}
          onSelect={setSelected}
          name="example"
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

      <div>
        <TabGroup name="example2" selected={selected2} onSelect={setSelected2}>
          {items.map(item => (
            <Tab key={item} label={item}>
              {item}
            </Tab>
          ))}
        </TabGroup>

        <input
          name="name"
          type="text"
          value={stateInput.name}
          onChange={event =>
            setStateInput({
              [event.target.name]: event.target.value,
            })
          }
        />

        <button
          type="button"
          onClick={() => {
            setItems(oldState => [...oldState, stateInput.name]);
            setStateInput(oldState => ({ ...oldState, name: '' }));
            setSelected2(items.length);
          }}
        >
          Add
        </button>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
