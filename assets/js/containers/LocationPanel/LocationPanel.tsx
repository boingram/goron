import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';

import { getAllLocations } from '../../api/goronApi';
import LocationModel from '../../api/models/locationModel';

type MappedLocation = Map<string, LocationModel[]>;

const LocationPanel: React.FC = (): React.ReactElement => {
  const [locations, setLocations] = useState<MappedLocation>(new Map());

  useEffect(() => {
    getAllLocations().then((response: AxiosResponse<MappedLocation>) => {
      setLocations(response.data);
    });
  }, []);

  return <div />;
};

export default LocationPanel;
