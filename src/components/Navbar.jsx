import React from 'react';
import { HeartIcon } from "@heroicons/react/24/outline";

function Navbar({ children }) {
  return (
    <nav className="navbar">
      <div className="navbar__logo">LOGO</div>
      {children}
      <button className="heart">
        <HeartIcon className="icon" />
        <span className="badge">4</span>
      </button>
    </nav>
  )
}

export default Navbar;

export function Search({querry , setQuerry}) {
  return <input value={querry} onChange={e => setQuerry(e.target.value)} type="text" className='text-field' placeholder='search...' />
};

export function SearchResults({ searchResults }) {
  return <div className="navbar__result">Found {searchResults} characters</div>
};
