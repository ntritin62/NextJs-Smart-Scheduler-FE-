import React from 'react';
import styles from './ai-generate.module.scss';
import AiGenerateForm from '../../../../components/AiGenerateForm';
import { FaCalendarMinus, FaGripLines } from 'react-icons/fa6';
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
          <div className={styles.ai__right}>
            <ul className={styles.ai__list}>
              <li className={styles.ai__item}>
                <i className={styles.icon}>
                  <FaGripLines />
                </i>
                <div
                  style={{
                    background: '#4ADE80',
                    width: '4px',
                    height: '4px',
                    borderRadius: '1px',
                  }}
                ></div>
                <h3>Take shower</h3>
                <p>6:30am - 7:00am</p>
                <i className={styles.delete__icon}>
                  <FaCalendarMinus />
                </i>
              </li>
              <li className={styles.ai__item}>
                <i className={styles.icon}>
                  <FaGripLines />
                </i>
                <div
                  style={{
                    background: '#4ADE80',
                    width: '4px',
                    height: '4px',
                    borderRadius: '1px',
                  }}
                ></div>
                <h3>Take shower</h3>
                <p>6:30am - 7:00am</p>
                <i className={styles.delete__icon}>
                  <FaCalendarMinus />
                </i>
              </li>
            </ul>
            <button className={styles.ai__btn}>Generate schedule</button>
          </div>
        </h2>
      </div>
    </main>
  );
};

export default AiGeneratePage;
