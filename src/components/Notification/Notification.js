import React from 'react';
import styles from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <div className={styles.Notification}>
      <p>{message}</p>
    </div>
  );
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
