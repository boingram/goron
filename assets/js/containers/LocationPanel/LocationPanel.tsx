import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';

import Area from '../../components/Area/Area';
import { getAllLocations } from '../../api/goronApi';
import AreaModel from '../../api/models/areaModel';

const LocationPanel: React.FC = (): React.ReactElement => {
  const [areas, setAreas] = useState<AreaModel[]>([]);

  useEffect(() => {
    getAllLocations().then((response: AxiosResponse<AreaModel[]>) => {
      const retrievedAreas = response.data.map(
        (model: AreaModel, i: number): AreaModel => {
          const open: boolean = areas.length > 0 ? areas[i].open : false;

          return {
            area: model.area,
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
          return prevArea.area === areaName ? { ...prevArea, open: !prevArea.open } : prevArea;
        }
      );

      setAreas(newAreas);
    };
    return <Area key={area.area} clickHandler={() => toggleOpen(area.area)} {...area} />;
  });

  return <div>{areaComponents}</div>;
};

export default LocationPanel;
