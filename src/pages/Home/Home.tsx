import styles from "./Home.module.css";
import happilyEverAfter from "../../assets/Images/happilyeverafter.jpg";

const Home = () => {
  return (
    <main>
      <section className={styles.hero}>
        <img src={happilyEverAfter} />
        <h1 className={styles.title}>We Got Married.</h1>
        <h2 className={styles.subtitle}>Come shake our hands about it.</h2>
      </section>
      <section>
        <h2 style={{ margin: "20vw" }}>Hello</h2>
      </section>
    </main>
  );
};

export default Home;
