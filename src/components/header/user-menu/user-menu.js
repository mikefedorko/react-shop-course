/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component, createRef } from 'react';
import DropDown from './drop-down/drop-down';
import Avatar from '../avatar/avatar';
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

    const { isDropDownOpen } = this.state;

    if (isDropDownOpen && !isTargetInsideContainer) {
      this.closeDropDown();
    }
    // Если таргет не внутри isTargetInsideContainer, то закрываем окно + проверка isDropDownOpen.
  };

  openDropDown = () => {
    this.setState({ isDropDownOpen: true });
  };

  closeDropDown = () => {
    this.setState({ isDropDownOpen: false });
  };

  render() {
    const { isDropDownOpen } = this.state;
    const {
      avatar,
      user: { name },
      onSignOut = () => null
    } = this.props;
    return (
      <div
        onClick={this.openDropDown}
        className={s.userMenu}
        ref={this.containerRef}
      >
        <Avatar srcLink={avatar} width={70} height={70} />
        <span className={s.userName}>{name}</span>
        {isDropDownOpen && <DropDown onClick={onSignOut} />}
      </div>
    );
  }
}
