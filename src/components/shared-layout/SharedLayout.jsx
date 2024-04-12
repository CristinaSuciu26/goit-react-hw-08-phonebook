import React, { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styles from './SharedLayout.module.css';
import Loader from 'components/loader/Loader';
import UserMenu from 'components/user-menu/UserMenu';
import { useAuth } from 'components/hooks/useAuth';
import Footer from 'components/footer/Footer';
import { FaAddressBook } from 'react-icons/fa';

const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.contactTitle}>Contact Book</h2>
      <div className={styles.layoutContainer}>
        {!isLoggedIn && (
          <nav>
            <NavLink to="/" className={styles.navLinkHome} id="home">
              <div className={styles.logoContainer}>
                <FaAddressBook size={22}/>
                <span className={styles.logo}>Home</span>
              </div>
            </NavLink>
          </nav>
        )}
        <nav>
          {!isLoggedIn && (
            <>
              <NavLink to="/register" className={styles.navLink} id="register">
                <strong>Register</strong>
              </NavLink>
              <NavLink to="/login" className={styles.navLink} id="login">
                <strong>Login</strong>
              </NavLink>
            </>
          )}
        </nav>

        {isLoggedIn && <UserMenu />}
      </div>
      <div className={styles.contentContainer}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
};

export default SharedLayout;
