import React, { useEffect, useState } from 'react';
import Navbar, { Search, SearchResults } from './components/Navbar';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import './App.css';
import Loader from './components/Loader';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
// import { allCharacters } from './data';

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [querry, setQuerry] = useState("");

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch("https://rickandmortyapi.com/api/character");
  //     const data = await res.json();
  //     setCharacters(data.results.slice(1, 8));
  //   }
  //   fetchData();
  // }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading((loading)=>!loading);
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character?name=${querry}`);
        //it return a json and i destructure data from it :)

        setCharacters(data.results.slice(1, 8));
      } catch (err) {
        setCharacters([]);
         // in invalid serachs it return a empty array
        toast.error(err.response.data.error);
         // this (response.data.error) may different in other api's 
         
      }finally{
        setIsLoading((loading)=>!loading);
      }
    }
    fetchData();
  }, [querry])
  return (
    <div className="app">
      <Toaster />
      <Navbar >
        <Search querry={querry} setQuerry={setQuerry} />
        <SearchResults searchResults={characters.length} />
      </Navbar>
      <Main>
        {isLoading ? <Loader /> : <CharacterList characters={characters} />}
        <CharacterDetail />
      </Main>

    </div>
  )
}

export default App;

function Main({ children }) {
  return <div className="main">{children}</div>
}
