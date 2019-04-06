import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';

import classes from './ItemPanel.module.css';
import getAllItems from '../../api/goronApi';
import Item from '../../components/Item/Item';
import ItemModel from '../../api/models/itemModel';

const ItemPanel: React.FC = (): React.ReactElement => {
  const [items, setItems] = useState<ItemModel[]>([]);

  useEffect(() => {
    getAllItems().then((response: AxiosResponse<ItemModel[]>) => {
      setItems(response.data);
    });
  }, []);

  const itemComponents = items.map(item => {
    const selectItem = (id: number): void => {
      const newItems: ItemModel[] = [...items].map(prevItem => {
        return prevItem.id === id
          ? { ...prevItem, selected: !prevItem.selected }
          : prevItem;
      });

      setItems(newItems);
    };

    return (
      <Item key={item.id} clickHandler={() => selectItem(item.id)} {...item} />
    );
  });

  return <div className={classes.itemPanel}>{itemComponents}</div>;
};

export default ItemPanel;
