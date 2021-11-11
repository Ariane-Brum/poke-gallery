import { useEffect, useState } from "react";
import styles from "./PokemonEvolution.module.scss";
import { getAllEvolutions, getPokemonImageById } from "../../Functions/utils";

import useFetch from "../Hooks/useFetch";
import {
  GET_EVOLUTION_CHAINS_BY_SPECIE_DATA,
  GET_POKEMON,
  GET_POKEMON_SPECIES_BY_ID,
} from "../../services/api";

const PokemonEvolution = ({ pokemon }) => {
  const { id } = pokemon;
  const [evolutions, setEvolutions] = useState([]);
  const [evolutionId, setEvolutionId] = useState([]);
  const { types } = pokemon;

  const { request: specieRequest } = useFetch();
  const { request: evolutionRequest, loading, error } = useFetch();

  useEffect(() => {
    async function getEvolution() {
      const { json: specieData } = await specieRequest(
        GET_POKEMON_SPECIES_BY_ID(id)
      );

      const { json: evoData } = await evolutionRequest(
        GET_EVOLUTION_CHAINS_BY_SPECIE_DATA(specieData)
      );

      const chainsData = getAllEvolutions(evoData.chain);

      setEvolutions(chainsData);
    }
    getEvolution();
  }, [specieRequest, evolutionRequest, id]);

  useEffect(() => {
    async function getIDsFromAllEvolutions() {
      if (evolutions.length) {
        const getIDs = evolutions.map(async (evolution) => {
          const response = await fetch(GET_POKEMON(evolution.species_name));
          const json = await response.json();

          return json.id;
        });

        const listIDs = await Promise.all(getIDs);

        setEvolutionId(listIDs);
      }
    }
    getIDsFromAllEvolutions();
  }, [evolutions]);

  if (error) return <p>{error} </p>;
  if (loading) return <p></p>;
  if (evolutions.length <= 1)
    return (
      <p className="alert animeRight">Este pokemon não possui evoluções.</p>
    );
  if (evolutions.length <= 3)
    return (
      <section className={`${styles.evolution} animeRight`}>
        <h1>Evolution</h1>
        <ul className={styles.evolutionList}>
          {evolutions.map((poke, index) => (
            <div
              key={poke.species_name}
              className={`${styles.evolutionWrapper}`}
            >
              <li
                className={`${styles.evolutionItem} rotateVertCenter ${types[0]} `}
              >
                <img
                  src={`${
                    evolutionId.length &&
                    getPokemonImageById(evolutionId[index])
                  }`}
                  alt={poke.species_name}
                />
              </li>
              <div className={styles.evolutionInfo}>
                <h3>{poke.species_name}</h3>
                {poke.min_level && (
                  <span className={`${styles.level} `}>
                    Lv. {poke.min_level}
                  </span>
                )}
              </div>
            </div>
          ))}
        </ul>
      </section>
    );
  if (evolutions.length > 3)
    return (
      <section className={`${styles.multipleEvolutions} animeRight`}>
        <div className={styles.evolutions} itens={evolutions}>
          <div className={styles.mainPokemon}>
            {evolutions
              .filter((_, index) => index === 0)
              .map((poke, index) => (
                <div
                  className={`${styles.evolutionsWrapper}`}
                  key={poke.species_name}
                >
                  <div
                    className={`${styles.evolutionsImg} ${types[0]} rotateVertCenter`}
                  >
                    <img
                      src={`${
                        evolutionId.length &&
                        getPokemonImageById(evolutionId[index])
                      }`}
                      alt={poke.species_name}
                    />
                  </div>
                  <h5>{poke.species_name}</h5>
                </div>
              ))}
          </div>
          {evolutions
            .filter((_, index) => index !== 0)
            .map((poke, index) => (
              <div key={poke.species_name} className={`${styles.item}`}>
                <div
                  className={`${styles.evolImg} ${types[0]} rotateVertCenter`}
                >
                  <img
                    src={`${
                      evolutionId.length &&
                      getPokemonImageById(evolutionId[index + 1])
                    }`}
                    alt={poke.species_name}
                  />
                </div>
                <h5>{poke.species_name}</h5>
              </div>
            ))}
        </div>
      </section>
    );
  else return null;
};

export default PokemonEvolution;
