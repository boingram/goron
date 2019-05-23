import React, { useContext, useEffect, useReducer } from 'react';
import ApolloClient, { FetchResult } from 'apollo-boost';

import ApolloContext from '../../context';
import AreaModel from '../../api/models/areaModel';
import AreaPanel from '../../components/AreaPanel/AreaPanel';
import { AreaProps } from '../../components/Area/Area';
import { GET_ALL_AREAS, AreasResult } from '../../api/models/graphql/areaRequests';
import {
  GET_ALL_ITEMS,
  ItemMutationOptions,
  ItemMutationResult,
  ItemMutationVariables,
  ItemsResult,
  UPDATE_ITEM
} from '../../api/models/graphql/itemRequests';
import ItemPanel from '../../components/ItemPanel/ItemPanel';
import { ItemProps } from '../../components/Item/Item';
import {
  DECREMENT_ITEM_LEVEL,
  INCREMENT_ITEM_LEVEL,
  reducer,
  TOGGLE_AREA,
  ToggleAreaAction,
  ItemUpdateAction,
  ItemLevelUpdateAction,
  UPDATE_ITEMS,
  AreaUpdateAction,
  UPDATE_AREAS
} from './AppReducer';
import useQuery from '../../hooks/useQuery';

const LEFT_BUTTON = 0;

const App: React.FC = (): React.ReactElement => {
  const apolloClient: ApolloClient<object> = useContext(ApolloContext);

  const initialState = { areas: [], items: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const options: ItemMutationOptions = {
      mutation: UPDATE_ITEM,
      variables: {
        id: '1',
        itemId: 'ocarina',
        level: 2
      }
    };
    apolloClient
      .mutate<ItemMutationResult, ItemMutationVariables>(options)
      .then((result: FetchResult<ItemMutationResult, Record<string, any>>) => {
        if (result.data && result.data.updateItem) {
          const action: AreaUpdateAction = { type: UPDATE_AREAS, areas: result.data.updateItem.areas };
          dispatch(action);
        }
      });
  }, [state.items]);

  const transformAreas = (result: AreasResult): void => {
    const retrievedAreas: AreaModel[] = result.areas.map(
      (model: AreaModel, i: number): AreaModel => {
        const open: boolean = result.areas.length > 0 ? result.areas[i].open : false;

        return {
          name: model.name,
          locations: model.locations,
          open
        };
      }
    );
    const action: AreaUpdateAction = { type: UPDATE_AREAS, areas: retrievedAreas };
    dispatch(action);
  };

  const transformItems = (result: ItemsResult): void => {
    const action: ItemUpdateAction = { type: UPDATE_ITEMS, items: result.items };
    dispatch(action);
  };

  // todo only call this once
  useQuery(GET_ALL_AREAS, transformAreas);
  useQuery(GET_ALL_ITEMS, transformItems);

  const areaProps: AreaProps[] = state.areas.map((area: AreaModel) => {
    const toggleOpen = (areaName: string): void => {
      const action: ToggleAreaAction = { type: TOGGLE_AREA, areaName };
      dispatch(action);
    };

    return {
      ...area,
      clickHandler: toggleOpen
    };
  });

  const itemProps: ItemProps[] = state.items.map(item => {
    const selectItem = (event: React.MouseEvent<HTMLImageElement, MouseEvent>, id: string): void => {
      const { button } = event;
      const type = button === LEFT_BUTTON ? INCREMENT_ITEM_LEVEL : DECREMENT_ITEM_LEVEL;
      const action: ItemLevelUpdateAction = { type, itemId: id };
      dispatch(action);
    };

    return {
      ...item,
      clickHandler: selectItem
    };
  });

  return (
    <div>
      <ItemPanel items={itemProps} />
      <AreaPanel areas={areaProps} />
    </div>
  );
};

export default App;
