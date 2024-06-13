import React from 'react';
import styles from './ai-generate-form.module.scss';
import { FaChevronDown } from 'react-icons/fa6';
const AiGenerateForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.input__block}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter title here"
        />
      </div>
      <div className={styles.input__block}>
        <label htmlFor="time">Estimate time</label>
        <div className={styles.select__container}>
          <div className={styles.selected}>
            <div
              style={{
                background: '#4ADE80',
                width: '4px',
                height: '4px',
                borderRadius: '1px',
              }}
            ></div>
            <p>Health</p>
          </div>
          <ul className={styles.dropdown}>
            <li className={styles.dropdown__item}>
              <div
                style={{
                  background: '#4ADE80',
                  width: '4px',
                  height: '4px',
                  borderRadius: '1px',
                }}
              ></div>
              <p>Health</p>
            </li>
            <li className={styles.dropdown__item}>
              <div
                style={{
                  background: '#4ADE80',
                  width: '4px',
                  height: '4px',
                  borderRadius: '1px',
                }}
              ></div>
              <p>Health</p>
            </li>
            <li className={styles.dropdown__item}>
              <div
                style={{
                  background: '#4ADE80',
                  width: '4px',
                  height: '4px',
                  borderRadius: '1px',
                }}
              ></div>
              <p>Health</p>
            </li>
          </ul>
          <i>
            <FaChevronDown />
          </i>
        </div>
      </div>
      <div className={styles.input__block}>
        <label htmlFor="calendar">Calendar</label>
        <div className={styles.select__container}>
          <div className={styles.selected}>
            <div
              style={{
                background: '#4ADE80',
                width: '4px',
                height: '4px',
                borderRadius: '1px',
              }}
            ></div>
            <p>Health</p>
          </div>
          <ul className={styles.dropdown}>
            <li className={styles.dropdown__item}>
              <div
                style={{
                  background: '#4ADE80',
                  width: '4px',
                  height: '4px',
                  borderRadius: '1px',
                }}
              ></div>
              <p>Health</p>
            </li>
            <li className={styles.dropdown__item}>
              <div
                style={{
                  background: '#4ADE80',
                  width: '4px',
                  height: '4px',
                  borderRadius: '1px',
                }}
              ></div>
              <p>Health</p>
            </li>
            <li className={styles.dropdown__item}>
              <div
                style={{
                  background: '#4ADE80',
                  width: '4px',
                  height: '4px',
                  borderRadius: '1px',
                }}
              ></div>
              <p>Health</p>
            </li>
          </ul>
          <i>
            <FaChevronDown />
          </i>
        </div>
      </div>
      <div className={styles.input__block}>
        <label htmlFor="repeat">Repeat</label>
        <div className={styles.select__container}>
          <div className={styles.selected}>
            <div
              style={{
                background: '#4ADE80',
                width: '4px',
                height: '4px',
                borderRadius: '1px',
              }}
            ></div>
            <p>Health</p>
          </div>
          <ul className={styles.dropdown}>
            <li className={styles.dropdown__item}>
              <div
                style={{
                  background: '#4ADE80',
                  width: '4px',
                  height: '4px',
                  borderRadius: '1px',
                }}
              ></div>
              <p>Health</p>
            </li>
            <li className={styles.dropdown__item}>
              <div
                style={{
                  background: '#4ADE80',
                  width: '4px',
                  height: '4px',
                  borderRadius: '1px',
                }}
              ></div>
              <p>Health</p>
            </li>
            <li className={styles.dropdown__item}>
              <div
                style={{
                  background: '#4ADE80',
                  width: '4px',
                  height: '4px',
                  borderRadius: '1px',
                }}
              ></div>
              <p>Health</p>
            </li>
          </ul>
          <i>
            <FaChevronDown />
          </i>
        </div>
      </div>
      <div className={styles.input__block}>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Enter description here"
        />
      </div>
      <button>Add task</button>
    </form>
  );
};

export default AiGenerateForm;
