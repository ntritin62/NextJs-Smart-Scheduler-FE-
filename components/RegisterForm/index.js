'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './register-form.module.scss';
import Link from 'next/link';
import { useFormState } from 'react-dom';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const submitHandler = async (data) => {};
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className={styles.register__form}
    >
      <p className={styles['register__form--error']}>123</p>
      <div className={styles.register__input__block}>
        <label htmlFor="email" className={styles.register__label}>
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
          className={styles.register__input}
        />
        {errors.email && <p className={styles.input__error}>Invalid email</p>}
      </div>
      <div className={styles.register__input__block}>
        <label htmlFor="username" className={styles.register__label}>
          Username
        </label>
        <input
          type="text"
          id="username"
          {...register('username', { required: true })}
          placeholder="Enter your username"
          className={styles.register__input}
        />
        {errors.email && <p className={styles.input__error}>Invalid email</p>}
      </div>
      <div className={styles.register__input__block}>
        <label htmlFor="password" className={styles.register__label}>
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
          className={styles.register__input}
        />
        {errors.password && (
          <p className={styles.input__error}>
            Password must contain a minimum of 8 characters with at least one
            uppercase, one lowercase, one special character, and one number.
          </p>
        )}
      </div>
      <div className={styles.register__input__block}>
        <label htmlFor="confirmPassword" className={styles.register__label}>
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          id="confirmPassword"
          {...register('confirmPassword', {
            required: true,
            validate: (value, formValues) => value === formValues.password,
          })}
          name="confirmPassword"
          className={styles.register__input}
        />
        {errors.confirmPassword && (
          <p className={styles.input__error}>
            Confirm password does not match.
          </p>
        )}
      </div>

      <button type="submit" className={styles.register__btn}>
        Register
      </button>
      <p className={styles.signup__navigation}>
        No account? <Link href="/register">Register</Link> Here
      </p>
    </form>
  );
};

export default RegisterForm;
