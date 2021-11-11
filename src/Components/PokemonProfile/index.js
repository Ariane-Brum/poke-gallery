import React from "react";
import styles from "./PokemonProfile.module.scss";
import Type from "../Type";

const PokemonProfile = ({ pokemon }) => {
  const { image, types, id } = pokemon;
  const { specie } = pokemon;

  return (
    <>
      {pokemon && (
        <div className={`${styles.profileWrapper}  ${types[0]}`}>
          <p className={styles.id}>#{id}</p>
          <figure>
            <img src={image} alt={specie} title={specie} />

            <figcaption>
              <h1>{specie}</h1>
            </figcaption>
          </figure>
          <Type types={types} />
        </div>
      )}
    </>
  );
};

export default PokemonProfile;
