import React from 'react';
import styles from './Home.module.css';
import img02 from '../../images/img02.jpg';
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
            <img src={img03} alt="books aeshtetic" />
          </li>
          <li>
            <img
              src={img02}
              alt="books aeshtetic"
              className={styles.firstPicture}
            />
          </li>
        </ul>

        <div className={styles.homeParagraph}>
          <div>
            <p>
              <h2 className={styles.storyTitle}>Contact Book's story</h2>
              As the world becomes more connected, managing contacts can be a
              daunting task. That's why Contact Book was created - to simplify
              life and streamline communication. The app is designed to make
              managing contacts easy, with a clean and attractive design.
              <p>
                Managing contacts should be easy and stress-free. This app is
                user-friendly, efficient, and designed to meet all contact
                management needs.
              </p>
            </p>
          </div>
          <div>
            <p>
              <h2 className={styles.storyTitle}>
                How do I get started with Contact Book?
              </h2>
              Getting started with Contact Book is easy. Simply create an
              account, and start managing your contacts with ease. With its
              user-friendly interface, you'll be up and running in no time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
