import React from 'react';

function CharacterList({characters , onSelectCharacter , selectedId}) {
  // if (!characters) return <h2>You have not added any notes yet!</h2>;
  if(characters.length == 0)return<h2 className="empty-character-list">No Characters found!!</h2>;

  return(
    <div className="characters-list">
      {characters.map(item => <Character key={item.id} item={item} onSelectCharacter={onSelectCharacter} selectedId={selectedId} />)}
    </div>
  )
}

export default CharacterList;

function Character({ item , onSelectCharacter , selectedId }) {
  return (
    <div className="list__item" onClick={()=>onSelectCharacter(item.id)} >
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
      <button title='See' className={`icon ${item.id === selectedId ? "red" : ""}`}>&#128065;</button>
    </div>
  )
}