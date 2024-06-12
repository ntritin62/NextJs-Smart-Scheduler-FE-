'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './login-form.module.scss';
import Link from 'next/link';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const submitHandler = async () => {};
  return (
    <form className={styles.login__form}>
      <div className={styles.login__input__block}>
        <label htmlFor="email" className={styles.login__label}>
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="Enter your email"
          className={styles.login__input}
        />
      </div>
      <div className={styles.login__input__block}>
        <label htmlFor="password" className={styles.login__label}>
          Password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          name="password"
          className={styles.login__input}
        />
      </div>

      <button className={styles.login__btn}>LOGIN</button>
      <p className={styles.signup__navigation}>
        No account? <Link href="/register">Register</Link> Here
      </p>
    </form>
  );
};

export default LoginForm;
