import AreaModel from '../../api/models/areaModel';
import ItemModel from '../../api/models/itemModel';

export default interface AppState {
  areas: AreaModel[];
  items: ItemModel[];
}
