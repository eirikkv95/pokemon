import React from "react";
import PokemonList from "./components/pokemonList";
import { Popup } from "./components/popup/popup";

function App() {
  return (
    <div className="App">
      <PokemonList />
      <Popup />
    </div>
  );
}

export default App;
