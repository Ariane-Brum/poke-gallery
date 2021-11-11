import React from "react";
import TrainingPokemon from "../TrainingPokemon";
import styles from "./BioPokemon.module.scss";

const BioPokemon = ({ pokemon, pokemonSpecie }) => {
  const { flavor_text_entries } = pokemonSpecie;
  const { height, weight, abilities, types } = pokemon;

  return (
    <section className={`${styles.bio} animeRight`}>
      <h1>Biography</h1>
      <div className={`${styles.bioWrapper}  `}>
        <div className={styles.text}>
          {pokemonSpecie && <p>{flavor_text_entries[0]}</p>}
          <div className={`${styles.info} flipBottom`}>
            <h3 className={`${types[0]}`}>
              Height: <span>{height} </span>{" "}
            </h3>
            <h3 className={`${types[0]}`}>
              Weight: <span>{weight} </span>
            </h3>
            <div className={`${styles.abilities} ${types[0]}`}>
              <h4>Abilities:</h4>
              <div>
                <span>{abilities[0]}</span>
                <span>{abilities[1]}</span>
                <span>{abilities[2]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TrainingPokemon pokemon={pokemon} pokemonSpecie={pokemonSpecie} />
    </section>
  );
};

export default BioPokemon;
