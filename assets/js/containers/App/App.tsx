import React, { useState } from 'react';

import AreaModel from '../../api/models/areaModel';
import AreaPanel from '../../components/AreaPanel/AreaPanel';
import { AreaProps } from '../../components/Area/Area';
import { GET_ALL_AREAS, AreasResult } from '../../api/models/graphql/areaRequests';
import { GET_ALL_ITEMS, ItemsResult } from '../../api/models/graphql/itemRequests';
import ItemModel from '../../api/models/itemModel';
import ItemPanel from '../../components/ItemPanel/ItemPanel';
import { ItemProps } from '../../components/Item/Item';
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

const App: React.FC = (): React.ReactElement => {
  const [areas, setAreas] = useState<AreaModel[]>([]);
  const [items, setItems] = useState<ItemModel[]>([]);

  const transformAreas = (result: AreasResult): void => {
    const retrievedAreas = result.areas.map(
      (model: AreaModel, i: number): AreaModel => {
        const open: boolean = areas.length > 0 ? areas[i].open : false;

        return {
          name: model.name,
          locations: model.locations,
          open
        };
      }
    );
    setAreas(retrievedAreas);
  };

  const transformItems = (result: ItemsResult): void => {
    setItems(result.items);
  };

  useQuery(GET_ALL_AREAS, transformAreas);
  useQuery(GET_ALL_ITEMS, transformItems);

  const areaProps: AreaProps[] = areas.map((area: AreaModel) => {
    const toggleOpen = (areaName: string): void => {
      const newAreas: AreaModel[] = [...areas].map(
        (prevArea: AreaModel): AreaModel => {
          return prevArea.name === areaName ? { ...prevArea, open: !prevArea.open } : prevArea;
        }
      );
      setAreas(newAreas);
    };

    return {
      ...area,
      clickHandler: toggleOpen
    };
  });

  const itemProps: ItemProps[] = items.map(item => {
    const selectItem = (
      event: React.MouseEvent<HTMLImageElement, MouseEvent>,
      id: string
    ): void => {
      const { button } = event;
      const newItems: ItemModel[] = [...items].map(prevItem => {
        return prevItem.id === id
          ? { ...prevItem, level: getNextItemLevel(prevItem, button) }
          : prevItem;
      });

      setItems(newItems);
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
