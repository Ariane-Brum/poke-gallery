import styles from "./Tabs.module.scss";

export const Tabs = ({ toggleState, toggleTab, pokemon }) => {
  const { types } = pokemon;

  return (
    <>
      <div className={`${styles.tabs} ${types[0]}`}>
        <button
          onClick={() => toggleTab(1)}
          className={
            toggleState === 1
              ? `${styles.tab} ${styles.activeTabs}`
              : `${styles.tab} `
          }
        >
          Stats
        </button>
        <button
          onClick={() => toggleTab(2)}
          className={
            toggleState === 2
              ? `${styles.tab} ${styles.activeTabs}`
              : `${styles.tab}`
          }
        >
          Biography
        </button>
        <button
          onClick={() => toggleTab(3)}
          className={
            toggleState === 3
              ? `${styles.tab} ${styles.activeTabs}`
              : `${styles.tab}`
          }
        >
          Evolution
        </button>
      </div>
    </>
  );
};
