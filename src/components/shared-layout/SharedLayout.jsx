import React, { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styles from './SharedLayout.module.css';
import Loader from 'components/loader/Loader';
import UserMenu from 'components/user-menu/UserMenu';
import { useAuth } from 'components/hooks/useAuth';

const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.layoutContainer}>
        <nav>
          <NavLink to="/" className={styles.navLinkHome} id="home">
            <strong>Home</strong>
          </NavLink>
        </nav>
        <nav>
          {!isLoggedIn && (
            <>
              <NavLink to="/register" className={styles.navLink}>
                <strong>Register</strong>
              </NavLink>
              <NavLink to="/login" className={styles.navLink}>
                <strong>Login</strong>
              </NavLink>
            </>
          )}
        </nav>
        {isLoggedIn && <UserMenu />}
      </div>
      <hr />
      <div className={styles.contentContainer}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default SharedLayout;
