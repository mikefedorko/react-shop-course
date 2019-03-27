import React, { Component } from 'react';
import SearchForm from './search-form';
import MenuGrid from './menu-grid';
import * as API from '../../services/api';

class MenuContainer extends Component {
  state = {
    inputText: '',
    menu: []
  };

  componentDidMount() {
    API.getAllMenuItems().then(menu => {
      this.setState({ menu });
    });
  }

  handleShowMoreInfo = id => {
    API.getAllMenuItemsById(id).then(item => {
      return console.log(item);
    });
  };

  handleDeleteItem = id => {
    API.deleteMenuItem(id).then(isOk => {
      if (!isOk) return;

      this.setState(state => ({
        menu: state.menu.filter(item => item.id !== id)
      }));
    });
  };

  handleInputChange = e => {
    this.setState({
      inputText: e.target.value
    });
  };

  handleAddMenuItem = () => {
    const item = {
      name: `New name ${Date.now()}`,
      price: Math.random(),
      image:
        'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640'
    };

    API.addMenuItem(item).then(newItem => {
      this.setState(state => ({
        menu: [...state.menu, newItem]
      }));
    });
  };

  render() {
    const { inputText, menu } = this.state;
    return (
      <div>
        <SearchForm value={inputText} handleChange={this.handleInputChange} />
        <button type="button" onClick={this.handleAddMenuItem}>
          Добавить элемент меню
        </button>
        <MenuGrid
          menu={menu}
          onShowMoreInfo={this.handleShowMoreInfo}
          onDelete={this.handleDeleteItem}
        />
      </div>
    );
  }
}
export default MenuContainer;
