import React from "react";
import styles from "./TrainingPokemon.module.scss";

const TrainingPokemon = ({ pokemonSpecie, pokemon }) => {
  const { base_happiness, capture_rate, growth_rate } = pokemonSpecie;
  const { base_experience, types } = pokemon;
  return (
    <div className={`${styles.training}`}>
      <h1>Training</h1>

      <div className={`${styles.trainingInfo} flipBottom `}>
        <h3 className={`${types[0]}`}>
          Base Exp: <span>{base_experience}</span>
        </h3>

        <h3 className={`${types[0]}`}>
          Base Happiness: <span>{base_happiness}</span>
        </h3>

        <h3 className={`${types[0]}`}>
          Capture Rate: <span>{capture_rate}%</span>
        </h3>

        <h3 className={`${types[0]}`}>
          Growth Rate: <span>{growth_rate.growth}</span>
        </h3>
      </div>
    </div>
  );
};

export default TrainingPokemon;
