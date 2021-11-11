const getPokemonImageById = (id) =>
  `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${("00" + id).slice(
    -3
  )}.png`;

const getNecessaryDataFromEvoChains = ({ species, evolution_details, id }) => ({
  species_name: species.name,
  id: id,
  min_level: !evolution_details.length ? 1 : evolution_details[0].min_level,
  trigger_name: !evolution_details.length
    ? null
    : evolution_details[0].trigger.name,
  item: !evolution_details.length ? null : evolution_details.item,
});

function getAllEvolutions(data) {
  let storageArray = [];

  storageArray.push(getNecessaryDataFromEvoChains(data));

  let nextEvolution = data.evolves_to;

  nextEvolution.map((evolution) => {
    return (storageArray = storageArray.concat(getAllEvolutions(evolution)));
  });

  return storageArray;
}

export { getPokemonImageById, getAllEvolutions };
