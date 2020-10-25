import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import contactActions from '../../redux/phonebook/phonebook-actions';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.label}>
      <p className={styles.labelName}>Find contact by name</p>
      <input
        className={styles.input}
        type="text"
        placeholder="Name"
        value={value}
        onChange={e => onChange(e.target.value)}
      ></input>
    </label>
  );
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  onChange: contactActions.filterContacts,
};
// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
