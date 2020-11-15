import React from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = ({ isAuthenticated }) => (
  <Nav className="mr-auto">
    <Nav.Link href="/">Main</Nav.Link>
    {isAuthenticated && <Nav.Link href="/contacts">Contacts</Nav.Link>}
  </Nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToProps)(Navigation);
