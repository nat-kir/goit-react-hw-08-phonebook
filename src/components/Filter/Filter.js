import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Filter.module.css';
import { connect } from 'react-redux';
import contactActions from '../../redux/phonebook/phonebook-actions';
import contactsSelectors from '../../redux/phonebook/phonebookSelectors';
import { Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Filter = ({ value, onChange }) => {
  return (
    // <label className={styles.label}>
    //   <p className={styles.labelName}>c</p>
    //   <input
    //     className={styles.input}
    //     type="text"
    //     placeholder="Name"
    //     value={value}
    //     onChange={e => onChange(e.target.value)}
    //   ></input>
    // </label>
    <Form.Group
      as={Row}
      controlId="formPlaintextEmail"
      style={{ marginTop: '20px' }}
    >
      <Form.Label column sm="5">
        Find contact by name
      </Form.Label>
      <Col sm="7">
        <Form.Control
          type="text"
          placeholder="Name"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </Col>
    </Form.Group>
  );
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onChange: contactActions.filterContacts,
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
