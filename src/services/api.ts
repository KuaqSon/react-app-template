import { AxiosResponse } from 'axios';
import qs from 'qs';
import * as AuthService from 'services/auth-service';
import { sleep } from 'utils/helper';
import request from 'utils/requests';

const makeRequest = async (reqFunc: Function, errorFunc?: Function): Promise<AxiosResponse> => {
  try {
    return reqFunc();
  } catch (error) {
    if (errorFunc) errorFunc();

    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error(error);
    }

    return Promise.resolve({ status: 500, statusText: 'something went wrong please try again!' } as AxiosResponse);
  }
};

export const mockLoginApi = async (params: any): Promise<AxiosResponse> => {
  await sleep(2000);
  const { email, password } = params;
  if (email === 'demo@demo.com' && password === 'demo') {
    return { data: { token: 'aaaaa' }, status: 200 } as AxiosResponse;
  }

  return { status: 401 } as AxiosResponse;
};

export const mockCurrentUserApi = async (): Promise<AxiosResponse> => {
  console.log('🚀 ~ mockCurrentUserApi');
  const isAuthenticated = AuthService.isAuthenticated();
  if (!isAuthenticated) {
    return { status: 400 } as AxiosResponse;
  }

  await sleep(2000);

  return {
    data: {
      user: {
        id: 1,
        name: 'Joe Doe',
        title: 'Mr',
        birthday: '1994-10-25T19:08:24.122Z',
        address: 'Mallow, Clare, Ireland',
      },
    },
    status: 200,
  } as AxiosResponse;
};

export const mockRandomQuotesApi = async (): Promise<AxiosResponse> =>
  makeRequest(() => request.get('https://animechan.vercel.app/api/quotes'));

export const mockFootballStandingsApi = async (): Promise<AxiosResponse> =>
  makeRequest(() =>
    request.get('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2021&sort=asc')
  );

export const loginApi = async (params: any): Promise<AxiosResponse> =>
  makeRequest(() => request.post('/api/auth/login', params));

export const registerApi = async (params: any): Promise<AxiosResponse> =>
  makeRequest(() => request.post('/api/auth/register', params));

export const getCurrentUserApi = async (): Promise<AxiosResponse> => makeRequest(() => request.get('/api/auth/me'));

export const getSampleDataApi = async (params: any): Promise<AxiosResponse> =>
  makeRequest(() => request.get(`/api/sample?${qs.stringify({ ...params })}`));
