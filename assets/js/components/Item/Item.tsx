import React from 'react';

import ItemModel from '../../api/models/itemModel';

const Item: React.FC<ItemModel> = (props: ItemModel): React.ReactElement => {
  const { id, name, selected } = props;
  return (
    <div>
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>Selected: {selected.toString()}</p>
    </div>
  );
};

export default Item;
