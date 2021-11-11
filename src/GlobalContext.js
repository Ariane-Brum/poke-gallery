import React, { useCallback, useEffect, useState } from "react";
import { api } from "./services/api";

export const GlobalContext = React.createContext();

export function GlobalProvider({ children }) {
  const [searchPokemon, setSearchPokemon] = useState(null);
  const [foundPokemon, setFoundPokemon] = useState(false);

  const POKEMONS_NUMBERS = 8;
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pokemonOffsetApi, setPokemonOffsetApi] = useState(POKEMONS_NUMBERS);

  const handlePokemonList = useCallback(async (offset) => {
    setLoading(true);
    const res = await api.get(`/pokemon`, {
      params: {
        limit: POKEMONS_NUMBERS,
        offset,
      },
    });

    const results = res.data.results;
    setPokemonList(results);
    setLoading(false);
  }, []);

  useEffect(() => {
    handlePokemonList();
  }, [handlePokemonList]);

  const fetchMorePokemons = useCallback(
    async (offset) => {
      setLoading(true);
      const res = await api.get(`/pokemon/`, {
        params: {
          limit: POKEMONS_NUMBERS,
          offset,
        },
      });
      const results = res.data.results;
      setPokemonList((poke) => [...poke, ...results]);
      setPokemonOffsetApi((offset) => offset + POKEMONS_NUMBERS);
      setLoading(false);
    },

    [POKEMONS_NUMBERS]
  );

  return (
    <GlobalContext.Provider
      value={{
        searchPokemon,
        setSearchPokemon,
        foundPokemon,
        setFoundPokemon,
        pokemonList,
        pokemonOffsetApi,
        loading,
        setLoading,
        handlePokemonList,
        fetchMorePokemons,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
