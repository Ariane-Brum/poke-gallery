import React from "react";
import styles from "./Footer.module.scss";
import { GiHearts } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Desenvolvido por Ariane Brum </p>
      <div>{<GiHearts color="#fff" />}</div>
      <div className={styles.icons}>
        <a
          href="https://github.com/Ariane-Brum"
          target="_blank"
          rel="noreferrer"
        >
          {<FaGithub color="#fff" size={20} />}
        </a>
      </div>
    </footer>
  );
};
