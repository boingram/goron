import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';

import Area, { AreaProps } from '../../components/Area/Area';
import { getAllLocations } from '../../api/goronApi';
import AreaModel from '../../api/models/areaModel';

const LocationPanel: React.FC = (): React.ReactElement => {
  const [locations, setLocations] = useState<AreaModel[]>([]);

  useEffect(() => {
    getAllLocations().then((response: AxiosResponse<AreaModel[]>) => {
      setLocations(response.data);
    });
  }, []);

  const areaComponents: React.ReactElement[] = locations.map((location: AreaProps) => (
    <Area key={location.area} {...location} />
  ));

  return <div>{areaComponents}</div>;
};

export default LocationPanel;
