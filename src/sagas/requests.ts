import axios from "axios";
import { URLS } from "../resources/configs";

const axiosInstance = axios.create({
  baseURL: URLS.BASE
});

export const getByAxios = async <T>(url: string, { headers = {}, params = {} } = {}) => {
  return axiosInstance
    .get<T>(url, { headers, params })
    .then(res => {
      return { res };
    })
    .catch(err => {
      return { err };
    });
};

export const postByAxios = async <T>(
  url: string,
  body: object,
  { headers = {}, params = {} } = {}
) => {
  return axiosInstance
    .post<T>(url, body, { headers, params })
    .then(res => {
      return { res };
    })
    .catch(err => {
      return { err };
    });
};

export const putByAxios = async <T>(
  url: string,
  body: object,
  { headers = {}, params = {} } = {}
) => {
  return axiosInstance
    .put<T>(url, body, { headers, params })
    .then(res => {
      return { res };
    })
    .catch(err => {
      return { err };
    });
};

export const patchByAxios = async <T>(
  url: string,
  body: object,
  { headers = {}, params = {} } = {}
) => {
  return axiosInstance
    .patch<T>(url, body, { headers, params })
    .then(res => {
      return { res };
    })
    .catch(err => {
      return { err };
    });
};

export const deleteByAxios = async <T>(url: string, { headers = {}, params = {} } = {}) => {
  return axiosInstance
    .delete<T>(url, { headers, params })
    .then(res => {
      return { res };
    })
    .catch(err => {
      return { err };
    });
};
