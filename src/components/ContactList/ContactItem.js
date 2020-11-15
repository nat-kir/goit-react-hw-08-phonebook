import React from 'react';
import PropTypes from 'prop-types';
// import styles from './ContactList.module.css';
import { connect } from 'react-redux';
import contactOperations from '../../redux/phonebook/phonebookOperations';
import contactsSelectors from '../../redux/phonebook/phonebookSelectors';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/base.scss';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ListGroup.Item>
      <Row>
        <Col sm="9">
          <p
            style={{ display: 'block', paddingTop: '7px', margin: 'auto 0px' }}
          >
            {name} : {number}
          </p>
        </Col>
        <Col sm="3">
          <Button
            variant="outline-danger"
            type="button"
            onClick={onDeleteContact}
            style={{ opacity: '0.7' }}
          >
            Delete
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
const mapState = (state, ownProps) => {
  const item = contactsSelectors.getContactById(state, ownProps.id);
  return { ...item };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteContact: () => {
    dispatch(contactOperations.removeContact(ownProps.id));
    console.log(ownProps.id);
  },
});
export default connect(mapState, mapDispatchToProps)(ContactItem);
