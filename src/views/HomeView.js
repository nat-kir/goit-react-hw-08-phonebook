import React from 'react';
import '../styles/base.scss';
import { Button, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { authSelectors } from '../redux/auth';
import { connect } from 'react-redux';

const HomeView = ({ isAuthenticated }) => {
  return (
    <Jumbotron
      style={{
        backgroundColor: 'rgb(255, 255, 255, 0.7)',
        width: '600px',
        margin: '50px auto',
        boxShadow: '0px 0px 23px 4px rgba(0,0,0,0.31)',
      }}
    >
      <h1>Hello, friend!</h1>
      <p>
        This is a simple phonebook application created with React, Redux toolkit
        and React Bootstrap.
      </p>

      {!isAuthenticated && (
        <p style={{ marginTop: '20px' }}>
          Please, Sign Up to have access to phonebook.
        </p>
      )}
      <p style={{ margin: '20px 0' }}>Natalia Kiriunina</p>
      {isAuthenticated ? (
        <Button href="/contacts" variant="primary" style={{ opacity: '0.7' }}>
          My contacts
        </Button>
      ) : (
        <>
          <Button href="/register" variant="primary" style={{ opacity: '0.7' }}>
            Sign Up
          </Button>
          {'  '}
          <Button
            href="/login"
            variant="secondary"
            style={{ margin: '0 auto', opacity: '0.7' }}
          >
            Log In
          </Button>
        </>
      )}
    </Jumbotron>
  );
};
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToProps)(HomeView);
