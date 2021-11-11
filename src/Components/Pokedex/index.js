import React, { useContext } from "react";
import { PokeCard } from "../PokeCard/PokeCard";
import styles from "./Pokedex.module.scss";
import SearchInput from "../SearchInput/";
import { Loading } from "../Helper/Loading";
import { GlobalContext } from "../../GlobalContext";
import SearchResult from "../SearchResult";

const Pokedex = () => {
  const {
    pokemonList,
    pokemonOffsetApi,
    loading,
    error,
    fetchMorePokemons,
    foundPokemon,
  } = useContext(GlobalContext);

  if (error) return <p>{error}</p>;
  return (
    <section className="container animeLeft">
      <SearchInput />
      {foundPokemon ? <SearchResult /> : ""}

      <div
        className={`${foundPokemon ? styles.pokeCardFound : styles.pokeList} `}
      >
        {pokemonList.map((pokemon, index) => (
          <PokeCard name={pokemon.name} key={index} />
        ))}
      </div>

      {loading && <Loading />}

      <button
        className={`${styles.button} `}
        type="button"
        onClick={() => fetchMorePokemons(pokemonOffsetApi)}
      >
        Carregar mais Pokemon.
      </button>
    </section>
  );
};

export default Pokedex;
