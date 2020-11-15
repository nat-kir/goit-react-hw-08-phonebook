import React from 'react';
import '../../styles/base.scss';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AuthNav = () => (
  <Nav className="mr-sm-2">
    <Nav.Link href="/register">Registration</Nav.Link>
    <Nav.Link href="/login">Login</Nav.Link>
  </Nav>
);

export default AuthNav;
