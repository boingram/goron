import React, { useState } from 'react';

import { GET_ALL_ITEMS, ItemsResult } from '../../api/models/graphql/itemRequests';
import Item from '../../components/Item/Item';
import ItemModel from '../../api/models/itemModel';
import useQuery from '../../hooks/useQuery';

const LEFT_BUTTON = 0;
const RIGHT_BUTTON = 2;

const getNextItemLevel = (item: ItemModel, button: number): number => {
  if (LEFT_BUTTON === button) {
    return item.level >= item.maxLevel ? item.maxLevel : item.level + 1;
  }
  if (RIGHT_BUTTON === button) {
    return item.level <= 0 ? 0 : item.level - 1;
  }
  return item.level;
};

const ItemPanel: React.FC = (): React.ReactElement => {
  const [items, setItems] = useState<ItemModel[]>([]);

  const updateState = (result: ItemsResult): void => {
    setItems(result.items);
  };

  useQuery(GET_ALL_ITEMS, updateState);

  const itemComponents = items.map(item => {
    const selectItem = (
      event: React.MouseEvent<HTMLImageElement, MouseEvent>,
      id: number
    ): void => {
      const { button } = event;
      const newItems: ItemModel[] = [...items].map(prevItem => {
        return prevItem.id === id
          ? { ...prevItem, level: getNextItemLevel(prevItem, button) }
          : prevItem;
      });

      setItems(newItems);
    };

    return <Item key={item.id} clickHandler={event => selectItem(event, item.id)} {...item} />;
  });

  return (
    <div className={classes.itemPanel} onContextMenu={(e: React.MouseEvent) => e.preventDefault()}>
      {itemComponents}
    </div>
  );
};

export default ItemPanel;
