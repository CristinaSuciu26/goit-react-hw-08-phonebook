import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { FaEnvelope } from 'react-icons/fa';
import { IoLockClosedSharp } from 'react-icons/io5';

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
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.loginIconContainer}>
          <FaEnvelope className={styles.loginIconEnvelope}/>
          <input
            className={styles.loginInput}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className={styles.loginIconContainer}>
          <IoLockClosedSharp className={styles.loginIconPassword} />
          <input
            className={styles.loginInput}
            type="password"
            name="password"
            placeholder="Password (min. 8 characters)"
            required
          />
        </div>

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
