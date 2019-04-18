import React, { useState } from 'react';

import Area from '../../components/Area/Area';
import { GET_ALL_AREAS, AreasResult } from '../../api/models/graphql/areaQueries';
import AreaModel from '../../api/models/areaModel';
import useQuery from '../../hooks/useQuery';

const LocationPanel: React.FC = (): React.ReactElement => {
  const [areas, setAreas] = useState<AreaModel[]>([]);

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

  useQuery(GET_ALL_AREAS, transformAreas);

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
