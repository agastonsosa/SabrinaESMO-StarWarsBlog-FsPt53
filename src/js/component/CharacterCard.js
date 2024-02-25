import React from "react";
import { Link } from "react-router-dom";

export const CharacterCard = ({ character }) => {
    return (
        <div className="row justify-content-center mx-1">
            <div className="card mx-3 mb-5 mt-4">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${character?.uid}.jpg`} className="card-image-top" alt={character?.name} />
                <div className="card-body">
                    <p className="card-title">{character.properties.name}</p>
                    <p className="card-text">
                        Hair color: {character.properties.hair_color} <br />
                        Eye color: {character.properties.eye_color} <br />
                        Gender: {character.properties.gender}
                    </p>
                </div>
                <div className="d-flex justify-content-around my-2">
                    <Link to={`/character/${character?.uid}`} className="card-button py-1 px-3">Details</Link>
                    <button className="card-fav py-1 px-3"><i className="fa-regular fa-star"></i></button>
                </div>
            </div>
        </div>
    );
};
