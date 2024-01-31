import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import './App.css';
import { allCharacters } from './data';

function App() {
  const [characters, setCharacters] = useState(allCharacters);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      setCharacters(data.results);
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      <Navbar searchResults={characters.length} />
      <div className="main">
        <CharacterList characters={characters} />
        <CharacterDetail />
      </div>
    </div>
  )
}

export default App
