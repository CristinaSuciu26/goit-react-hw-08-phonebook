import { useAuth } from 'components/hooks/useAuth';
import { logOut } from 'components/redux/auth/operations';
import { useDispatch } from 'react-redux';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div className={styles.userMenu}>
      <p>Welcome, {user.name}</p>
      <button className={styles.logoutBtn} onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
