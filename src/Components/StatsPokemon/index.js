import styles from "./StatsPokemon.module.scss";

import { GiHearts } from "react-icons/gi";
import { GiShardSword } from "react-icons/gi";
import { GiArrowsShield } from "react-icons/gi";
import { GiBrokenShield } from "react-icons/gi";
import { GiConverseShoe } from "react-icons/gi";
import { RiSwordLine } from "react-icons/ri";
import { StatsBar } from "./StatsBar";

const StatsPokemon = ({ pokemon }) => {
  const { stats, image2, image3, name, types } = pokemon;

  return (
    <section className={`${styles.stats} animeRight `}>
      <h1>Base Stats</h1>
      <div className={styles.statsWrapper}>
        <div className={styles.statsItem}>
          <h3>Hp</h3>
          <StatsBar done={`${stats.hp}`} pokemon={pokemon} />
          <GiHearts color="red" size={30} />
        </div>
        <div className={styles.statsItem}>
          <h3>Attack</h3>
          <StatsBar done={`${stats.attack}`} pokemon={pokemon} />
          <GiShardSword color="orange" size={30} />
        </div>
        <div className={styles.statsItem}>
          <h3>Defense</h3>
          <StatsBar done={`${stats.defense}`} pokemon={pokemon} />
          <GiBrokenShield color="blue" size={30} />
        </div>
        <div className={styles.statsItem}>
          <h3>Sp. Atk</h3>
          <StatsBar done={`${stats.specialAttack}`} pokemon={pokemon} />
          <RiSwordLine color="#ba2f27" size={25} />
        </div>
        <div className={styles.statsItem}>
          <h3>Sp. Def</h3>
          <StatsBar done={`${stats.specialDefense}`} pokemon={pokemon} />
          <GiArrowsShield color="green" size={30} />
        </div>
        <div className={styles.statsItem}>
          <h3>Speed</h3>
          <StatsBar done={`${stats.speed}`} pokemon={pokemon} />
          <GiConverseShoe color="brown" size={30} />
        </div>
      </div>

      <div className={`${styles.spritesWrapper} ${types[0]} flipBottom`}>
        <div className={`${styles.spritesImg}`}>
          <img src={image2} alt={name} />
        </div>
        <div className={styles.spritesImg}>
          <img src={image3} alt={name} />
        </div>
      </div>
    </section>
  );
};

export default StatsPokemon;
