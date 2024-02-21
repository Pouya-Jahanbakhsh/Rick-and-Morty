import React, { useEffect, useState } from 'react';
import Navbar, { Favourites, Search, SearchResults } from './components/Navbar';
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

  const [query, setQuery] = useState("rick"); // for search 
  const [selectedId , setSelectedId] = useState(null); // for selecting character
  const [favourites, setFavourites] = useState([]);
  

  function handleSelectCharacter(id){
    setSelectedId((prevId)=>prevId == id ? null : id);
  }
  const handleAddFavourite = (char) =>{
    setFavourites((preFav) => [...preFav , char]);
  }
  const handleRemoveFavourite = (char) => {
    // const newFavourites = favourites.filter(item => item !== char);
    
    // setFavourites((favourites) => favourites.filter(item => item !== char)); it has a bug!!!
    setFavourites((favourites) => favourites.filter(item => item.id !== char.id));
  }

  const isAddToFavourite = favourites.map((fav) => fav.id).includes(selectedId);

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
        setIsLoading((loading) => !loading);
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character?name=${query}`);
        //it return a json and i destructure data from it :)

        setCharacters(data.results);
      } catch (err) {
        setCharacters([]);
        // in invalid serachs it return a empty array
        toast.error(err.response.data.error);
        // this (response.data.error) may different in other api's 

      } finally {
        setIsLoading((loading) => !loading);
      }
    }
    fetchData();
  }, [query])

  return (
    <div className="app">
      <Toaster />
      <Navbar >
        <Search query={query} setQuery={setQuery} />
        <SearchResults searchResults={characters.length} />
        <Favourites numOfFavourites={favourites.length} />
      </Navbar>
      <Main>
        {isLoading ?
          <div style={{width:"40%"}} ><Loader /></div>
          :
          <CharacterList characters={characters}  onSelectCharacter={handleSelectCharacter} selectedId={selectedId} />}
        <CharacterDetail selectedId={selectedId} onAddFavourite={handleAddFavourite} onRemoveFavourite={handleRemoveFavourite} isAddToFavourite={isAddToFavourite} />
      </Main>

    </div>
  )
}

export default App;

function Main({ children }) {
  return <div className="main">{children}</div>
}
