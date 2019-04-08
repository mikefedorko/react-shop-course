import React, { Component } from 'react';

const styles = {
  select: {
    fontSize: 15
  }
};

class CategorySelectror extends Component {
  state = {};

  render() {
    const { options, value, onChange } = this.props;

    return (
      <div>
        <select
          style={styles.select}
          value={value}
          onChange={e => onChange(e.target.value)}
        >
          {options.map(({ id, name }) => (
            <option key={id} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default CategorySelectror;
