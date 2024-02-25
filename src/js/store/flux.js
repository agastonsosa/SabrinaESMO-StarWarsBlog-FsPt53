const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            planets: [],
            vehicles: [],
            characterDetails: null,
            planetDetails: [],
            vehicleDetails: [],
        },
        actions: {
            getAllCharacters: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/people/");
                    const data = await response.json();
                    
                    // Obtener los detalles de cada personaje
                    const charactersWithDetails = await Promise.all(data.results.map(async character => {
                        const characterResponse = await fetch(`https://www.swapi.tech/api/people/${character.uid}`);
                        const characterData = await characterResponse.json();
                        return characterData.result;
                    }));
        
                    // Actualizar el estado con los personajes y sus detalles
                    setStore({ people: charactersWithDetails });
                } catch (error) {
                    console.error("Error fetching characters:", error);
                }
            },

            getAllPlanets: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/planets/");
                    const data = await response.json();
                    setStore({ planets: data.results });
                } catch (error) {
                    console.error("Error fetching planets:", error);
                }
            },

            getAllVehicles: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/vehicles/");
                    const data = await response.json();
                    setStore({ vehicles: data.results });
                } catch (error) {
                    console.error("Error fetching vehicles:", error);
                }
            },

			addDetailToCharacters: async (uid) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
					const data = await response.json();
					const updatedCharacter = data.result;
					setStore({ characterDetails: updatedCharacter });
				} catch (error) {
					console.error("Error fetching character details:", error);
				}
			},

            addDetailToPlanets: async (uid) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
                    const data = await response.json();
                    const newPlanets = getStore().planets.map(planet => {
                        if (planet.uid === uid) {
                            return Object.assign(planet, data.result);
                        } else {
                            return planet;
                        }
                    });
                    setStore({ planets: newPlanets });
                } catch (error) {
                    console.error("Error fetching planet details:", error);
                }
            },

            addDetailToVehicles: async (uid) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`);
                    const data = await response.json();
                    const newVehicles = getStore().vehicles.map(vehicle => {
                        if (vehicle.uid === uid) {
                            return Object.assign(vehicle, data.result);
                        } else {
                            return vehicle;
                        }
                    });
                    setStore({ vehicles: newVehicles });
                } catch (error) {
                    console.error("Error fetching vehicle details:", error);
                }
            },
        }
    };
};

export default getState;
