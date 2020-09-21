import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.label}>
      <p className={styles.labelName}>Find contact by name</p>
      <input
        className={styles.input}
        type="text"
        placeholder="Name"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

export default Filter;
