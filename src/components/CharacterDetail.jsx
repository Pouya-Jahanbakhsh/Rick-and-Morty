import React from 'react';
import { character, episodes } from '../data';
import { ArrowUpOnSquareIcon } from '@heroicons/react/24/outline';

function CharacterDetail() {
    return (
        <div style={{ flex: 1 }}>
            <div className="character-detail">
                <img className='character-detail__img' src={character.image} alt={character.name} />
                <div className="character-detail__info">
                    <CharacterName item={character} />
                    <CharacterInfo item={character} />
                    <CharacterLocation item={character} />
                    <CharacterAction />
                </div>
            </div>
            <div className="character-episodes">
                <EpisodeTitle />
                <Episodes episodes={episodes} />
            </div>
        </div>
    );
};

function CharacterName({ item }) {
    return (
        <h3 className="name">
            {item.gender === "Male" ? <span>&#9794;</span> : <span>&#9792;</span>}
            <span>&nbsp;{item.name}</span>
        </h3>)
};

function CharacterInfo({ item }) {
    return (
        <div className="info">
            <span className={`status ${item.status === "Dead" ? "red" : ""}`}></span>
            <span> {item.status}</span>
            <span> - {item.species}</span>
        </div>
    )
};

function CharacterLocation({ item }) {
    return (
        <div className="location">
            <p>Last known location:</p>
            <p>{item.location.name}</p>
        </div>)
};

function CharacterAction() {
    return (
        <div className="action">
            <button className="btn btn--primary">Add to my Favorites</button>
        </div>)
};

function EpisodeTitle() {
    return (
        <div className="title">
            <h2>List of Episodes:</h2>
            <button><ArrowUpOnSquareIcon className='icon' /></button>
        </div>
    )
};

function Episodes({ episodes }) {
    return (
        <ul>
            {episodes.map((item, index) => (
                <li key={item.id}>
                    <div>
                        {String(index + 1).padStart(2, "0")} - {item.episode} : <strong>{item.name}</strong>
                    </div>
                    <div className="badge badge--secondary">{item.air_date}</div>
                </li>
            ))}
        </ul>)
};

export default CharacterDetail;