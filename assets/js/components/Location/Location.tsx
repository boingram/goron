import React from 'react';

import LocationModel from '../../api/models/locationModel';

type LocationProps = LocationModel;

const Location: React.FC<LocationProps> = (props: LocationProps): React.ReactElement => {
  const { name } = props;
  return <li>{name}</li>;
};

export default Location;
