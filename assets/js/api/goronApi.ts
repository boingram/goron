import { AxiosPromise } from 'axios';
import AreaModel from './models/areaModel';
import goronClient from './client/goronClient';
import ItemModel from './models/itemModel';

export const getAllItems: Function = (): AxiosPromise<ItemModel[]> => {
  return goronClient.get('/items');
};

export const getAllLocations: Function = (): AxiosPromise<AreaModel[]> => {
  return goronClient.get('/locations');
};
