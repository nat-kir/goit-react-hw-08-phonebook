import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  position: 'absolute',
  top: '5px',
  right: '20px',
  padding: '5px',
};
const Notification = ({ message }) => {
  return (
    <Alert variant="danger" style={styles}>
      {message}
    </Alert>
  );
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;

// <div bsStyle="alert" className="Notification">
//   <p>{message}</p>
// </div>

// style={{
//   position: 'absolute',
//   top: '5px',
//   right: '20px',
//   padding: '5px',
// }}
