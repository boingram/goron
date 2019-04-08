import React from 'react';

import AreaModel from '../../api/models/areaModel';

export type AreaProps = AreaModel;

const Area: React.FC<AreaProps> = (props: AreaProps): React.ReactElement => {
  const { area } = props;

  return (
    <div>
      <ul>{area}</ul>
    </div>
  );
};

export default Area;
