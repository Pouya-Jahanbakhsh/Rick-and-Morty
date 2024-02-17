import React from 'react';

function CharacterList({characters}) {
  // if (!characters) return <h2>You have not added any notes yet!</h2>;
  if(characters.length == 0)return<h2 className="empty">No Characters found!!</h2>;
  
  return(
    <div className="characters-list">
      {characters.map(item => <Character key={item.id} item={item} />)}
    </div>
  )
}

export default CharacterList;

function Character({ item }) {
  return (
    <div className="list__item">
      <img src={item.image} alt={item.title} />
      <h3 className='name'>
        {item.gender === "Male" ? <span style={{fontWeight:400}}>&#9794;</span> : <span>&#9792;</span>}
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