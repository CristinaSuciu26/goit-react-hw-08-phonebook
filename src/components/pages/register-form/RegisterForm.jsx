import { useDispatch } from 'react-redux';
import { register } from 'components/redux/auth/operations';
import styles from './RegisterForm.module.css';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();

    const existentAccount = form.elements.email.value;
    if (existentAccount) {
    }
    navigate('/login');
  };

  const handleLogInClick = () => {
    navigate('/login');
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <h2 className={styles.title}>Contactbook</h2>

        <input
          className={styles.registerInput}
          type="text"
          name="name"
          placeholder="Name"
          required
        />

        <input
          className={styles.registerInput}
          type="email"
          name="email"
          placeholder="Email"
          required
        />

        <input
          className={styles.registerInput}
          type="password"
          name="password"
          placeholder="Password (minimum 8 characters)"
          required
          pattern=".{8,}"
          title="The password must be at least 8 characters"
        />

        <button type="submit" className={styles.registerBtn}>
          Register
        </button>
      </form>
      <div className={styles.loginContainer}>
        <p>
          Already have an account?
          <button className={styles.loginBtn} onClick={handleLogInClick}>
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
