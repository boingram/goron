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

export interface ItemsResult {
  items: ItemModel[];
}
