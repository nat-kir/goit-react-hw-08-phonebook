import React from 'react';
import styles from './Container.module.css';

const ContactsAppContainer = ({ children }) => (
  <div className={styles.Container}>{children}</div>
);

export default ContactsAppContainer;
