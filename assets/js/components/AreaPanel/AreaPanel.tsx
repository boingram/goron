import React from 'react';

import Area, { AreaProps } from '../Area/Area';

export interface AreaPanelProps {
  areas: AreaProps[];
}

const AreaPanel: React.FC<AreaPanelProps> = (props: AreaPanelProps): React.ReactElement => {
  const { areas } = props;
  const areaElements = areas.map((area): React.ReactElement => <Area key={area.name} {...area} />);

  return <div>{areaElements}</div>;
};

export default AreaPanel;
