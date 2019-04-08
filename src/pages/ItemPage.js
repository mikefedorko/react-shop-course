import React, { Component, Fragment } from 'react';

import Comments from '../components/Comments';

import * as api from '../services/api';

const articleStyle = {
  margin: '10px'
};

export default class ItemPage extends Component {
  state = {
    id: null,
    name: null,
    description: null,
    image: null,
    price: null,
    category: null,
    ingredients: []
  };

  componentDidMount() {
    const { match } = this.props;

    api
      .getMenuItemById(match.params.id)
      .then(item => this.setState({ ...item }))
      .catch(error => console.log(error));
  }

  // eslint-disable-next-line consistent-return
  handleGoBack = () => {
    const { history, location } = this.props;
    const { state } = location;

    if (state) {
      history.push(state.from);
    }

    if (location.search === '') {
      history.push({
        pathname: '/menu'
      });
    }
  };

  render() {
    const {
      id,
      name,
      description,
      image,
      price,
      category,
      ingredients
    } = this.state;
    return (
      <Fragment>
        <button type="button" onClick={this.handleGoBack}>
          Назад к меню
        </button>

        <article key={id} style={articleStyle}>
          <img src={image} alt="Amazing dish" width="250px" />
          <h3>{name}</h3>
          <b>Цена: {price}</b>
          <br />
          <b>Категория: {category}</b>
          <br />
          <span>Описание: {description}</span>
          <h3>Ингридиенты:</h3>
          <ul>
            {ingredients.map(ingridient => (
              <li key={ingridient}>{ingridient}</li>
            ))}
          </ul>
          <Comments />
        </article>
      </Fragment>
    );
  }
}
