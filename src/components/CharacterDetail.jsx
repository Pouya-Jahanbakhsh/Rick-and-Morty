import React from 'react'
import { character, episodes } from '../data'
import { ArrowUpOnSquareIcon, LifebuoyIcon } from '@heroicons/react/24/outline';

function CharacterDetail() {
    return (
        <div style={{ flex: 1 }}>
            <div className="character-detail">
                <img className='character-detail__img' src={character.image} alt={character.name} />
                <div className="character-detail__info">
                    <h3 className="name">
                        {character.gender === "Male" ? <span>&#9794;</span> : <span>&#9792;</span>}
                        <span>&nbsp;{character.name}</span>
                    </h3>
                    <div className="info">
                        <span className={`status ${character.status === "Dead" ? "red" : ""}`}></span>
                        <span> {character.status}</span>
                        <span> - {character.species}</span>
                    </div>
                    <div className="location">
                        <p>Last known location:</p>
                        <p>{character.location.name}</p>
                    </div>
                    <div className="action">
                        <button className="btn btn--primary">Add to my Favorites</button>
                    </div>
                </div>
            </div>
            <div className="character-episodes">
                <div className="title">
                    <h2>List of Episodes:</h2>
                    <button><ArrowUpOnSquareIcon className='icon' /></button>
                </div>
                <ul>
                    {episodes.map((item, index) => (
                        <li key={item.id}>
                            <div>
                                {String(index + 1).padStart(2, "0")} - {item.episode} : <strong>{item.name}</strong>
                            </div>
                            <div className="badge badge--secondary">{item.air_date}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CharacterDetail;