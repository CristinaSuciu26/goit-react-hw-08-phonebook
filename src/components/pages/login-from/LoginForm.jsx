import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const handleSignUpClick = () => {
    navigate('/register');
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.loginInput}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className={styles.loginInput}
          type="password"
          name="password"
          placeholder="Password (minimum 8 characters)"
          required
        />
        <button type="submit" className={styles.loginBtn}>
          Log In
        </button>
      </form>
      <div className={styles.signupContainer}>
        <p>
          Don't have an account?
          <button className={styles.signupBtn} onClick={handleSignUpClick}>
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
