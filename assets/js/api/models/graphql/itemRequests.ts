import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

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
  mutation UpdateItem($id: id, $itemId: id!, $level: integer!) {
    updateItem(id: $id, itemId: $itemId, level: $level) {
      id
      items {
        id
        level
      }
      areas {
        name
        locations {
          id
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
