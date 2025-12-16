import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';
import { toOptimizedImage } from '../helpers/general';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'680px'}
        image={'/banner1.png'}
        title={'MADE FROM NOTHING'}
        subtitle={'Luxury streetwear born from struggle, faith, and ambition. BROKE SAINTS is for those who started with nothing and refused to stay there.'}
        ctaText={'shop the drop'}
        ctaAction={goToShop}
      />

      {/* Message Container */}
      <div className={styles.messageContainer}>
        <p>
          Limited drops. No mass production.{' '}
          <span className={styles.gold}>Every piece intentional.</span>
        </p>
      </div>

      {/* Collection Container */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'THE SAINTS DROP'} />
          <ProductCollectionGrid />
        </Container>
      </div>

      {/* New Arrivals */}
      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'New Arrivals'} link={'/shop'} textLink={'view all'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
          />
        </Container>
      </div>

      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight.png'}
            altImage={'highlight image'}
            miniImage={'/highlightmin.png'}
            miniImageAlt={'mini highlight image'}
            title={'Saints Heavyweight Hoodie'}
            description={`Premium heavyweight cotton. Oversized fit. Made for those who earned their place. Limited quantities available.`}
            textLink={'shop now'}
            link={'/shop'}
          />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.promotionContainer}>
        <Hero image={toOptimizedImage('/banner2.png')} title={`THE DROP \n IS LIVE`} />
        <div className={styles.linkContainers}>
          <Link to={'/shop'}>HOODIES</Link>
          <Link to={'/shop'}>TEES</Link>
        </div>
      </div>

      {/* Quote - Our Code */}
      <Quote
        bgColor={'#111111'}
        title={'THE GOSPEL'}
        quote={
          '"BROKE SAINTS is not just a brand — it\'s a testimony. Built for the ones who had vision before resources. We blend street discipline with luxury standards, faith with rebellion, hunger with purpose."'
        }
      />

      {/* Values Grid */}
      <div className={styles.valuesContainer}>
        <Container size={'large'}>
          <Title name={'OUR CODE'} />
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h4>FROM NOTHING</h4>
              <p>We honor beginnings. Scarcity breeds greatness.</p>
            </div>
            <div className={styles.valueCard}>
              <h4>LIMITED</h4>
              <p>No mass production. Every drop is intentional.</p>
            </div>
            <div className={styles.valueCard}>
              <h4>DISCIPLINE</h4>
              <p>Luxury is earned through consistency.</p>
            </div>
            <div className={styles.valueCard}>
              <h4>FAITH & FIRE</h4>
              <p>Belief fuels rebellion.</p>
            </div>
          </div>
        </Container>
      </div>

      {/* Blog Grid */}
      <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Lookbook'} subtitle={'Saints in the wild'} />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div>

      {/* Social Media */}
      <div className={styles.socialContainer}>
        <Title
          name={'Styled by You'}
          subtitle={'Tag @brokesaints to be featured.'}
        />
        <div className={styles.socialContentGrid}>
          <img src={toOptimizedImage(`/social/socialMedia1.png`)} alt={'social media 1'} />
          <img src={toOptimizedImage(`/social/socialMedia2.png`)} alt={'social media 2'} />
          <img src={toOptimizedImage(`/social/socialMedia3.png`)} alt={'social media 3'} />
          <img src={toOptimizedImage(`/social/socialMedia4.png`)} alt={'social media 4'} />
        </div>
      </div>
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
