import Axios from "axios";
import { baseURL } from "@/env";
import { logger } from "@/utils/Logger";
import type { AxiosError } from "axios";

export const api = Axios.create({
  baseURL,
  timeout: 8000,
});

api.interceptors.request.use((config) => config, handleAxiosError);
api.interceptors.response.use((response) => response, handleAxiosError);

function handleAxiosError(error: AxiosError) {
  if (error.response) {
    logger.warn("[📡 AXIOS_ERROR_RESPONSE_DATA]", error.response.data);
  } else if (error.request) {
    logger.warn("[📡 AXIOS_ERROR_NO_RESPONSE]", error.request);
  } else {
    logger.warn("[📡 AXIOS_ERROR_INVALID_REQUEST]", error.message);
  }
  return Promise.reject(error);
}
