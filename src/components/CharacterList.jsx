import React from 'react';
import { allCharacters } from '../data';

function CharacterList() {
  return (
    <div className="character-list">
      {allCharacters.map(item => <Character key={item.id} item={item} />)}
    </div>
  )
}

export default CharacterList;

function Character({ item }) {
  return (
    <div className="list__item">
      <img src={item.image} alt={item.title} />
      <h3 className='name'>
        {item.gender === "Male" ? <span>&#9794;</span> : <span>&#9792;</span>}
        <span> {item.name}</span>
      </h3>
      <div className="list-item__info info">
        <span className={`status ${item.status === "Dead" ? "red" : ""}`}></span>
        <span> {item.status}</span>
        <span> - {item.species}</span>
      </div>
      <button title='See' className="icon red">&#128065;</button>
    </div>
  )
}