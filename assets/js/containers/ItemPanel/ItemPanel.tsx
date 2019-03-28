import React, { useState, useEffect } from 'react';

import classes from './ItemPanel.module.css';
import getAllItems from '../../api/goronApi';
import Item from '../../components/Item/Item';
import ItemModel from '../../api/models/itemModel';

const ItemPanel: React.FC = (): React.ReactElement => {
  const [items, setItems] = useState<ItemModel[]>([]);

  useEffect(() => {
    getAllItems()
      .then(response => {
        setItems(response.data);
      })
      .catch(error => console.log(`error getting items: ${error}`));
  }, []);

  const itemComponents = items.map(item => <Item key={item.id} {...item} />);

  return <div className={classes.itemPanel}>{itemComponents}</div>;
};

export default ItemPanel;
