import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

class Form extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
  };

  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          <p className={styles.labelName}>Name:</p>
          <input
            className={styles.input}
            type="text"
            placeholder="ex. Anne Hathaway"
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
          />
        </label>
        <label className={styles.label}>
          <p className={styles.labelName}>Number:</p>
          <input
            className={styles.input}
            type="text"
            placeholder="ex. +12027953213"
            value={this.state.number}
            name="number"
            onChange={this.handleInputChange}
          />
        </label>

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
