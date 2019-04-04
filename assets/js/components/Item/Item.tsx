import React from 'react';

import classes from './Item.module.css';
import ItemModel from '../../api/models/itemModel';

type ImageClickHandler = (
  event: React.MouseEvent<HTMLImageElement, MouseEvent>
) => void;

interface ItemProps extends ItemModel {
  clickHandler: ImageClickHandler;
}

const Item: React.FC<ItemProps> = (props: ItemProps): React.ReactElement => {
  const { clickHandler, image, selected, name } = props;
  const imgSrc = `images/items/${image}.png`;

  let imageClass = '';
  if (!selected) {
    imageClass = classes.unselected;
  }

  return (
    <div className={classes.item}>
      <img
        src={imgSrc}
        className={imageClass}
        onClick={clickHandler}
        alt={name}
      />
    </div>
  );
};

export default Item;
