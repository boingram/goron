import React from 'react';

import classes from './ItemPanel.module.css';
import Item, { ItemProps } from '../Item/Item';

export interface ItemPanelProps {
  items: ItemProps[];
}

const ItemPanel: React.FC<ItemPanelProps> = (props: ItemPanelProps): React.ReactElement => {
  const { items } = props;
  const itemElements = items.map((item): React.ReactElement => <Item key={item.id} {...item} />);

  return (
    <div className={classes.itemPanel} onContextMenu={(e: React.MouseEvent): void => e.preventDefault()}>
      {itemElements}
    </div>
  );
};

export default ItemPanel;
