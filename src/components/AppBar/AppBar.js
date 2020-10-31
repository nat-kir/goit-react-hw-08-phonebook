import React from 'react';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import styles from './AppBar.module.css';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const AppBar = ({ isAuthenticated }) => {
  return (
    <div className={styles.AppBar}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
