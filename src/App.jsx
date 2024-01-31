import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import './App.css';
import { allCharacters } from './data';

function App() {
  const [characters , setCharacters] = useState(allCharacters);

  return (
    <div className="app">
      <Navbar searchResulst={characters.length} />
      <div className="main">
      <CharacterList characters={characters} />
      <CharacterDetail/>
      </div>
    </div>
  )
}

export default App
