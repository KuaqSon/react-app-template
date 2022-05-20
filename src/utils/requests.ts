import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as AuthService from 'services/auth-service';

// App won't redirected to Login page on 401 Error if it's calling these APIs
const authWhiteListAPIs = ['/auth/login'];

const requestAuthInterceptor = (req: AxiosRequestConfig): AxiosRequestConfig => {
  const token = AuthService.getToken();
  if (token) {
    return {
      ...req,
      headers: {
        ...req.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  }
  return req;
};

const responseRejectInterceptor = (res: any): AxiosResponse => {
  if (!res || !res.response || res?.response?.status === 500) {
    if (process.env.NODE_ENV !== 'development') {
      AuthService.toErrorPage();
    } else {
      return { status: 500, statusText: 'Oops, something went wrong!' } as AxiosResponse;
    }
  }

  if (
    res?.response?.status === 401 &&
    authWhiteListAPIs.filter((reqUrl: string) => res?.response?.config?.url.search(reqUrl) !== -1).length === 0
  ) {
    AuthService.logOut();
    window.location.href = '/';
  }

  return res.response;
};

const responseFulfilledInterceptor = (res: any): AxiosResponse => {
  if (res.data.error) {
    throw new Error(res.data.message);
  }
  return res;
};

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});

instance.interceptors.request.use(requestAuthInterceptor);
instance.interceptors.response.use(responseFulfilledInterceptor, responseRejectInterceptor);

export default instance;
