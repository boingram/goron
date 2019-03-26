import React from 'react';

import ItemModel from '../../api/models/itemModel';

const Item: React.FC<ItemModel> = (props: ItemModel): React.ReactElement => {
  const { id } = props;
  return (
    <div>
      <p>
        Id:
        {id}
      </p>
    </div>
  );
};

export default Item;
