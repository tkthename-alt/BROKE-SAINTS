import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
import { toOptimizedImage } from '../helpers/general';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.png'}
          title={`BROKE SAINTS \n Made From Nothing`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            The Gospel
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Our Code
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            The Mission
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              BROKE SAINTS is not just a brand — it's a testimony. Built for the ones
              who had vision before resources, who turned nothing into something through
              pure determination and faith.
            </p>
            <br />
            <br />
            <p>
              We blend street discipline with luxury standards. Every stitch carries the
              weight of our story — the late nights, the setbacks, the moments when giving
              up seemed easier. But saints don't quit. We kept building when nobody was watching.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'BROKE SAINTS apparel'} src={toOptimizedImage('/about1.png')}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Our Code</h3>
            <div ref={valuesRef}>
              <p>
                Every piece we create represents growth through struggle. We don't chase trends —
                we set standards. Our heavyweight fabrics, oversized fits, and intentional designs
                speak to those who understand that luxury is earned, not given.
              </p>
              <ol>
                <li>From Nothing — We honor beginnings. Scarcity breeds greatness.</li>
                <li>Limited — No mass production. Every drop is intentional.</li>
                <li>Discipline — Luxury is earned through consistency.</li>
                <li>Faith & Fire — Belief fuels rebellion.</li>
              </ol>
              <img alt={'BROKE SAINTS collection'} src={toOptimizedImage('/about2.png')}></img>
            </div>
            <h3>The Mission</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
                BROKE SAINTS exists to prove that where you start doesn't determine where
                you finish. We create for the dreamers, the grinders, the ones who see
                their reflection in our brand's journey.
              </p>
              <p>
                Our mission goes beyond clothing. We're building a community of people who
                refuse to be defined by their circumstances. Each limited drop is a
                statement — quality over quantity, intention over impulse.
              </p>
              <p>
                When you wear BROKE SAINTS, you're not just wearing a brand. You're
                carrying a testimony. You're part of a movement that believes in
                transformation through persistence.
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'BROKE SAINTS lifestyle'} src={toOptimizedImage('/about3.png')}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
