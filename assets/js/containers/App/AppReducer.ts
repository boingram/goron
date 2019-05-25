import AppState from './AppState';
import AreaModel from '../../api/models/areaModel';
import ItemModel from '../../api/models/itemModel';

export const DECREMENT_ITEM_LEVEL = 'DECREMENT_ITEM_LEVEL';
export const INCREMENT_ITEM_LEVEL = 'INCREMENT_ITEM_LEVEL';
export const TOGGLE_AREA = 'TOGGLE_AREA';
export const UPDATE_AREAS = 'UPDATE_AREAS';
export const UPDATE_ITEMS = 'UPDATE_ITEMS';

export interface AppReducerAction {
  type: 'DECREMENT_ITEM_LEVEL' | 'INCREMENT_ITEM_LEVEL' | 'TOGGLE_AREA' | 'UPDATE_AREAS' | 'UPDATE_ITEMS';
}

export interface ItemLevelUpdateAction extends AppReducerAction {
  itemId: string;
}

export interface ToggleAreaAction extends AppReducerAction {
  areaName: string;
}

export interface AreaUpdateAction extends AppReducerAction {
  areas: AreaModel[];
}

export interface ItemUpdateAction extends AppReducerAction {
  items: ItemModel[];
}

const handleAreaSelection = (state: AppState, areaName: string): AppState => {
  const { areas } = state;

  const newAreas: AreaModel[] = [...areas].map(
    (prevArea: AreaModel): AreaModel => {
      return prevArea.name === areaName ? { ...prevArea, open: !prevArea.open } : prevArea;
    }
  );

  return {
    ...state,
    areas: newAreas
  };
};

const getNextItemLevel = (item: ItemModel, itemAction: string): number => {
  if (INCREMENT_ITEM_LEVEL === itemAction) {
    return item.level >= item.maxLevel ? item.maxLevel : item.level + 1;
  }
  if (DECREMENT_ITEM_LEVEL === itemAction) {
    return item.level <= 0 ? 0 : item.level - 1;
  }
  return item.level;
};

const handleItemSelection = (state: AppState, itemId: string, actionType: string): AppState => {
  const { items } = state;
  let newItem: ItemModel | null = null;
  const newItems: ItemModel[] = [...items].map(
    (prevItem): ItemModel => {
      if (prevItem.id !== itemId) {
        return prevItem;
      }

      newItem = { ...prevItem, level: getNextItemLevel(prevItem, actionType) };
      return newItem;
    }
  );

  if (!newItem) {
    return state;
  }

  return { ...state, items: newItems };
};

const handleUpdateAreas = (state: AppState, areas: AreaModel[]): AppState => {
  const newAreas: AreaModel[] = areas.map(
    (model: AreaModel, i: number): AreaModel => {
      const open: boolean = state.areas.length > 0 ? state.areas[i].open : false;

      return {
        name: model.name,
        locations: model.locations,
        open
      };
    }
  );
  return {
    ...state,
    areas: newAreas
  };
};

const handleUpdateItems = (state: AppState, items: ItemModel[]): AppState => {
  return {
    ...state,
    items
  };
};

export const reducer = (state: AppState, action: AppReducerAction): AppState => {
  if (action.type === DECREMENT_ITEM_LEVEL || action.type === INCREMENT_ITEM_LEVEL) {
    const itemUpdateAction: ItemLevelUpdateAction = action as ItemLevelUpdateAction;
    return handleItemSelection(state, itemUpdateAction.itemId, itemUpdateAction.type);
  }
  if (action.type === TOGGLE_AREA) {
    return handleAreaSelection(state, (action as ToggleAreaAction).areaName);
  }
  if (action.type === UPDATE_AREAS) {
    return handleUpdateAreas(state, (action as AreaUpdateAction).areas);
  }
  if (action.type === UPDATE_ITEMS) {
    return handleUpdateItems(state, (action as ItemUpdateAction).items);
  }

  return state;
};
