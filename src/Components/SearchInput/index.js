import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../GlobalContext";
import styles from "./SearchInput.module.scss";
import useFetch from "../Hooks/useFetch";
import { GET_POKEMON } from "../../services/api";

const SearchInput = () => {
  const [searchInput, setSearchInput] = useState("");
  const { setSearchPokemon, setFoundPokemon } = useContext(GlobalContext);
  const { request, error, loading } = useFetch();

  useEffect(() => {
    if (searchInput.length === 0) {
      setSearchPokemon(null);
      setFoundPokemon(false);
    }
  }, [searchInput, setFoundPokemon, setSearchPokemon]);

  async function handleSearch() {
    if (searchInput.length) {
      const { response, json } = await request(
        GET_POKEMON(searchInput.toLowerCase())
      );

      if (response.ok) {
        setSearchPokemon(json);
        setFoundPokemon(true);
      }
    }
  }

  return (
    <div className={`${styles.SearchInput} `}>
      <form
        className={styles.SearchInputWrapper}
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(searchInput);
        }}
      >
        <input
          className={styles.input}
          type="text"
          id="search"
          placeholder="Digite o nome do Pokemon ou ID"
          value={searchInput}
          onChange={({ target }) => setSearchInput(target.value)}
        />
        {loading ? (
          <button type="submit" className={styles.btn} disabled>
            Buscando...
          </button>
        ) : (
          <button type="submit" className={styles.btn}>
            Buscar
          </button>
        )}
      </form>

      {error && <p className={styles.error}>Pokemon não encontrado</p>}
    </div>
  );
};

export default SearchInput;
