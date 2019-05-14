import React, { useState } from 'react';

import { GET_ALL_AREAS, AreasResult } from '../../api/models/graphql/areaRequests';
import AreaModel from '../../api/models/areaModel';
import AreaPanel from '../../components/AreaPanel/AreaPanel';
import { AreaProps } from '../../components/Area/Area';
import useQuery from '../../hooks/useQuery';

const App: React.FC = (): React.ReactElement => {
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

  return (
    <div>
      <AreaPanel areas={areaProps} />
    </div>
  );
};

export default App;
