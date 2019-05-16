import React from 'react';

import classes from './Item.module.css';
import ItemModel from '../../api/models/itemModel';

type ImageClickHandler = (
  event: React.MouseEvent<HTMLImageElement, MouseEvent>,
  id: string
) => void;

export interface ItemProps extends ItemModel {
  clickHandler: ImageClickHandler;
}

const Item: React.FC<ItemProps> = (props: ItemProps): React.ReactElement => {
  const { id, clickHandler, image, upgradeImages, level, name } = props;

  let imageClass = '';
  if (level === 0) {
    imageClass = classes.unselected;
  }

  let imageForLevel = image;
  if (upgradeImages && upgradeImages.length > 0 && level > 1) {
    imageForLevel = upgradeImages[level - 2];
  }

  const imgSrc = `images/items/${imageForLevel}.png`;

  return (
    <div className={classes.item}>
      <img src={imgSrc} className={imageClass} onMouseDown={e => clickHandler(e, id)} alt={name} />
    </div>
  );
};

export default Item;
