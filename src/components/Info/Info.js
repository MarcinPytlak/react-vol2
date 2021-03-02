import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {infoContents } from '../../data/dataStore';
import styles from './Info.scss';
import ReactHtmlParser from 'react-html-parser';

const Info = () => (
  <Container>
    <h1 className={styles.title}>{infoContents.title}</h1>
    <Hero
      titleText={infoContents.subtitle}
      imageSource={infoContents.image}
    />
    <div className={styles.description}>
      {ReactHtmlParser(infoContents.description)}
    </div>
  </Container>
);

export default Info;