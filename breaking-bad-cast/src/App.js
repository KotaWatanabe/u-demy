import React, { useState, useEffect  }from 'react';
import './App.css';
import Header from './components/ui/Header'
import axios from 'axios';
import CharacterGrid from './components/characcters/CharacterGrid'
import Search from './components/ui/Search'

function App() {
  const [ items, setItems ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [query, setQuery] = useState('');

  const getQuery = (text) => {
    setQuery(text)
  }

  useEffect(() => {
    const fetchItems = async() => {
      const res = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      const data = res.data;
      setItems(data);
      setIsLoading(false);

    }
    fetchItems()
  },[query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={getQuery}/>
      <CharacterGrid characters={items} isLoading={isLoading}/>
    </div>
  );
}

export default App;
