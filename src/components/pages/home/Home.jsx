import React from 'react';
import styles from './Home.module.css';
import image01 from '../../images/image01.jpg';
import image02 from '../../images/image02.jpg';
import image03 from '../../images/image03.jpg';
import image04 from '../../images/image04.jpg';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h2 className={styles.homeTitle}>
        Welcome to your personalized contact management
      </h2>

      <ul className={styles.imgList}>
        <li>
          <img src={image01} alt="flowers and books" />
          <p>Find joy</p>
        </li>
        <li>
          <img src={image02} alt="contact book" width="200" />
          <p>In</p>
        </li>
        <li>
          <img src={image03} alt="spring flowers" width="200" />
          <div>       <p>Whatever</p></div>
   
        </li>
        <li>
          <img src={image04} alt="books aeshtetic" />
          <p>You do</p>
        </li>
      </ul>
      <div className={styles.light}></div>
    </div>
  );
};

export default Home;
