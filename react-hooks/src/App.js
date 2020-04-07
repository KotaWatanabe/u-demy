import React from 'react';
import './App.css';
import { HookCounterOne } from './components/HookCounterOne';
import { ClassCounterOne } from './components/ClassCounterOne';

function App() {
  return (
    <div className="App">
      <ClassCounterOne />
      <HookCounterOne />
    </div>
  );
}

export default App;
