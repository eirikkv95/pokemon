import React, { useContext } from "react";
import "./pokemonList.scss";
import Pokemon from "./pokemon";
import SearchInput from "./search/searchInput";
import ErrorMessage from "./Error/ErrorMessage";
import { PokemonContext } from "../context/pokemonContext";

const PokemonList = () => {
  const appContext = useContext(PokemonContext);
  const { filteredPokemon, error, handleChange, searchTerm } = appContext;

  return error === "" ? (
    <>
      <SearchInput searchTerm={searchTerm} handleChange={handleChange} />

      <div className="list">
        {filteredPokemon.map((poke) => (
          <Pokemon
            name={poke.name}
            id={poke.id}
            image={poke.image}
            key={poke.id}
          />
        ))}
      </div>
    </>
  ) : (
    <ErrorMessage error={error} />
  );
};

export default PokemonList;
