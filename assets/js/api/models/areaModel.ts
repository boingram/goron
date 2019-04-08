import LocationModel from './locationModel';

export default interface AreaModel {
  area: string;
  open: boolean;
  locations: LocationModel[];
}
