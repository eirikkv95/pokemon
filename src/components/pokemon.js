import React, { useContext } from "react";
import { PokemonContext } from "../context/pokemonContext";
import "./pokemon.scss";

const Pokemon = ({ name, id, image }) => {
  const appContext = useContext(PokemonContext);
  const { openModal } = appContext;

  return (
    <div className="pokemon" onClick={() => openModal(id)}>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{id}</p>
    </div>
  );
};

export default Pokemon;
