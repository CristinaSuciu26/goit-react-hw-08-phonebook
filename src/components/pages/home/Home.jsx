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
          <div className={styles.firstParagraph}>
            <p>
              <h2 className={styles.storyTitle}>Our story</h2>
              As the world becomes more connected, managing your contacts can be
              a daunting task. That's why we created Contact Book - to simplify
              your life and streamline your communication. Our app is designed
              to make managing your contacts easy, with a clean, modern, and
              attractive design.
              <p>
                We believe that managing your contacts should be easy and
                stress-free. This app is user-friendly, efficient, and designed
                to meet all your contact management needs.
              </p>
            </p>
          </div>
          <div className={styles.secondParagraph}>
            <p>
              <h2 className={styles.storyTitle}>
                How do I get started with Contact Book?
              </h2>
              Getting started with Contact Book is easy. Simply create an
              account, and start managing your contacts with ease. With our
              user-friendly interface and intuitive design, you'll be up and
              running in no time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
