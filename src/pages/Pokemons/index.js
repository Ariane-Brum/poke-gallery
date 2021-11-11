import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { api } from "../../services/api";
import styles from "./Pokemons.module.scss";
import { LoadingPokemon } from "../../Components/Helper/LoadingPokemon";

import { Tabs } from "../../Components/Tabs/Tabs";
import TabContent from "../../Components/Tabs/TabContent";
import PokemonProfile from "../../Components/PokemonProfile";
import { Nav } from "../../Components/Nav";

const Pokemons = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [pokemonSpecie, setPokemonSpecie] = useState({});
  const [loading, setLoading] = useState(true);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    async function pokemonFetch() {
      try {
        await Promise.all([
          api.get(`/pokemon/${name}`).then((res) => {
            const {
              id,
              weight,
              height,
              stats,
              sprites,
              species,
              types,
              name,
              abilities,
              base_experience,
            } = res.data;

            setPokemon({
              abilities: abilities.map(
                (abilityInfo) => abilityInfo.ability.name
              ),
              base_experience,
              id,
              name,
              number: `#${"000".substr(id.toString().length)}${id}`,
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
              weight: `${weight / 10}kg`,
              specie: species.name,
              height: `${height / 10}m`,
              types: types.map((typeInfo) => typeInfo.type.name),
              stats: {
                hp: stats[0].base_stat,
                attack: stats[1].base_stat,
                defense: stats[2].base_stat,
                specialAttack: stats[3].base_stat,
                specialDefense: stats[4].base_stat,
                speed: stats[5].base_stat,
              },
            });
          }),
          api.get(`/pokemon-species/${name}`).then((res) => {
            const {
              base_happiness,
              flavor_text_entries,
              capture_rate,
              growth_rate,
              varieties,
            } = res.data;

            setPokemonSpecie({
              growth_rate: {
                growth: growth_rate.name,
              },
              base_happiness,
              capture_rate,
              flavor_text_entries: flavor_text_entries.map(
                (flavorInfo) => flavorInfo.flavor_text
              ),
              varieties: varieties.map((varieInfo) => varieInfo.pokemon.name),
            });
          }),
        ]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    pokemonFetch();
  }, [name]);

  if (loading) return <LoadingPokemon />;
  return (
    <section className={`${styles.pokemon} `}>
      <div className={`${styles.pokemonWrapper} scaleInCenter`}>
        <PokemonProfile pokemon={pokemon} pokemonSpecie={pokemonSpecie} />
        <div className={styles.tabsWrapper}>
          <Tabs
            pokemon={pokemon}
            toggleTab={toggleTab}
            toggleState={toggleState}
          />
          <TabContent
            pokemon={pokemon}
            pokemonSpecie={pokemonSpecie}
            toggleState={toggleState}
          ></TabContent>
        </div>
      </div>
      <Nav />
    </section>
  );
};

export default Pokemons;
