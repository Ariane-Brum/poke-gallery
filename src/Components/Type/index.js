import React from "react";
import styles from "./Type.module.scss";
import { ReactComponent as Grass } from "../../Assets/types/grass.svg";
import { ReactComponent as Bug } from "../../Assets/types/bug.svg";
import { ReactComponent as Fire } from "../../Assets/types/fire.svg";
import { ReactComponent as Ice } from "../../Assets/types/ice.svg";
import { ReactComponent as Dark } from "../../Assets/types/dark.svg";
import { ReactComponent as Dragon } from "../../Assets/types/dragon.svg";
import { ReactComponent as Electric } from "../../Assets/types/electric.svg";
import { ReactComponent as Fairy } from "../../Assets/types/fairy.svg";
import { ReactComponent as Fighting } from "../../Assets/types/fighting.svg";
import { ReactComponent as Flying } from "../../Assets/types/flying.svg";
import { ReactComponent as Ghost } from "../../Assets/types/ghost.svg";
import { ReactComponent as Ground } from "../../Assets/types/ground.svg";
import { ReactComponent as Normal } from "../../Assets/types/normal.svg";
import { ReactComponent as Poison } from "../../Assets/types/poison.svg";
import { ReactComponent as Psychic } from "../../Assets/types/psychic.svg";
import { ReactComponent as Water } from "../../Assets/types/water.svg";
import { ReactComponent as Steel } from "../../Assets/types/steel.svg";
import { ReactComponent as Rock } from "../../Assets/types/rock.svg";

const Type = ({ types }) => {
  return (
    <div className={styles.types}>
      <div className={`${styles.typesItem} swirlIn`}>
        {types.map((type) => {
          switch (type) {
            case "grass":
              return (
                <div key={type}>
                  <span>
                    <Grass />
                    <p>{type}</p>
                  </span>
                </div>
              );
            case "bug":
              return (
                <div key={type}>
                  <span>
                    <Bug />
                    <p>{type}</p>
                  </span>
                </div>
              );
            case "fire":
              return (
                <div key={type}>
                  <span>
                    <Fire />
                    <p>{type}</p>
                  </span>
                </div>
              );
            case "ice":
              return (
                <div key={type}>
                  <span>
                    <Ice />
                    <p>{type}</p>
                  </span>
                </div>
              );
            case "dark":
              return (
                <div key={type}>
                  <span>
                    <Dark />
                    <p>{type}</p>
                  </span>
                </div>
              );
            case "dragon":
              return (
                <div key={type}>
                  <span>
                    <Dragon />
                    <p>{type}</p>
                  </span>
                </div>
              );
            case "electric":
              return (
                <div key={type}>
                  <span>
                    <Electric />
                    <p>{type}</p>
                  </span>
                </div>
              );
            case "fairy":
              return (
                <div key={type}>
                  <span>
                    <Fairy />
                    <p>{type}</p>
                  </span>
                </div>
              );
            case "fighting":
              return (
                <div key={type}>
                  <span>
                    <Fighting />
                    <p>{type}</p>
                  </span>
                </div>
              );
            case "flying":
              return (
                <div key={type}>
                  <span>
                    <Flying />
                    <p>{type}</p>
                  </span>
                </div>
              );
            case "ghost":
              return (
                <div key={type}>
                  <span>
                    <Ghost />
                    <p>{type}</p>
                  </span>
                </div>
              );
            case "ground":
              return (
                <div key={type}>
                  <span>
                    <Ground />
                    <p>{type}</p>
                  </span>
                </div>
              );
            case "normal":
              return (
                <div key={type}>
                  <span>
                    <Normal />
                    <p>{type}</p>
                  </span>
                </div>
              );
            case "poison":
              return (
                <div key={type}>
                  <span>
                    <Poison />
                    <p>{type}</p>
                  </span>
                </div>
              );
            case "psychic":
              return (
                <div key={type}>
                  <span>
                    <Psychic />
                    <p>{type}</p>
                  </span>
                </div>
              );
            case "water":
              return (
                <div key={type}>
                  <span>
                    <Water />
                    <p>{type}</p>
                  </span>
                </div>
              );
            case "steel":
              return (
                <div key={type}>
                  <span>
                    <Steel />
                    <p>{type}</p>
                  </span>
                </div>
              );
            case "rock":
              return (
                <div key={type}>
                  <span>
                    <Rock />
                    <p>{type}</p>
                  </span>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default Type;
