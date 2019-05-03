import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

import AreaModel from '../areaModel';

export const GET_ALL_AREAS: DocumentNode = gql`
  {
    areas {
      name
      locations {
        id
        name
        area
        accessible
        visited
      }
    }
  }
`;

export interface AreasResult {
  areas: AreaModel[];
}
