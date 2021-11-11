import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Link to="/">
          <h1>PokeGallery</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
