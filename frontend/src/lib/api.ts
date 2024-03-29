import { Api } from '../backend-api';
import { apiURL } from '../constants';

export const getBackendApi = () =>
  new Api({
    baseURL: apiURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
