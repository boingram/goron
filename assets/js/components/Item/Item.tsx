import React from 'react';

import ItemModel from '../../api/models/itemModel';

const Item: React.FC<ItemModel> = (props: ItemModel): React.ReactElement => {
  const { image } = props;
  const imgSrc = `images/items/${image}.png`;
  return (
    <div>
      <img src={imgSrc} alt="" />
    </div>
  );
};

export default Item;
