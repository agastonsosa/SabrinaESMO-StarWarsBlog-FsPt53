import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CharacterCard = (props) => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.addDetailToCharacters(props.character?.uid);
    }, [props.character?.uid, actions]);

    return (
        <div>
            <div className="row justify-content-center mx-1">
                <div className="card mx-3 mb-5 mt-4">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${props.character?.uid}.jpg`} className="card-image-top" alt={props.character?.name} />
                    <div className="card-body">
                        <p className="card-title">{props.character?.name}</p>
                        <p className="card-text">
                            Eye color: {store.characterDetails?.eye_color} <br />
                            Hair color: {store.characterDetails?.hair_color} <br />
                            Gender: {store.characterDetails?.gender}
                        </p>
                    </div>
                    <div className="d-flex justify-content-around my-2">
                        <Link to={`/character/${props.character?.uid}`} className="card-button py-1 px-3">Details</Link>
                        <button className="card-fav py-1 px-3"><i className="fa-regular fa-star"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};