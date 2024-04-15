import { useDispatch } from 'react-redux';
import { register } from 'components/redux/auth/operations';
import styles from './RegisterForm.module.css';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;

    const registrationData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    try {
      await dispatch(register(registrationData));

      form.reset();

      navigate('/login');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert('An account with this email already exists.');
      } else {
        alert('Registration failed. Please try again.');
      }
    }
  };

  const handleLogInClick = () => {
    navigate('/login');
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
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
