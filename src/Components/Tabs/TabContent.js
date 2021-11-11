import React from "react";
import BioPokemon from "../BioPokemon";
import PokemonEvolution from "../PokemonEvolution";
import StatsPokemon from "../StatsPokemon";
import styles from "./TabContent.module.scss";

const TabContent = ({ toggleState, pokemon, pokemonSpecie }) => {
  return (
    <>
      <div className={styles.contentTabs}>
        <div
          className={
            toggleState === 1
              ? `${styles.content} ${styles.activeContent}`
              : `${styles.content}`
          }
        >
          <StatsPokemon pokemon={pokemon} pokemonSpecie={pokemonSpecie} />
        </div>
      </div>
      <div className={styles.contentTabs}>
        <div
          className={
            toggleState === 2
              ? `${styles.content} ${styles.activeContent}`
              : `${styles.content}`
          }
        >
          <BioPokemon pokemon={pokemon} pokemonSpecie={pokemonSpecie} />
        </div>
      </div>
      <div className={styles.contentTabs}>
        <div
          className={
            toggleState === 3
              ? `${styles.content} ${styles.activeContent}`
              : `${styles.content}`
          }
        >
          <PokemonEvolution pokemon={pokemon} />
        </div>
      </div>
    </>
  );
};

export default TabContent;
