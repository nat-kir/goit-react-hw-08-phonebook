import React, { Component } from 'react';
import '../styles/base.scss';
import { authOperations } from '../redux/auth';
import { connect } from 'react-redux';

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
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="login-form"
          autoComplete="off"
        >
          <label className="login-label">
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </label>

          <label className="login-label">
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </label>

          <button type="submit">LOGIN</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};
export default connect(null, mapDispatchToProps)(LoginView);
