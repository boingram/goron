import React from 'react';

import classes from './ItemPanel.module.css';
import Item, { ItemProps } from '../Item/Item';

export interface ItemPanelProps {
  items: ItemProps[];
}

const ItemPanel: React.FC<ItemPanelProps> = (props: ItemPanelProps): React.ReactElement => {
  const { items } = props;
  const itemElements = items.map(item => <Item key={item.id} {...item} />);

  return (
    <div className={classes.itemPanel} onContextMenu={(e: React.MouseEvent) => e.preventDefault()}>
      {itemElements}
    </div>
  );
};

export default ItemPanel;
