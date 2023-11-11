import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.image}>
          <img
            src="image-equilibrium.jpg"
            alt="Image"
            className={styles["card-img"]}
          />
          <img src="icon-view.svg" alt="view icon" className={styles.view} />
        </div>
        <div className={styles.text}>
          <h2>Equilibrium #3429</h2>
          <p>Our Equilibrium collection promotes balance and calm.</p>
          <ul className={styles.static}>
            <li className={styles.etherium}>
              <img src="icon-ethereum.svg" alt="etherium icon" width="14px" />
              <p>0.041 ETH</p>
            </li>
            <li className={styles.time}>
              <img src="icon-clock.svg" alt="clock icon" width="14px" />
              <p>3 days left</p>
            </li>
          </ul>
        </div>
        <footer className={styles.footer}>
          <img src="image-avatar.png" alt="profil image" />
          <p>
            Creation of <span>Jules Wyvern</span>
          </p>
        </footer>
      </div>
    </div>
  );
}
