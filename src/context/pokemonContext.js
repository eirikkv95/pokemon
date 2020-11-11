import React, { createContext, useEffect, useState } from 'react';

const PokemonContext = createContext(null);

const PokemonProvider = (props) => {
  const [collection, setCollection] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState([]);

  const initial = {
    collection: [],
    searcTerm: '',
    filteredPokemon: [],
    erro: '',
    loading: false,
    isOpen: false,
    modal: [],
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const openModal = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    setModal(pokemon);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=135&offset=251'
        );
        const data = await response.json();
        setCollection(
          data.results.map((pokemon, index) => ({
            name: pokemon.name,
            id: index + 252,
            url: `https://pokeapi.co/api/v2/pokemon/${index + 252}/`,
            image: `https://pokeres.bastionbot.org/images/pokemon/${
              index + 252
            }.png `,
          }))
        );
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };

    fetchPokemon();
  }, []);

  useEffect(() => {
    setFilteredPokemon(
      collection.filter((pokemon) => {
        return (
          pokemon.name.includes(searchTerm.toLocaleLowerCase()) ||
          pokemon.id.toString().includes(searchTerm)
        );
      })
    );
  }, [searchTerm, collection]);
  return (
    <PokemonContext.Provider
      value={{
        collection,
        searchTerm,
        error,
        filteredPokemon,
        handleChange,
        loading,
        openModal,
        modal,
        isOpen,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export { PokemonProvider, PokemonContext };
