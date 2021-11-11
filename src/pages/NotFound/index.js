import React from "react";
import styles from "./NotFound.module.scss";
import Pikachu from "../../Assets/pikachu.jpeg";
import { Nav } from "../../Components/Nav";
export const NotFound = () => {
  return (
    <>
      <div className={`${styles.notFound} container`}>
        <img src={Pikachu} alt="" />
        <div className={`${styles.notFoundText} `}>
          <h1>Error: 404</h1>
          <p>Página não encontrada.</p>
        </div>
      </div>
      <Nav />
    </>
  );
};
