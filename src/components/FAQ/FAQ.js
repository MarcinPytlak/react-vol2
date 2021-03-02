import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {FAQContents } from '../../data/dataStore';
import styles from './FAQ.scss';
import ReactHtmlParser from 'react-html-parser';

const FAQ = () => (
  <Container>
    <h1 className={styles.title}>{FAQContents.title}</h1>
    <Hero
      titleText={FAQContents.subtitle}
      imageSource={FAQContents.image}
    />
    <div className={styles.description}>
      <h2 className={styles.subtitle}>{FAQContents.questionOne}</h2>
      {ReactHtmlParser(FAQContents.answerOne)}
      <h2 className={styles.subtitle}>{FAQContents.questionTwo}</h2>
      {ReactHtmlParser(FAQContents.answerTwo)}
    </div>
  </Container>
);

export default FAQ;