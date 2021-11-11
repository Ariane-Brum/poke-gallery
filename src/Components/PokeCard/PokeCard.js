import React, { useState, useEffect, useRef } from "react";
import styles from "./PokeCard.module.scss";

import { api } from "../../services/api";
import { Link } from "react-router-dom";

export const PokeCard = ({ name, index }) => {
  const [pokemon, setPokemon] = useState({});
  const [pokemonSpecie, setPokemonSpecie] = useState({});
  const [loading, setLoading] = useState(false);
  const componentMounted = useRef(true); // (3) component is mounted

  useEffect(() => {
    setLoading(true);
    api.get(`/pokemon-species/${name}`).then((res) => {
      const { id } = res.data;
      if (componentMounted.current) {
        // is component still mounted?
        setPokemonSpecie({
          // (1) write data to state
          id,

          // image: sprites.other["official-artwork"].front_default,
        });

        // When request is finished: set it to false
        setLoading(false);
      }
    });
    return () => {
      // This code runs when component is unmounted
      componentMounted.current = false; // (4) set it to false when we leave the page
    };
  }, [name]);

  useEffect(() => {
    setLoading(true);
    api.get(`/pokemon/${name}`).then((res) => {
      const { sprites, id, species } = res.data;

      if (componentMounted.current) {
        setPokemon({
          specie: species.name,

          id,
          image:
            sprites.other["official-artwork"].front_default ||
            sprites.front_default,
          image2:
            sprites.versions["generation-v"]["black-white"].animated
              .front_default || sprites.front_default,
          image3:
            sprites.versions["generation-v"]["black-white"].animated
              .back_default ||
            sprites.back_default ||
            sprites.front_default,
        });
        setLoading(false);
      }
    });
    return () => {
      // This code runs when component is unmounted
      componentMounted.current = false; // (4) set it to false when we leave the page
    };
  }, [name]);

  if (loading) return <p></p>;

  return (
    <div className={`${styles.pokeCard}`}>
      <Link to={`pokemon/${pokemonSpecie.id}`}>
        {pokemonSpecie && (
          <figure>
            <img
              src={pokemon.image}
              title={pokemon.specie}
              alt={`Imagem do pokémon ${pokemon.specie}`}
            />
          </figure>
        )}
        <div>
          <p>{pokemon.specie}</p>
        </div>
      </Link>
    </div>
  );
};
