import axios from "axios";
import { stringify } from "qs";

export const instance = (baseURL: string) =>
  axios.create({
    baseURL,
    paramsSerializer(params) {
      return stringify(params, {
        allowDots: true,
      });
    },
  });
