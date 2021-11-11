import styles from "./Loading.module.scss";
import Load from "../../Assets/3.svg";

export const Loading = () => {
  return (
    <figure className={styles.wrapper}>
      <img className={`${styles.loading} rotate`} src={Load} alt="Loading" />
    </figure>
  );
};
