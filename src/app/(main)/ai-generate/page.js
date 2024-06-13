import React from 'react';
import styles from './ai-generate.module.scss';
import AiGenerateForm from '../../../../components/AiGenerateForm';
const AiGeneratePage = () => {
  return (
    <main className={`${styles.ai} container`}>
      <div>
        <h2 className={styles.ai__heading}>Create new task</h2>
        <AiGenerateForm />
      </div>
      <div>
        <h2 className={styles.ai__heading}>
          Generate schedule for <span>this week</span>
        </h2>
      </div>
    </main>
  );
};

export default AiGeneratePage;
