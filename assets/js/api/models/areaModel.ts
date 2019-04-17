import LocationModel from './locationModel';

export default interface AreaModel {
  name: string;
  open: boolean;
  locations: LocationModel[];
}
