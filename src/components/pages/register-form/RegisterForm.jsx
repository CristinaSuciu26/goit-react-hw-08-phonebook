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
  };
  const handleLogInClick = () => {
    navigate('/login'); 
  };


  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
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
          placeholder="Password"
          required
        />
        <button type="submit" className={styles.registerBtn}>
          Register
        </button>
      </form>
      <div className={styles.loginContainer}>
        <p>
          Already have an account?
          <button className={styles.loginBtn} onClick={handleLogInClick}>Login</button>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
