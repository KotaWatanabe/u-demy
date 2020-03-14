import React from 'react';
import Posts from '../src/components/Posts'
import PostForm from './components/Postform'
import { Provider } from 'react-redux'
import store from './store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr/>
        <Posts />
      </div>
    </Provider>

  );
}

export default App;
