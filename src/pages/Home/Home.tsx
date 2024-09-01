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
      <section className={styles.titleBox}>
        <h1>We Got Married.</h1>
        <h2 className={styles.subtitle}>Come shake our hands about it.</h2>
      </section>
      <article className={styles.textContentContainer}>
        <section>
          <h2>Yep! We did the thing.</h2>
          <p>
            It's been real hard keeping it a secret all this time. A few of you
            have found out through loose lips, but hopefully it's still a
            surprise for most of you! After newrly two years together, we're
            finally ready to share our big secret with everyone!
          </p>
        </section>
        <section>
          <h2>Time to Celebrate</h2>
          <p>
            It's been real hard keeping it a secret all this time. A few of you
            have found out through loose lips, but hopefully it's still a
            surprise for most of you!
          </p>
        </section>
        <section>
          <h2>Our Vows</h2>
          <h3>Louise:</h3>
          <p>Vows vows vows</p>
          <h3>Eric:</h3>
          <p>Vows vows vows</p>
        </section>
        <section>
          <h2>Who Are You Again?</h2>
          <p>
            It's been real hard keeping it a secret all this time. A few of you
            have found out through loose lips, but hopefully it's still a
            surprise for most of you!
          </p>
        </section>
      </article>
    </main>
  );
};

export default Home;
