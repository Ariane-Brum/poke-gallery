import React, { useEffect, useState } from "react";
import styles from "./StatsBar.module.scss";

export const StatsBar = ({ done, pokemon }) => {
  const [style, setStyle] = useState({});
  const { types } = pokemon;

  useEffect(() => {
    let timeOut = setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${(done * 100) / 255}%`,
      };
      setStyle(newStyle);
    }, 200);
    return () => {
      clearTimeout(timeOut);
    };
  }, [done]);

  return (
    <div className={`${styles.statsBar}`}>
      <div className={`${styles.statsDone} ${types[0]} `} style={style}>
        {done}
      </div>
    </div>
  );
};
