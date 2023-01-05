import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { stringify } from "qs";

/**
 * Create a new Axios client instance
 * @see https://github.com/mzabriskie/axios#creating-an-instance
 */
export class QueryClient {
  protected readonly client: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.client = axios.create({
      ...config,
      paramsSerializer(params) {
        return stringify(params, {
          allowDots: true,
        });
      },
    });
  }
}

export const getClient = (config?: AxiosRequestConfig) => {
  return axios.create({
    ...config,
    paramsSerializer(params) {
      return stringify(params, {
        allowDots: true,
      });
    },
  });
};
