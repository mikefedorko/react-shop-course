import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Animated } from 'react-animated-css';

import { AsyncOperations, Selectors } from '../../components/redux/menu';

import Form from '../../components/form-elements/Form';
import Input from '../../components/form-elements/Input';
import Label from '../../components/form-elements/Label';
import Button from '../../components/form-elements/Button';

import styles from './sign-in.module.css';

const INITIAL_STATE = { email: '', password: '' };

class SignInForm extends Component {
  state = { ...INITIAL_STATE };

  componentDidUpdate() {
    const { isAuthenticated, location, history } = this.props;

    if (isAuthenticated) {
      const { from } = location.state || { from: { pathname: '/' } };

      history.push(from);
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    onSubmit({ ...this.state });

    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Animated animationIn="fadeInRight" animationOut="fadeOut">
        <div className={styles.signIn}>
          <Form onSubmit={this.handleSubmit}>
            <Label text="Email">
              <Input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="example@mail.com"
              />
            </Label>

            <Label text="Password">
              <Input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </Label>

            <Button label="Sign in" type="submit" />
          </Form>
        </div>
      </Animated>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: Selectors.isAuthenticated(state)
});

const mapDispatchToProps = {
  onSubmit: AsyncOperations.signIn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
