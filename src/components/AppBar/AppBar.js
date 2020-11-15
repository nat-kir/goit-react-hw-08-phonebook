import React from 'react';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppBar = ({ isAuthenticated }) => {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: 'rgb(255, 255, 255, 0.8)',
      }}
    >
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </Navbar>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
