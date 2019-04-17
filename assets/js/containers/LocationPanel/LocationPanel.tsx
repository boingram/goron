import React, { useState, useEffect, useContext } from 'react';
import ApolloClient, { ApolloQueryResult } from 'apollo-boost';

import ApolloContext from '../../context';
import Area from '../../components/Area/Area';
import { GET_ALL_AREAS, AreasResult } from '../../api/models/graphql/areaQueries';
import AreaModel from '../../api/models/areaModel';

const LocationPanel: React.FC = (): React.ReactElement => {
  const [areas, setAreas] = useState<AreaModel[]>([]);

  const apolloClient: ApolloClient<object> = useContext(ApolloContext);

  useEffect(() => {
    apolloClient.query({ query: GET_ALL_AREAS }).then((result: ApolloQueryResult<AreasResult>) => {
      const retrievedAreas = result.data.areas.map(
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
    });
  }, []);

  const areaComponents: React.ReactElement[] = areas.map((area: AreaModel) => {
    const toggleOpen = (areaName: string): void => {
      const newAreas: AreaModel[] = [...areas].map(
        (prevArea: AreaModel): AreaModel => {
          return prevArea.name === areaName ? { ...prevArea, open: !prevArea.open } : prevArea;
        }
      );

      setAreas(newAreas);
    };
    return <Area key={area.name} clickHandler={() => toggleOpen(area.name)} {...area} />;
  });

  return <div>{areaComponents}</div>;
};

export default LocationPanel;
