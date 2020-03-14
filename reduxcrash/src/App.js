import React from 'react';
import Posts from '../src/components/Posts'
import PostForm from './components/Postform'
import './App.css';

function App() {
  return (
    <div className="App">
      <PostForm />
      <hr/>
      <Posts />
    </div>
  );
}

export default App;
