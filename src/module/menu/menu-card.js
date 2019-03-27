import React from 'react';
// import v4 from 'uuid/v4';
// import CommentsAndSelect from './form';

const MenuCard = ({
  name,
  description,
  image,
  price,
  onShowMoreInfo,
  onDelete /* ingredients */
}) => {
  return (
    <div>
      <section>
        <h3>{name}</h3>
        <p>{description}</p>
        <img src={image} alt={name} width="200px" />
        <br />
        <span>Price: {price}</span>
        {/* <ul>{ingredients.map((ingridient) => <li key={v4()}>{ingridient}</li>)}</ul>
						<section>
							<CommentsAndSelect />
						</section> */}
        <div className="actions">
          <button type="button" onClick={onShowMoreInfo}>
            Больше инфо
          </button>
          <button type="button" onClick={onDelete}>
            Удалить
          </button>
        </div>
      </section>
    </div>
  );
};

export default MenuCard;
