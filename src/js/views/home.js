import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";
import { VehicleCard } from "../component/VehicleCard";

export const Home = () => {
    const { store, actions } = useContext(Context);
    
    useEffect(() => {
        actions.getAllCharacters();
        actions.getAllPlanets();
        actions.getAllVehicles();
    }, [actions]);

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
            <div className="card-container">
                {store.planets.map((planet, index) => (
                    <div key={index}>
                        <PlanetCard planet={planet} />
                    </div>
                ))}
            </div>
            <div className="card-container">
                {store.vehicles.map((vehicle, index) => (
                    <div key={index}>
                        <VehicleCard vehicle={vehicle} />
                    </div>
                ))}
            </div>
        </div>
    );
};
