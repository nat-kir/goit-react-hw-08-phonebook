import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactItem = ({ name, number, deleteContact }) => {
  return (
    <>
      <p>
        {name} : {number}
      </p>
      <button className={styles.button} type="button" onClick={deleteContact}>
        Удалить
      </button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
