import axios from 'axios';
import {ToastAndroid} from 'react-native';
import * as NavigationService from '../navigation/navigationService';
import { useStore } from '../store';

export const apiClient = (token = '') => {
  let headers = {
    'Content-Type': 'application/json',
  };

  let headersAuth = {
    'user-token': token,
  };

  const CancelToken = axios.CancelToken;
  let cancel;
  const request = axios.create({
    baseURL: 'https://heroictent.backendless.app/api',
    timeout: 5000,
    headers: token !== '' ? {...headers, ...headersAuth} : headers,
    cancelToken: new CancelToken(function executor(c) {
      cancel = c;
    }),
  });

  request.interceptors.response.use(
    async function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    async function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      let code = null;
      code = error?.response?.data?.code;
      if (code == 3048) {
        ToastAndroid.show('Session Expired.', ToastAndroid.LONG);
        NavigationService.resetTo('Login');
      }

      return Promise.reject(error);
    },
  );

  return {
    request,
    cancel,
  };
};
