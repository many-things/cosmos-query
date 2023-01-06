import axios from "axios";
import { stringify } from "qs";

const instance = (baseURL: string) =>
  axios.create({
    baseURL,
    paramsSerializer: {
      serialize: (params: Record<string, any>) => {
        return stringify(params, { allowDots: true });
      },
    },
  });

export const osmosisInstance = instance("https://api-osmosis.imperator.co");
