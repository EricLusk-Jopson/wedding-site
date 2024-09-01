import styles from "./Home.module.css";
import happilyEverAfter from "../../assets/Images/happilyeverafter.jpg";
import { useState } from "react";

const Home = () => {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  const handleHeroImageLoad = () => {
    setHeroImageLoaded(true);
  };

  return (
    <main>
      <section className={styles.hero}>
        <img src={happilyEverAfter} onLoad={handleHeroImageLoad} />
        {heroImageLoaded && (
          <>
            <h1 className={styles.title}>We Got Married.</h1>
            <h2 className={styles.subtitle}>Come shake our hands about it.</h2>
          </>
        )}
      </section>
      {heroImageLoaded && (
        <>
          <section className={styles.titleBox}>
            <h1>We Got Married.</h1>
            <h2 className={styles.subtitle}>Come shake our hands about it.</h2>
          </section>
          <article className={styles.textContentContainer}>
            <section>
              <h2>We did the thing!</h2>
              <p>
                Well, we're pleased to announce that Louise Macdougall and Eric
                Lusk-Jopson are officially married. After almost two years of
                engagement we sealed the deal. It was a quiet, sunny day in
                Vancouver with a couple close friends as witnesses. Once photos
                are sent back to us, we will have them visible on the gallery
                page.
              </p>
            </section>
            <section>
              <h2>Time to Celebrate!</h2>
              <p>
                Our ceremony may have been just for us, but our reception sure
                won't be. We're excited to see you all for the first time as a
                newly married couple, and want you to join us on Saturday,
                September 28th for an evening of food and drink at Pax Romana on
                Commercial Drive. The venue is a cocktail and tapas bar, so the
                event will be noticeably absent of children and is not
                particularly well suited to accommodate those with mobility
                issues. For any family or friends that cannot be in attendance
                for any reason, we will be extending a separate invitation to a
                family gathering hosted in North Vancouver on the following
                Saturday. Please get in touch with us directly if you want to
                make an appearance on October 5th in upper lonsdale.
              </p>
            </section>
            <section>
              <h2>So What's Next?</h2>
              <p>
                It's been one hell of a year, and the chaos isn't coming to an
                end any time soon. This September, while you all receive and
                respond to your RSVPs, we will be packing up our belongings in
                preparation for our honeymoon. Yes, it's gonna be a long one.
                The details are still getting ironed out, but our current plan
                is to move abroad for upwards of a year, in pursuit of adventure
                and romance. For this reason, we are avoiding any physical gifts
                at either of our gatherings.
              </p>

              <p>
                Any gift, no matter how well intentioned, will be going directly
                into storage for the forseeable future. We don't want to do
                imprison your gestures of kindness, so if you absolutely must
                give us something, we will graciously accept donations to our
                honeymoon fund.
              </p>
            </section>
            <section>
              <h2>How Did Any of This Happen?</h2>
              <p>
                The shortest answer we can give to this question is fate.
                Somehow we managed years of friendship without ever noticing the
                signs, even though they were slapping us in the face.
              </p>
              <p>The longer story is this:</p>
              <p>
                We met online during the pandemic, and began what would become a
                long, lasting friendship. With every new flame, new job, new
                apartment, we were each there to watch the other go about their
                lives. As quarantine came to a close, we both found ourselves
                discussing in hushed voices our plans of proposing to our
                significant other. Within the year, both relationships had
                dissolved and our collective hearts broken. Eric's answer was to
                leave. First Mexico, then Halifax, then Kazakhstan. In the midst
                of this, he received an invitation from Louise to a concert in
                Gastown. Gastown is not very close to Mexico. Flights were
                booked within the hour. That should have been a sign.
              </p>
              <p>
                The concert was fun: two friends with heavy hearts drowning
                their sorrows and stomping their feet. When the night came to a
                close, the two friends discussed plans for the coming months.
                Eric would go to Central Asia until the fall while Louise was
                preparing to move into a place of her own, and was looking for
                roommates. Louise asked Eric if he would move in when he
                returned. Without hesitation, Eric accepted. That should have
                been a sign.
              </p>
              <p>
                Despite how much construction occurs in this city, none of it
                ever seems to complete on time. September turned into October,
                then November and December. Eric returned and found somewhere to
                live on the island, waiting for Louise to be ready. That should
                have been a sign.
              </p>
              <p>
                A week after returning to BC, Eric found himself caught up in
                the 2022 layoffs. A week later, so did Louise. Once again, for
                the umpteenth time, the pair found themselves on the phone,
                discussing their lives and their worries. Plans were made to
                meet up the following weekend, when Eric visited Vancouver.
              </p>
              <p>
                December 3rd, 2023. The pair caught up over drinks in Gastown
                and for the first time ever, saw the signs. It wasn't obvious at
                first. Eric made the same old comment about being a perfect
                match and the same old joke about getting maried. It was always
                a joke, always some half-baked glimpse of an ideal life with the
                ideal partner. That night, though, the kernel of truth at the
                center of the joke could be seen. Louise went quiet in her seat
                and held her breath. Eric asked if she was choking. That's when
                she said she loved him, and challenged him to follow through on
                his words. Eric's heart exploded.
              </p>
              <p>Two months later, a ring was purchased.</p>
            </section>
          </article>
        </>
      )}
    </main>
  );
};

export default Home;
