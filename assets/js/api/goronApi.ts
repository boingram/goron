import { AxiosPromise } from 'axios';
import goronClient from './client/goronClient';
import ItemModel from './models/itemModel';

const getAllItems: Function = (): AxiosPromise<ItemModel[]> => {
  return goronClient.get('/items');
};

export default getAllItems;
