import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/base.scss';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact className="NavLink" activeClassName="NavLink--active">
      Main
    </NavLink>

    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToProps)(Navigation);
