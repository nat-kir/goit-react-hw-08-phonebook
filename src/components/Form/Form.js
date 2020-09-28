import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
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
    const { name, number } = this.state;
    e.preventDefault();
    if (name === '') {
      alert('Please, give a name for new contact');
      return;
    }
    if (number === '') {
      alert('Please, add a number');
      return;
    }
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form
        className={styles.form}
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <label className={styles.label}>
          <p className={styles.labelName}>Name:&#42;</p>
          <input
            required
            className={styles.input}
            type="text"
            placeholder="ex. Anne Hathaway"
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
          />
        </label>
        <label className={styles.label}>
          <p className={styles.labelName}>Number:&#42;</p>
          <input
            required
            className={styles.input}
            type="number"
            placeholder="ex. 0532455678"
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
