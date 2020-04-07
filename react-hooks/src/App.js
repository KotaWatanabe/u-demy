import React from 'react';
import './App.css';
import { HookCounterOne } from './components/HookCounterOne';
import { ClassCounterOne } from './components/ClassCounterOne';
import { ClasMouse } from './components/ClasMouse';
import { HookMouse } from './components/HookMouse';
import { MouseContainer } from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';

function App() {
  return (
    <div className="App">
      {/* <ClassCounterOne />
      <HookCounterOne /> */}
      {/* <ClasMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter />
      <IntervalHookCounter /> */}
      <DataFetching />
    </div>
  );
}

export default App;
