import React from 'react';

import Area from '../Area/Area';
import AreaModel from '../../api/models/areaModel';

export interface AreaPanelProps {
  areas: AreaModel[];
}

const AreaPanel: React.FC<AreaPanelProps> = (props: AreaPanelProps): React.ReactElement => {
  const { areas } = props;
  const areaElements = areas.map(area => (
    <Area key={area.name} clickHandler={() => {}} {...area} />
  ));

  return <div>{areaElements}</div>;
};

export default AreaPanel;
