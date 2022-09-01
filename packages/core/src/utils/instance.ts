import axios from "axios";

export const instance = (baseURL: string) =>
  axios.create({
    baseURL,
  });
