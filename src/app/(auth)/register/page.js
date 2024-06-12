import React from 'react';
import styles from './register-page.module.scss';
import RegisterForm from '../../../../components/RegisterForm';

const RegisterPage = () => {
  return (
    <main className="background">
      <div className={styles.register}>
        <h1 className={styles.register__heading}>Register</h1>
        <RegisterForm />
      </div>
    </main>
  );
};

export default RegisterPage;
