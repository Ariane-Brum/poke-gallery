import axios from "axios";

const api = axios.create({
  baseURL: `https://pokeapi.co/api/v2`,
});

const BASE_URL = "https://pokeapi.co/api/v2";

const GET_POKEMON = (pokemon) => `${BASE_URL}/pokemon-species/${pokemon}`;

const POKEMON_ENDPOINT = (pokemon) => `${BASE_URL}/pokemon/${pokemon}`;

const GET_POKEMON_SPECIES_BY_ID = (id) => `${BASE_URL}/pokemon-species/${id}`;

const GET_EVOLUTION_CHAINS_BY_SPECIE_DATA = (data) =>
  `${data.evolution_chain.url}`;

export {
  api,
  BASE_URL,
  GET_POKEMON,
  GET_POKEMON_SPECIES_BY_ID,
  GET_EVOLUTION_CHAINS_BY_SPECIE_DATA,
  POKEMON_ENDPOINT,
};
