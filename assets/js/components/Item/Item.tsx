import React from 'react';

import classes from './Item.module.css';
import ItemModel from '../../api/models/itemModel';

const Item: React.FC<ItemModel> = (props: ItemModel): React.ReactElement => {
  const { image } = props;
  const imgSrc = `images/items/${image}.png`;
  return (
    <div className={classes.item}>
      <img src={imgSrc} alt="" />
    </div>
  );
};

export default Item;
