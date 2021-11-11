import React, { useState, useEffect } from "react";
import useMedia from "../Hooks/useMedia";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { MdCatchingPokemon } from "react-icons/md";

import styles from "./Nav.module.scss";

export const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobile = useMedia("(max-width: 53.75rem)");
  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        } ${mobile ? "" : "bounceLeft"}`}
      >
        <Link to="/">
          <MdCatchingPokemon color={`${mobile && "#b6000d"}`} size={50} />
          Voltar para a Galeria
        </Link>
      </nav>

      {mobile && (
        <button
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
    </>
  );
};
