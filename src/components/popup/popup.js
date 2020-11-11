import React, { useContext } from "react";
import { PokemonContext } from "../../context/pokemonContext";
import "./popup.scss";
export const Popup = () => {
  const { modal, isOpen } = useContext(PokemonContext);
  console.log(isOpen);
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      {modal.types &&
        modal.types.map((type) => (
          <li key={type.type.name}>{type.type.name}</li>
        ))}
    </div>
  );
};
