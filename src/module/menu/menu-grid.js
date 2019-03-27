import React from 'react';
import MenuCard from './menu-card';

const MenuCardGrid = ({ menu, onShowMoreInfo, onDelete }) => (
  <ul>
    {menu.map(item => (
      <li key={item.id}>
        <MenuCard
          name={item.name}
          description={item.description}
          image={item.image}
          price={item.price}
          onShowMoreInfo={() => onShowMoreInfo(item.id)}
          onDelete={() => onDelete(item.id)} // Для получения id передал следующий проп через анонимную ф-цию
        />
      </li>
    ))}
  </ul>
);

export default MenuCardGrid;
