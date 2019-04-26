import React, { Component } from 'react';

import Container from '../../Container/Container';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

export default class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.setState = { ...INITIAL_STATE };
  }

  onChange = event => {
    this.setState({ [event.target.name]: [event.target.value] });
  };

  onSubmit = event => {};

  render() {
    const { username, email } = this.state;
    return (
      <Container>
        <form onSubmi={this.onSubmit}>
          <input
            name="username"
            type="text"
            onChange={this.onChange}
            value={username}
            placeholder="name"
          />
          <input
            name="email"
            type="text"
            onChange={this.onChange}
            value={email}
            placeholder="email"
          />
          <input
            name="passwordOne"
            type="password"
            onChange={this.onChange}
            value={passwordOne}
            placeholder="Password"
          />
          <input
            name="passwordTwo"
            type="password"
            onChange={this.onChange}
            value={passwordTwo}
            placeholder="Confirma password"
          />

          <button type="submit">Sign Up</button>

          {error && <p>{error.message}</p>}
        </form>
      </Container>
    );
  }
}
