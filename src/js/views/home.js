import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";

export const Home = () => {
    const { store, actions } = useContext(Context);
    
    useEffect(() => {
        actions.getAllCharacters();
    }, []);

    return (
        <div className="text-center mt-2">
            <h1>MAY THE FORCE BE WITH YOU...</h1>
            <div className="card-container">
                {store.people.map((character, index) => (
                    <div key={index}>
                        <CharacterCard character={character} />
                    </div>
                ))}
            </div>
        </div>
    );
};
