import React from 'react';

import AreaModel from '../../api/models/areaModel';
import Location from '../Location/Location';

export type AreaProps = AreaModel;

const Area: React.FC<AreaProps> = (props: AreaProps): React.ReactElement => {
  const { area, locations } = props;

  return (
    <div>
      {area}
      <ul>
        {locations.map(location => (
          <Location key={location.id} {...location} />
        ))}
      </ul>
    </div>
  );
};

export default Area;
