import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useAuth } from 'components/hooks/useAuth';

export const Footer = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={styles.footerContainer}>
      <div className={styles.contentFooter}>
        {!isLoggedIn && (
          <ul className={styles.listContainer}>
            <h3 className={styles.footerNav}>Navigation</h3>
            <li className={styles.liStyle}>
              <Link to="/" className={styles.navLink} id="home">
                <strong>Home</strong>
              </Link>
            </li>
            <li className={styles.liStyle}>
              <Link to="/register" className={styles.navLink} id="register">
                <strong>Register</strong>
              </Link>
            </li>
            <li className={styles.liStyle}>
              <Link to="/login" className={styles.navLink} id="login">
                <strong>Login</strong>
              </Link>
            </li>
          </ul>
        )}

        {!isLoggedIn && (
          <div className={styles.iconsContainer}>
            <h3 className={styles.findUsTitle}>Contact</h3>
            <div className={styles.footerIcons}>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={22} className={styles.everyIcon} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={22} className={styles.everyIcon} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={22} className={styles.everyIcon} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={22} className={styles.everyIcon} />
              </a>
            </div>
          </div>
        )}
      </div>

      <div className={styles.copyrightBox}>
        <p className={styles.copyright}>© 2024 - ContactBook</p>
      </div>
    </div>
  );
};

export default Footer;
