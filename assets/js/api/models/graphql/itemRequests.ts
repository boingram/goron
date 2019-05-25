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
  mutation UpdateItem($id: String, $items: VisitedItemInput) {
    updateItem(id: $id, items: $items) {
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

export interface VisitedItemInput {
  id: string;
  level: number;
  maxLevel: number;
}

export interface ItemMutationVariables {
  id: string;
  items: VisitedItemInput[];
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
