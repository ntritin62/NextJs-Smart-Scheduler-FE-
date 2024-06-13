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
          <select name="repeat" id="repeat">
            <option value="">30 minutes</option>
          </select>
          <i>
            <FaChevronDown />
          </i>
        </div>
      </div>
      <div className={styles.input__block}>
        <label htmlFor="calendar">Calendar</label>
        <div className={styles.select__container}>
          <div
            style={{
              background: '#4ADE80',
              position: 'absolute',
              top: '45%',
              left: '10px',
              width: '4px',
              height: '4px',
              borderRadius: '1px',
            }}
          ></div>
          <select name="repeat" id="repeat">
            <option value="">Health</option>
          </select>
          <i>
            <FaChevronDown />
          </i>
        </div>
      </div>
      <div className={styles.input__block}>
        <label htmlFor="repeat">Repeat</label>
        <div className={styles.select__container}>
          <select name="repeat" id="repeat">
            <option value="">1 time/day</option>
          </select>
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
