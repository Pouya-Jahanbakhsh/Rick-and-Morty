import React from 'react';
import { HeartIcon } from "@heroicons/react/24/outline";

function Navbar({ children }) {
  return (
    <nav className="navbar">
      <div className="navbar__logo">LOGO</div>
      {children}
    </nav>
  )
}

export default Navbar;

export function Search({ query, setQuery }) {
  return <input value={query} onChange={e => setQuery(e.target.value)} type="text" className='text-field' placeholder='search...' />
};

export function SearchResults({ searchResults }) {
  return <div className="navbar__result">Found {searchResults} characters</div>
};
export function Favourites({numOfFavourites}) {
  return <button className="heart">
    <HeartIcon className="icon" />
    <span className="badge">{numOfFavourites}</span>
  </button>
}
