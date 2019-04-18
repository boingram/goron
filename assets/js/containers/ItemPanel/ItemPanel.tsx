import React, { useState } from 'react';

import classes from './ItemPanel.module.css';
import { GET_ALL_ITEMS, ItemsResult } from '../../api/models/graphql/itemQueries';
import Item from '../../components/Item/Item';
import ItemModel from '../../api/models/itemModel';
import useQuery from '../../hooks/useQuery';

const ItemPanel: React.FC = (): React.ReactElement => {
  const [items, setItems] = useState<ItemModel[]>([]);

  const updateState = (result: ItemsResult): void => {
    setItems(result.items);
  };

  useQuery(GET_ALL_ITEMS, updateState);

  const itemComponents = items.map(item => {
    const selectItem = (id: number): void => {
      const newItems: ItemModel[] = [...items].map(prevItem => {
        return prevItem.id === id ? { ...prevItem, selected: !prevItem.selected } : prevItem;
      });

      setItems(newItems);
    };

    return <Item key={item.id} clickHandler={() => selectItem(item.id)} {...item} />;
  });

  return <div className={classes.itemPanel}>{itemComponents}</div>;
};

export default ItemPanel;
