import React from 'react';
import Navbar from './components/Navbar';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import './App.css';

function App() {

  return (
    <div className="app">
      <Navbar />
      <div className="main">
      <CharacterList />
      <CharacterDetail/>
      </div>
    </div>
  )
}

export default App
