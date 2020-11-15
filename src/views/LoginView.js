import React, { Component } from 'react';
import '../styles/base.scss';
import { authOperations } from '../redux/auth';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };
  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ email: '', password: '' });
  };
  render() {
    const { email, password } = this.state;
    return (
      <Form
        onSubmit={this.handleSubmit}
        autoComplete="off"
        style={{
          padding: '20px',
          width: '400px',
          margin: '50px auto',
          borderRadius: '0.25rem',
          boxShadow: '0px 0px 23px 4px rgba(0,0,0,0.31)',
        }}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted" style={{ paddingLeft: '5px' }}>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
            placeholder="Password"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{ margin: '0 auto', display: 'block', opacity: '0.7' }}
        >
          Log In
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};
export default connect(null, mapDispatchToProps)(LoginView);
