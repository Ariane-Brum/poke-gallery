import React from "react";
import Load from "../../Assets/pikachu.svg";
import styles from "./LoadingPokemon.module.scss";

export const LoadingPokemon = () => {
  return (
    <figure className={styles.wrapper}>
      <img className={`${styles.loading} rotate`} src={Load} alt="Loading" />
    </figure>
  );
};
