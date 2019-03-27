/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { PureComponent, createRef } from 'react';

export default class ModalContainer extends PureComponent {
  containerRef = createRef();

  state = { isModalOpen: false };

  componentDidMount() {
    document.addEventListener('click', this.handleWindowClick);
    window.addEventListener('keydown', this.handleWindowKeyPress);
  }

  componentWillUnmount() {}

  handleWindowClick = e => {
    if (e.target !== this.containerRef.current) return;

    this.closeModal();
    document.removeEventListener('click', this.handleWindowClick);
  };

  handleWindowKeyPress = e => {
    if (e.keyCode === 27) {
      this.closeModal();
      window.removeEventListener('keydown', this.handleWindowKeyPress);
    }
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <div>
        <button type="button" onClick={this.openModal}>
          Open Modal
        </button>
        {isModalOpen && (
          <div
            className="BackDrop"
            ref={this.containerRef}
            onClick={this.handleWindowClick}
          >
            <div className="ModalWindow">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                illum illo cupiditate voluptates reiciendis cumque, iusto fugiat
                in explicabo quibusdam.
              </p>
              <button type="button" onClick={this.closeModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
