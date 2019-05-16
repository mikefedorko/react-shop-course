import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Animated } from 'react-animated-css';

import { AsyncOperations, Selectors } from '../../components/redux/menu';

import Form from '../../components/form-elements/Form';
import Input from '../../components/form-elements/Input';
import Label from '../../components/form-elements/Label';
import Button from '../../components/form-elements/Button';

import styles from './sign-up.module.css';

const INITIAL_STATE = { name: '', email: '', password: '' };

class SignUpForm extends Component {
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
    const { name, email, password } = this.state;

    return (
      <Animated animationIn="fadeInLeft" animationOut="fadeOut">
        <div className={styles.signUp}>
          <Form onSubmit={this.handleSubmit}>
            <Label text="Name">
              <Input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder="Any Name..."
              />
            </Label>

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

            <Button label="Sign up" />
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
  onSubmit: AsyncOperations.signUp
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
