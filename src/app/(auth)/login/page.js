import React from 'react';
import styles from './login-page.module.scss';
import LoginForm from '../../../../components/LoginForm';
const LoginPage = () => {
  return (
    <main className="background">
      <div className={styles.login}>
        <h1 className={styles.login__heading}>Login</h1>
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
