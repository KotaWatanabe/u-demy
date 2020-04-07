import React from 'react';
import './App.css';
import { HookCounterOne } from './components/HookCounterOne';
import { ClassCounterOne } from './components/ClassCounterOne';
import { ClasMouse } from './components/ClasMouse';
import { HookMouse } from './components/HookMouse';

function App() {
  return (
    <div className="App">
      {/* <ClassCounterOne />
      <HookCounterOne /> */}
      {/* <ClasMouse /> */}
      <HookMouse />
    </div>
  );
}

export default App;
