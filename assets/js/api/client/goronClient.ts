import axios, { AxiosInstance } from 'axios';

const goronClient = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: 'http://localhost:4000/api'
  });
  return instance;
};

export default goronClient();
