import React from 'react';
import PropTypes from 'prop-types';
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

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
