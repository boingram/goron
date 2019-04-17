import React, { useState, useEffect, useContext } from 'react';
import ApolloClient, { ApolloQueryResult } from 'apollo-boost';

import ApolloContext from '../../context';
import classes from './ItemPanel.module.css';
import { GET_ALL_ITEMS, ItemsResult } from '../../api/models/graphql/itemQueries';
import Item from '../../components/Item/Item';
import ItemModel from '../../api/models/itemModel';

const ItemPanel: React.FC = (): React.ReactElement => {
  const [items, setItems] = useState<ItemModel[]>([]);

  const apolloClient: ApolloClient<object> = useContext(ApolloContext);

  useEffect(() => {
    apolloClient.query({ query: GET_ALL_ITEMS }).then((result: ApolloQueryResult<ItemsResult>) => {
      setItems(result.data.items);
    });
  }, []);

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
