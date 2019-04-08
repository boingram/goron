import React from 'react';

import classes from './Location.module.css';
import LocationModel from '../../api/models/locationModel';

type LocationProps = LocationModel;

const Location: React.FC<LocationProps> = (props: LocationProps): React.ReactElement => {
  const { name, accessible } = props;

  let listClasses = [classes.accessible];
  if (!accessible) {
    listClasses = [classes.unaccessible];
  }

  return <li className={listClasses.join()}>{name}</li>;
};

export default Location;
