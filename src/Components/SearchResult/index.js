import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { getPokemonImageById } from "../../Functions/utils";
import { GlobalContext } from "../../GlobalContext";
import styles from "./SearchResult.module.scss";

const SearchResult = () => {
  const { searchPokemon: pokemon } = useContext(GlobalContext);

  return (
    <div className={`${styles.pokeList} bounceLeft`}>
      {pokemon && (
        <>
          <div className={`${styles.pokeItem} `}>
            <Link to={`pokemon/${pokemon.id}`}>
              {pokemon && (
                <figure>
                  <img
                    src={getPokemonImageById(pokemon.id)}
                    title={pokemon.name}
                    alt={`Imagem do pokémon ${pokemon.name}`}
                  />
                </figure>
              )}
              <div>
                <p>{pokemon.name}</p>
              </div>
            </Link>
          </div>
          <h2>
            Resultado encontrado para: <span>{pokemon.name}</span>
          </h2>
        </>
      )}
    </div>
  );
};

export default SearchResult;
