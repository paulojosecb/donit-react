import React, { Component } from 'react';

import Container from '../../Container/Container';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

class LoginPage extends Component {
    
  constructor(props) {
    super(props);
    this.setState = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name] : [event.target.value ]});
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = email === "" && password === "";

    return (
      <Container>
        <form onSubmit={this.onSubmit}>
            <input name="email" type="text" onChange={this.onChange} value={email} />
            <input name="password" type="password" onChange={this.onChange} value={password} />
            <button disabled={isInvalid} type="submit">Sign in</button>

            {error && <p>{error.message}</p>}
        </form>
      </Container>
    );
  }
}

export default LoginPage;
