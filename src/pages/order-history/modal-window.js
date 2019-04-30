import React, { PureComponent, createRef } from 'react';

import s from './modal-window.module.css';

export default class ModaWindow extends PureComponent {
  containerRef = createRef();

  componentDidMount() {
    document.addEventListener('click', this.handleWindowClick);
    window.addEventListener('keydown', this.handleWindowKeyPress);
  }

  handleWindowClick = e => {
    if (e.target !== this.containerRef.current) return;
    const { onClick } = this.props;
    onClick();
    document.removeEventListener('click', this.handleWindowClick);
  };

  handleWindowKeyPress = e => {
    if (e.keyCode === 27) {
      const { onClick } = this.props;
      onClick();
      window.removeEventListener('keydown', this.handleWindowKeyPress);
    }
  };

  render() {
    const { infoAboutQuery, onClick } = this.props;
    return (
      <div className={s.BackDrop} ref={this.containerRef}>
        <div className={s.ModalWindow}>
          <span>{infoAboutQuery}</span>
          <br />
          <button type="button" onClick={onClick}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
