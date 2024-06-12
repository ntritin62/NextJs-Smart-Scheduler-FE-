'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './login-form.module.scss';
import Link from 'next/link';
import { useFormState } from 'react-dom';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const submitHandler = async (data) => {};
  return (
    <form onSubmit={handleSubmit(submitHandler)} className={styles.login__form}>
      <p className={styles['login__form--error']}>123</p>
      <div className={styles.login__input__block}>
        <label htmlFor="email" className={styles.login__label}>
          Email
        </label>
        <input
          type="text"
          id="email"
          {...register(
            'email',
            { required: true },
            {
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            }
          )}
          placeholder="Enter your email"
          className={styles.login__input}
        />
        {errors.email && <p className={styles.input__error}>Invalid email</p>}
      </div>
      <div className={styles.login__input__block}>
        <label htmlFor="password" className={styles.login__label}>
          Password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          {...register(
            'password',
            { required: true },
            {
              pattern:
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
            }
          )}
          name="password"
          className={styles.login__input}
        />
        {errors.password && (
          <p className={styles.input__error}>
            Password must contain a minimum of 8 characters with at least one
            uppercase, one lowercase, one special character, and one number.
          </p>
        )}
      </div>

      <button type="submit" className={styles.login__btn}>
        LOGIN
      </button>
      <p className={styles.signup__navigation}>
        No account? <Link href="/register">Register</Link> Here
      </p>
    </form>
  );
};

export default LoginForm;
