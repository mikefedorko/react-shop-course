/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component, createRef } from 'react';
import { Animated } from 'react-animated-css';

import DropDown from './drop-down/drop-down';
import Avatar from '../avatar';
import s from './user-menu.module.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class UserMenu extends Component {
  containerRef = createRef();

  state = {
    isDropDownOpen: false
  };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isDropDownOpen } = this.state;

    return nextState.isDropDownOpen !== isDropDownOpen;
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = e => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target
    );
    // Если кликнули не в контейнер с юзер-меню будет - false, наоборот - true.
    const button = e.target.nodeName === 'BUTTON';
    const link = e.target.nodeName === 'A';

    const { isDropDownOpen } = this.state;

    if (isDropDownOpen && (link || button || !isTargetInsideContainer)) {
      this.toggleModal();
    }
    // Если таргет не внутри isTargetInsideContainer, то закрываем окно + проверка isDropDownOpen.
  };

  toggleModal = () => {
    this.setState(prevState => ({ isDropDownOpen: !prevState.isDropDownOpen }));
  };

  render() {
    const { isDropDownOpen } = this.state;
    const {
      user: { name },
      onSignOut = () => null
    } = this.props;
    return (
      <Animated animationIn="fadeInDown" animationOut="fadeOut">
        <div
          onClick={this.toggleModal}
          className={s.userMenu}
          ref={this.containerRef}
        >
          <span className={s.userName}>{name}</span>
          <Avatar />
          {isDropDownOpen && (
            <DropDown onClick={onSignOut} onClose={this.toggleModal} />
          )}
        </div>
      </Animated>
    );
  }
}
