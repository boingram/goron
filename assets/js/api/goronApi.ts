import { AxiosPromise } from 'axios';
import goronClient from './client/goronClient';
import ItemModel from './models/itemModel';
import LocationModel from './models/locationModel';

export const getAllItems: Function = (): AxiosPromise<ItemModel[]> => {
  return goronClient.get('/items');
};

export const getAllLocations: Function = (): AxiosPromise<Map<string, LocationModel[]>> => {
  return goronClient.get('/locations');
};
