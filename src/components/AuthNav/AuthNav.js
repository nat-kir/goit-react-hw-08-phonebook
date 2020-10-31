import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/base.scss';

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      className="NavLink"
      activeClassName="NavLink--active"
    >
      Registration
    </NavLink>
    <NavLink
      to="/login"
      exact
      className="NavLink"
      activeClassName="NavLink--active"
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
