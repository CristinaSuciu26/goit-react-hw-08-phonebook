import { useAuth } from 'components/hooks/useAuth';
import { logOut } from 'components/redux/auth/operations';
import { useDispatch } from 'react-redux';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div className={styles.userContent}>
      <p className={styles.welcomeMsg}>Welcome, {user.name}</p>
      <button className={styles.logoutBtn} onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
