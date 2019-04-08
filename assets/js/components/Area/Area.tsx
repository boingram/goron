import React from 'react';

import AreaModel from '../../api/models/areaModel';
import classes from './Area.module.css';
import Location from '../Location/Location';

type AreaClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

export interface AreaProps extends AreaModel {
  clickHandler: AreaClickHandler;
}

const Area: React.FC<AreaProps> = (props: AreaProps): React.ReactElement => {
  const { area, locations, clickHandler, open } = props;

  let locationComponents: React.ReactElement[] = [];
  if (open) {
    locationComponents = locations.map(location => <Location key={location.id} {...location} />);
  }

  return (
    <div className={classes.area}>
      <button onClick={clickHandler} type="button">
        {area}
      </button>
      <ul>{locationComponents}</ul>
    </div>
  );
};

export default Area;
