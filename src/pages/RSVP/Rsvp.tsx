import styles from "./Rsvp.module.css";
import venue from "../../assets/Images/pax1.jpeg";
import coupe from "../../assets/Images/pax2.webp";
import RsvpForm from "../../components/RsvpForm/RsvpForm";
import { useParams } from "react-router-dom";
// import { useState } from "react";

const RSVP: React.FC = () => {
  const { token } = useParams();

  const scrollToSection = () => {
    const section = document.getElementById("rsvp-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getMessageFromToken = () => {
    switch (token) {
      case "thank-you":
        return (
          <div className={styles.message}>
            <h2 className={styles.title}>Thank you for confirming!</h2>
            <h3 className={styles.subtitle}>We're excited to see you.</h3>
          </div>
        );
      case "sorry":
        return (
          <div className={styles.message}>
            <h2 className={styles.title}>We sure will miss you!</h2>
            <h3 className={styles.subtitle}>
              There will be another celebration held on October<sup>5th</sup>{" "}
              for extended family and those unable to attend this gathering.
              Please get in touch with us directly if you're insterested in
              attending. Reception will be hosted by family in North Vancouver.
            </h3>
          </div>
        );
      default:
        return (
          <h2 className={styles.title}>
            Please RSVP before September 14<sup>th</sup>
          </h2>
        );
    }
  };

  return (
    <main className={styles.rsvpMain}>
      <section className={styles.heroContainer}>
        <div className={styles.imageContainer}>
          <img src={venue} alt="Description" />
          <button className={styles.centeredLink} onClick={scrollToSection}>
            <h1 className={styles.contentTitle}>RSVP</h1>
          </button>
        </div>
        <div className={styles.contentContainer}>
          <section className={styles.titleContainer}>
            <h2>Celebrate With Us</h2>
            <h3>
              We invite you to celebrate our elopement at an intimate venue on
              Commercial Drive.
            </h3>
            <h3>
              Join us on{" "}
              <strong>
                Saturday, September 28<sup>th</sup>
              </strong>{" "}
              for a night of food and drink amidst good friends and family.
            </h3>
          </section>
        </div>
      </section>
      <section>
        <section className={styles.detailsContainer}>
          <section className={styles.details}>
            <h2>Venue</h2>
            <h4>Pax Romana</h4>
            <p>1670 Commercial Dr</p>
            <p>East Vancouver</p>
          </section>
          <section className={styles.details}>
            <h2>Event</h2>
            <h4>Saturday, September 28th</h4>
            <p>5:00pm - 11:00pm</p>
            <p>Cocktail Attire</p>
          </section>
        </section>
      </section>
      <section id="rsvp-section" className={styles.villainContainer}>
        <img src={coupe}></img>
        <h2>{getMessageFromToken()}</h2>
        {token !== "thank-you" && token !== "sorry" && <RsvpForm />}
      </section>
    </main>
  );
};

export default RSVP;
