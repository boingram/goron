import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

import AreaModel from '../areaModel';
import ItemModel from '../itemModel';

export const GET_ALL_ITEMS: DocumentNode = gql`
  {
    items {
      id
      name
      upgradeNames
      image
      upgradeImages
      level
      maxLevel
    }
  }
`;

export const UPDATE_ITEM: DocumentNode = gql`
  mutation UpdateItem($id: String, $itemId: String!, $level: Int!) {
    updateItem(id: $id, itemId: $itemId, level: $level) {
      id
      areas {
        name
        locations {
          id
          name
          accessible
          visited
        }
      }
    }
  }
`;

export interface ItemsResult {
  items: ItemModel[];
}

export interface ItemMutationVariables {
  id: string;
  itemId: string;
  level: number;
}

export interface ItemMutationOptions {
  mutation: DocumentNode;
  variables: ItemMutationVariables;
}

export interface ItemMutationResult {
  updateItem: {
    areas: AreaModel[];
  };
}
