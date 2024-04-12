import React from 'react';
import styles from './Home.module.css';
import img02 from '../../images/img02.jpg';
import img01 from '../../images/img01.jpg';
import img03 from '../../images/img03.jpg';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          Revolutionizing Contact Management{' '}
          <span className={styles.titleDescription}>
            Manage Your Contacts with Ease
          </span>
        </h2>
      </div>

      <div className={styles.mainContent}>
        <ul className={styles.imgList}>
          <li>
            <img src={img01} alt="books aeshtetic" />
          </li>
          <li>
            <img src={img03} alt="books aeshtetic" />
          </li>
          <li>
            <img src={img02} alt="books aeshtetic" />
          </li>
        </ul>
        <div className={styles.homeParagraph}>
          <p>
            At Contact Book, we believe that managing your contacts should be
            easy and stress-free. That's why we've created an app that is
            user-friendly, efficient, and designed to meet all your contact
            management needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
